import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const links = [
    { label: 'MyLiists', href: '/mylists' },
    { label: 'Profile', href: '/profile' },
  ];

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
      </ul>
    </nav>
  );
};

export default Navbar;
