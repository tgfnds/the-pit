import { ReactNode } from "react";
import Button from "../ui/Button";
import Link from "next/link";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

interface Props {
  children?: ReactNode;
}

function MainLayout({ children }: Props) {
  const { user } = useUser();

  return (
    <div data-theme="autumn" className="flex min-h-screen flex-col">
      <header className="container mx-auto border-b-2 border-primary px-2 py-4">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <h1 className="text-3xl font-extrabold tracking-tight">
              The <span className="text-primary">Pit</span>
            </h1>
          </Link>

          <div className="flex items-center gap-6">
            <SignOutButton>
              <Button className="btn-sm" variant={"secondary"}>
                Sign out
              </Button>
            </SignOutButton>

            <p className="text-lg font-semibold capitalize text-base-content">
              {user?.username}
            </p>

            {user?.profileImageUrl ? (
              <Image
                src={user.profileImageUrl}
                alt={"profile"}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-slate-700" />
            )}

            {/* <Button
              className="btn-sm"
              variant={sessionData ? "secondary" : "primary"}
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
              {sessionData ? "Sign out" : "Sign in"}
            </Button>

            {!sessionData && (
              <Link href={"/signup"}>
                <Button className="btn-sm" variant="secondary">
                  Sign Up
                </Button>
              </Link>
            )} */}
          </div>
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="container mx-auto border-t-2 border-primary px-2 py-4 text-center text-xl tracking-tight">
        Created by <span className="text-primary">@tgfnds</span>
      </footer>
    </div>
  );
}

export default MainLayout;
