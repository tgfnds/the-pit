import { type AppType } from "next/app";
import { type Session } from "next-auth";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import MainLayout from "~/components/layouts/MainLayout";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { useRouter } from "next/router";

const publicPages = ["/signin"];

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { pathname } = useRouter();

  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider>
      {isPublicPage ? (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      ) : (
        <>
          <SignedIn>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
