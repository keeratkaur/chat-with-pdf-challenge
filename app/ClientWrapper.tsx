"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";

export default function ClientWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <ClerkProvider>
        <SchematicProvider>
            {children}
        </SchematicProvider>
        </ClerkProvider>;
}