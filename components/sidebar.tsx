import Image from "next/image";
import React from "react";
import Logo from "../public/Logo.png"
import Link from "next/link";
import SideBarItems from "./sideBarItems";
import Learn from "../public/learn.svg";
import leaderboad from "../public/leaderboard.svg";
import quests from "../public/quests.svg";
import shop from "../public/shop.svg";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import LoadingPage from "./LoadingPage";


const SideBar = () => {
  return (
    <div className="lg:bg-white bg-transparent h-full flex lg:w-[256px] lg:fixed left-0 top-0 lg:px-4 px-1 lg:border-r-2 flex-col">
          <Link href='/learn'>
         <div className="lg:pt-5 lg:pl-2  pt-0 pb-7 flex items-center gap-x-3 cursor-pointer">
             <Image src={Logo} alt="Logo" width={40} height={40}/>
          <h1 className="font-extrabold text-xl lg:text-2xl text-green-600 tracking-wide cursor-pointer">
            Wi-Lingo
          </h1>
        </div>
          </Link>
          <div className="flex flex-col flex-1 gap-y-2">
              <SideBarItems label="Learn" href="/learn" iconSrc={Learn}/>
              <SideBarItems label="Leaderboard" href="/leaderboard" iconSrc={leaderboad}/>
              <SideBarItems label="quests" href="/quests" iconSrc={quests}/>
              <SideBarItems label="shop" href="/shop" iconSrc={shop}/>
          </div>
          <div className="p-4">
            <ClerkLoading>
                <LoadingPage />
            </ClerkLoading>
            <ClerkLoaded>
              <UserButton afterSwitchSessionUrl="/" />
            </ClerkLoaded>
          </div>
    </div>
  );
};

export default SideBar;
