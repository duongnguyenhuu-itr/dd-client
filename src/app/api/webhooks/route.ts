import CREATE_USER from "@/apollo/mutation/createUser";
import { createOrUpdateUser } from "@/lib/actions/user";
import { connectToDB } from "@/lib/mongodb/mongoose";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import axios from "axios";
import { query } from "express";

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  // Do something with payload
  // For this guide, log payload to console
  const { id } = evt.data;
  const eventType = evt.type;

  try {
    if (eventType === "user.created" || eventType === "user.updated") {
      const { id, email_addresses, first_name, last_name, image_url } =
        evt.data;

      if (!id || !email_addresses) {
        return new Response("Error: Missing user data", {
          status: 400,
        });
      }

      const user = {
        clerkId: id,
        email: email_addresses[0].email_address,
        firstName: first_name,
        lastName: last_name,
        imageUrl: image_url,
      };

      console.log("process.env.DATABASE_URL", process.env.DATABASE_URL);

      // fetch(process.env.DATABASE_URL || '', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',

      //   },
      //   body: JSON.stringify({
      //     query: CREATE_USER,
      //     variables: {
      //       input: user
      //     }
      //   })
      // }).then((res) => {
      //   console.log('Create user response:', res);
      //   if (res.ok) {
      //     console.log('Create user success');
      //   } else {
      //     console.log('Create user error');
      //   }
      // }).catch((error) => {
      //   console.log('Create user error:', error);
      // });

      const result = await axios.post(
        process.env.DATABASE_URL || "",
        {
          query: CREATE_USER,
          variables: {
            input: user,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // await createOrUpdateUser({
      //   id,
      //   first_name,
      //   last_name,
      //   image_url,
      //   email_addresses,
      // });
    }
  } catch (error: any) {
    console.log("Create user error:",error, error?.message, error?.response?.data);
  }

  return new Response("Webhook received", { status: 200 });
}
