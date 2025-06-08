'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import AgentPulse from './AgentPulse';

export default function Header() {
  return (

    <header className="sticky top-0 z-50 left-0 right-0">
      <div>
        {/*Left */}
        <div>
          <Link href="/">
          <AgentPulse/>

          <h1>AgentTube</h1>
          </Link>
        </div>

        {/*Right */}
        <div>

        </div>
      </div>
      <UserButton afterSignOutUrl="/" />
    </header>
  );
} 