'use client';

import 'easymde/dist/easymde.min.css';
import {
  Button,
  Dialog,
  Flex,
  IconButton,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import { useState } from 'react';

const TaskEditor = () => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = async () => {
    // Combine dueDate and dueTime into a single ISO string
    const dueDateTime = new Date(`${dueDate}T${dueTime}:00`).toISOString();

    const task = { title, dueDateTime, description };

    const response = await fetch('../api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      console.error('Failed to create task');
    }
  };

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
            <TextField.Root
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Task Name'
            />
          </label>
          <label>
            <Text as='div' size='2' mb='1' weight='bold'>
              Due Time / Date
            </Text>
            <div className='flex flex-row'>
              {/* TIME */}
              <div className='flex flex-row space-x-2'>
                <TextField.Root
                  type='time'
                  value={dueTime}
                  onChange={(e) => setDueTime(e.target.value)}
                />
                {/* <div>:</div>
                <TextField.Root type='time' className='w-7' defaultValue='2' />
                <TextField.Root type='time' className='w-7' defaultValue='0' /> */}
                {/* <IconButton size='2' radius='small' color='gray'>
                  AM
                </IconButton> */}
              </div>

              {/* DATE */}
              <div className='flex flex-row space-x-2 ml-10'>
                <TextField.Root
                  type='date'
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Task description...'
            />
          </label>
        </Flex>

        <Flex gap='3' mt='4' justify='end'>
          <Dialog.Close>
            <Button variant='soft' color='gray' onClick={handleSave}>
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
