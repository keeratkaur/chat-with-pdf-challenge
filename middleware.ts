import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
    const { userId, redirectToSignIn } = await auth(); // Extract userId and redirect function

    if (isProtectedRoute(req) && !userId) {
        return redirectToSignIn(); // Redirect if the user is not signed in
    }

    return NextResponse.next(); // Continue processing the request
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};
