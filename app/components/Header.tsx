'use client';

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import AgentPulse from './AgentPulse';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 left-0 right-0 px-4 md:px-0 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className='container mx-auto'>
        <div className='flex items-center justify-between h-16'>
          {/*Left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-4">
              <AgentPulse/>
              <h1 className='text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent'>AgentTube</h1>
            </Link>
          </div>

          {/*Right */}
          <div className="flex items-center gap-4">
            <SignedIn>
              <Link href="/manage-plan">
                <Button variant={"outline"}
                className='mr-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent'>Manage Plan</Button>
              </Link>

              <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full border bg-blue-100 border-blue-200">
                <UserButton />
              </div>
            </SignedIn>

            <SignedOut>
              <SignInButton mode='modal'>
                <Button variant={'ghost'} className='bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text'> Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
} 