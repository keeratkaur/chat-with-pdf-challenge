'use client';

import { UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header className="fixed top-4 right-4">
      <UserButton afterSignOutUrl="/" />
    </header>
  );
} 