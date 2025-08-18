import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import Image from "next/image";

export default function Home() {
  return (
    <div>home
     <ClerkProvider>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
    
  </ClerkProvider>
</div>
  );
}
