import LoadingPage from "@/components/LoadingPage";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Logo from '../../public/Logo.png'
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3 cursor-pointer">
             <Image src={Logo} alt="Logo" className="w-10" width={200} height={100}/>
          <h1 className="font-extrabold text-2xl text-green-600 tracking-wide cursor-pointer">
            Wi-Lingo
          </h1>
        </div>
        <ClerkLoading>
          <LoadingPage />
        </ClerkLoading>
        <ClerkLoaded>
              <SignedIn>
                  <UserButton/>
              </SignedIn>
              <SignedOut>
                  <SignInButton
                    mode="modal"
                    signUpForceRedirectUrl='/learn'
                    signUpFallbackRedirectUrl='/learn'                    
                  >
                    <button className="btn-gost">LOGIN</button>
                  </SignInButton>
              </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};

export default Header;
