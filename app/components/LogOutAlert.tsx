'use client';

import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';

const LogOutAlert = () => {
  return (
    <AlertDialog.Content maxWidth='450px'>
      <AlertDialog.Title>Log Out</AlertDialog.Title>
      <AlertDialog.Description size='2'>
        Are you sure you want to log out?
      </AlertDialog.Description>

      <Flex gap='3' mt='4' justify='end'>
        <AlertDialog.Cancel>
          <Button variant='soft' color='gray'>
            Cancel
          </Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action>
          <Link href='/'>
            <Button variant='solid' color='red'>
              Log me out
            </Button>
          </Link>
        </AlertDialog.Action>
      </Flex>
    </AlertDialog.Content>
  );
};

export default LogOutAlert;
