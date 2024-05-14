'use client';

import { AlertDialog, Button } from '@radix-ui/themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import LogOutAlert from './components/LogOutAlert';

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'myLists', href: '/listslibrary' },
    { label: 'Profile', href: '/profile' },
  ];

  // const entryLinks = [
  //   { label: 'Log In', href: '/listslibrary' },
  //   { label: 'Create Account', href: '/newuser' },
  // ];

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center justify-between'>
      <Link href='/'>GET/Done</Link>
      <ul>
        {currentPath === '/' ? (
          // ? entryLinks.map((link) => (
          //     <Link key={link.href} href={link.href}>
          //       {link.label}
          //     </Link>
          //   ))
          <Link href='/listslibrary'>
            <Button>Log In</Button>
          </Link>
        ) : (
          <div className='flex space-x-8 items-center'>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-indigo-400 hover:text-indigo-300'
              >
                {link.label}
              </Link>
            ))}
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Button>Log Out</Button>
              </AlertDialog.Trigger>
              <LogOutAlert />
            </AlertDialog.Root>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
