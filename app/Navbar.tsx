'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'MyLiists', href: '/mylists' },
    { label: 'Profile', href: '/profile' },
  ];

  const entryLinks = [
    { label: 'Log In', href: '/login' },
    { label: 'Create Account', href: '/newuser' },
  ];

  const exitLinks = { label: 'Log Out', href: '/logout' };

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center justify-between'>
      <Link href='/'>Logo</Link>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='text-sky-500 hover:text-sky-200'
          >
            {link.label}
          </Link>
        ))}
        {currentPath === '/' ? (
          entryLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))
        ) : (
          <Link href={exitLinks.href}>{exitLinks.label}</Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
