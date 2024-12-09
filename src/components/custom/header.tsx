"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import classNames from "classnames";
import { MobileNavigation } from "./mobileNavigation";
import { Navigation } from "./navigation";
import { SearchForm } from "./searchForm";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import ShoppingCartIcon from '@/assets/images/icons/shopping-cart.svg'
import { Button } from "../ui/button";

export const Header = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const isMobile = useIsMobile();
  const menu = [
    {
      name: "Home",
      link: "/",
      // content: 
    }
  ]

  return (
    <div
      className={classNames("flex justify-center items-center border-b shadow-md h-16 px-6 text-lg", props.className)}
    >
      <div className="w-full flex justify-between gap-6">
        <div className="flex items-center gap-4">
          <MobileNavigation className="flex items-center sm:hidden" />
          <div className="flex gap-2">
            <div>logo</div>
            <div className="hidden md:flex">logologo</div>
          </div>
        </div>
        <div className="hidden sm:flex flex-1 justify-end">
          <Navigation className="" />
        </div>
        <div className="flex justify-end items-center gap-4 ">
          <SearchForm className="flex-1" />
          <Image src={ShoppingCartIcon} alt="cart" width={24} height={24} className='cursor-pointer' />
          <div>
            <SignedOut>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
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
