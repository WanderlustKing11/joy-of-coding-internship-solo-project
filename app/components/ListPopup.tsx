import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import React from 'react';

const ListPopup = () => {
  return (
    <Dialog.Content maxWidth='450px'>
      {/* <Dialog.Title size='3'>Edit profile</Dialog.Title>
      <Dialog.Description size='2' mb='4'>
        Make changes to your profile.
      </Dialog.Description> */}

      <Flex direction='column' gap='3'>
        {/* <label>
          <Text as='div' size='2' mb='4' weight='bold'>
            Name
          </Text>
          <TextField.Root
            defaultValue='Freja Johnsen'
            placeholder='Enter your full name'
          />
        </label> */}
        <label>
          {/* <Text as='div' size='2' mb='1' weight='bold'>
            Email
          </Text> */}
          <TextField.Root placeholder='List Title' />
        </label>
      </Flex>

      <Flex gap='3' mt='4' justify='center'>
        <Dialog.Close>
          <Button>Create</Button>
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
