'use client';

import { AlertDialog, Button } from '@radix-ui/themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import LogOutAlert from './components/LogOutAlert';

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'myLists', href: '/listslibrary' },
    { label: 'Profile', href: '/profile' },
  ];

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center justify-between'>
      <Link href='/'>
        <div className='h-full flex flex-row font-bold'>
          <div>GET</div>
          <span className='text-2xl'>/</span>
          <div className='pt-3'>Done</div>
        </div>
      </Link>
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
                className={classNames({
                  'font-bold': link.href === currentPath,
                  'text-indigo-400': link.href !== currentPath,
                  'hover:text-indigo-700 transition-colors': true,
                })}
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
