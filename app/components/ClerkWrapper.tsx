'use client';

import { ClerkProvider } from '@clerk/nextjs';
import Header from './Header';

export default function ClerkWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Header />
      <main>
        {children}
      </main>
    </ClerkProvider>
  );
} 