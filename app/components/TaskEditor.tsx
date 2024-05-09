import {
  Button,
  Dialog,
  Flex,
  IconButton,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import React from 'react';

const TaskEditor = () => {
  return (
    <div>
      <Dialog.Content maxWidth='450px'>
        {/* <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description size='2' mb='4'>
          Make changes to your profile.
        </Dialog.Description> */}

        <Flex direction='column' gap='3'>
          <label>
            <Text as='div' size='2' mb='1' weight='bold'>
              Title
            </Text>
            <TextField.Root defaultValue='Task # 1' placeholder='Task Name' />
          </label>
          <label>
            <Text as='div' size='2' mb='1' weight='bold'>
              Due Time / Date
            </Text>
            <div className='flex flex-row'>
              {/* TIME */}
              <div className='flex flex-row space-x-2'>
                <TextField.Root type='time' defaultValue='4' />
                {/* <div>:</div>
                <TextField.Root type='time' className='w-7' defaultValue='2' />
                <TextField.Root type='time' className='w-7' defaultValue='0' /> */}
                <IconButton size='2' radius='small' color='gray'>
                  AM
                </IconButton>
              </div>

              {/* DATE */}
              <div className='flex flex-row space-x-2 ml-10'>
                <TextField.Root type='date' defaultValue='01' />
                {/* <div>/</div>
                <TextField.Root type='date' className='w-7' defaultValue='15' />
                <div>/</div>
                <TextField.Root type='date' className='w-7' defaultValue='24' /> */}
              </div>
            </div>
            {/* <div className='flex flex-row'>
              <Text size='1' className='m-2'>
                H
              </Text>
              <Text size='1' className='ml-8 my-2'>
                M
              </Text>
              <Text size='1' className='ml-[1.5rem] my-2'>
                M
              </Text>
              <Text size='1' className='ml-[5.7rem] my-2'>
                MM
              </Text>
              <Text size='1' className='ml-[2rem] my-2'>
                DD
              </Text>
              <Text size='1' className='ml-[2rem] my-2'>
                YY
              </Text>
            </div> */}
          </label>
          <label>
            <Text as='div' size='2' mb='1' weight='bold'>
              Description
            </Text>
            <TextArea
              size='2'
              className='h-[20rem]'
              defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              placeholder='Task description...'
            />
          </label>
        </Flex>

        <Flex gap='3' mt='4' justify='end'>
          <Dialog.Close>
            <Button variant='soft' color='gray'>
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </div>
  );
};

export default TaskEditor;
