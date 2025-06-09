'use client';

import { SignedIn, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import AgentPulse from './AgentPulse';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (

    <header className="sticky top-0 z-50 left-0 right-0 px-4 md:px-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className='container mx-auto'>
        {/*Left */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-4">
          <AgentPulse/>

          <h1 className='text-xl font-semibold bg-gradient-to-r from blue-600 to-blue-400 bg-clip-text text-transparent'>AgentTube</h1>
          </Link>
        </div>

        {/*Right */}
        <div>
          <SignedIn>
            <Link href="/manage-plan">
            <Button>Manage Plan</Button>
            </Link>
          </SignedIn>

        </div>
      </div>
      <UserButton afterSignOutUrl="/" />
    </header>
  );
} 