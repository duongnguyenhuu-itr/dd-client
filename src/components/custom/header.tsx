"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import classNames from "classnames";
import { MobileNavigation } from "./mobileNavigation";
import { Navigation } from "./navigation";
import { SearchForm } from "./searchForm";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const isMobile = useIsMobile();
  const menu = [
    {
      name: "Home",
      link: "/",
      // content: 
    }
  ]

  console.log('isMobile', isMobile);

  return (
    <div
      className={classNames("flex justify-center items-center border-b shadow-md h-12 px-4", props.className)}
    >
      <div className="grid gap-4 grid-cols-3 w-[1200px]">
        {isMobile && <MobileNavigation className="flex items-center" />}
        <div className={classNames("flex items-center", isMobile ? 'justify-center' : 'justify-start')}>logo</div>
        {!isMobile && <Navigation />}
        <div className="flex justify-end items-center gap-4">
          <SearchForm />

          <div>cart</div>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};
