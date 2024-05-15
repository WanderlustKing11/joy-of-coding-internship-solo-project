'use client';

import {
  Button,
  Dialog,
  Flex,
  IconButton,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { describe } from 'node:test';

interface TaskForm {
  title: string;
  dueDate: string;
  dueTime: string;
  description: string;
}

const TaskEditor = () => {
  // const [title, setTitle] = useState('');
  // const [dueDate, setDueDate] = useState('');
  // const [dueTime, setDueTime] = useState('');
  // const [description, setDescription] = useState('');

  // const handleSave = async () => {
  //   // Combine dueDate and dueTime into a single ISO string
  //   const dueDateTime = new Date(`${dueDate}T${dueTime}:00`).toISOString();

  //   const task = { title, dueDateTime, description };

  //   const response = await fetch('../api/tasks', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(task),
  //   });

  //   if (!response.ok) {
  //     console.error('Failed to create task');
  //   }
  // };
  const router = useRouter();

  const { register, control, handleSubmit } = useForm<TaskForm>();
  const onSubmit = async (data: TaskForm) => {
    // Combine dueDate and dueTime into a single ISO string
    const dueDateTime = new Date(
      `${data.dueDate}T${data.dueTime}:00`
    ).toISOString();

    // task object with the combined date and time
    const task = {
      title: data.title,
      dueDateTime: dueDateTime,
      description: data.description,
    };

    try {
      const response = await axios.post('/api/tasks', task);
      router.push('/listslibrary/list');
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Dialog.Content maxWidth='450px'>
        <Flex direction='column' gap='3'>
          <label>
            <Text as='div' size='2' mb='1' weight='bold'>
              Title
            </Text>
            <TextField.Root
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
              {...register('title')}
              placeholder='Task Name'
            />
            {/* <Controller
              name='title'
              control={control}
              render={({ field }) => (
                <TextField.Root
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                  // {...register('title')}
                  placeholder='Task Name'
                  {...field}
                />
              )}
            /> */}
          </label>
          <label>
            <Text as='div' size='2' mb='1' weight='bold'>
              Due Time / Date
            </Text>
            <div className='flex flex-row'>
              <div className='flex flex-row space-x-2'>
                <TextField.Root
                  type='time'
                  // value={dueTime}
                  // onChange={(e) => setDueTime(e.target.value)}
                  {...register('dueTime')}
                />
              </div>

              <div className='flex flex-row space-x-2 ml-10'>
                <TextField.Root
                  type='date'
                  // value={dueDate}
                  // onChange={(e) => setDueDate(e.target.value)}
                  {...register('dueDate')}
                />
              </div>
            </div>
          </label>
          <label>
            <Text as='div' size='2' mb='1' weight='bold'>
              Description
            </Text>
            <TextArea
              size='2'
              className='h-[20rem]'
              // value={description}
              // onChange={(e) => setDescription(e.target.value)}
              {...register('description')}
              placeholder='Task description...'
            />
          </label>
        </Flex>

        <Flex gap='3' mt='4' justify='end'>
          <Dialog.Close>
            {/* <Button variant='soft' color='gray' onClick={handleSave}> */}
            <Button variant='soft' color='gray'>
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleSubmit(onSubmit)}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </form>
  );
};

export default TaskEditor;
