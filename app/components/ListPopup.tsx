import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

const ListPopup = () => {
  return (
    <Dialog.Content maxWidth='450px'>
      <Flex direction='column' gap='3'>
        <label>
          <TextField.Root placeholder='List Title' />
        </label>
      </Flex>

      <Flex gap='3' mt='4' justify='center'>
        <Dialog.Close>
          <Link href='/listslibrary/list'>
            <Button>Create</Button>
          </Link>
        </Dialog.Close>
        <Dialog.Close>
          <Button variant='soft' color='gray'>
            Cancel
          </Button>
        </Dialog.Close>
      </Flex>
    </Dialog.Content>
  );
};

export default ListPopup;
