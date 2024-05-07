'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'myLists', href: '/listslibrary' },
    { label: 'Profile', href: '/profile' },
    { label: 'Log Out', href: '/' },
  ];

  const entryLinks = [
    { label: 'Log In', href: '/myLibrary' },
    { label: 'Create Account', href: '/newuser' },
  ];

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center justify-between'>
      <Link href='/'>Logo</Link>
      <ul className='flex space-x-6'>
        {currentPath === '/'
          ? entryLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))
          : links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-sky-500 hover:text-sky-200'
              >
                {link.label}
              </Link>
            ))}
      </ul>
    </nav>
  );
};

export default Navbar;
