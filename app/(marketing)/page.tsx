import Image from "next/image";
import Hero from "../../public/Hero.png";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignUpButton,
  SignInButton,
} from "@clerk/nextjs";
import LoadingPage from "@/components/LoadingPage";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row p-4 gap-2 justify-center items-center">
      <div className="relative w-[350px] h-[350px] lg:w-[500px] lg:h-[450px] mb-8 lg:mb-0">
        <Image src={Hero} fill alt="Hero Image" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, practice, and master new language with Wi-Lingo
        </h1>
        <div className="flex flex-col">
          <ClerkLoading>
            <LoadingPage />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" signInFallbackRedirectUrl="/learn">
                <button className="btn-secondary">Get Started</button>
              </SignUpButton>
              <SignInButton mode="modal" signUpFallbackRedirectUrl="/learn">
                <button className="btn-primary-outline">
                  I already have an account.
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
                <button className="btn-secondary">
                  <Link href='/learn'>
                     Continue Learning
                  </Link>
                </button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
