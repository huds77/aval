import { SignInButton } from "@clerk/nextjs";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { prisma } from "@/src/lib/prisma";

export default async function LoginPage(){
    return(
        <div>
            <h1>Login</h1>
            <SignInButton>
                <button>Sign Up</button>
            </SignInButton>
    
        </div>
    )
}