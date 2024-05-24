'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { formTaskSchema } from '@/app/validationSchemas';
import {
  Button,
  Callout,
  Flex,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import ErrorMessage from '@/app/components/ErrorMessage';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type TaskFormType = z.infer<typeof formTaskSchema>;
// interface Props {
//   title: string;
//   dueTime: string;
//   dueDate: string;
//   description: string;
// }

const NewTaskPage = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormType>({
    resolver: zodResolver(formTaskSchema),
  });

  const onSubmit = async (data: TaskFormType) => {
    console.log('Inside the onSubmit hanlder.');
    // Combine dueDate and dueTime into a single ISO string
    const dueDateTime = new Date(
      `${data.dueDate}T${data.dueTime}`
    ).toISOString();

    // task object with the combined date and time
    const task = {
      title: data.title,
      dueDateTime,
      description: data.description,
    };

    // const apiData = transformToAPISchema(data);

    try {
      const response = await axios.post('/api/tasks', task);
      console.log('Task created:', response.data);
      router.push('/listslibrary/list');
    } catch (error) {
      console.log('Failed to create task:', error);
      setError('An unexpected error occurred.');
    }
  };

  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(onSubmit)}>
      <Flex direction='column' gap='3'>
        {error && (
          <Callout.Root color='red'>
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )}
        <Text as='div' size='2' mb='1' weight='bold'>
          Title
        </Text>
        <TextField.Root {...register('title')} placeholder='Task Name' />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Text as='div' size='2' mb='1' weight='bold'>
          Due Time / Date
        </Text>
        <div className='flex flex-row'>
          <div className='flex flex-row space-x-2'>
            <TextField.Root type='time' {...register('dueTime')} />
          </div>

          <div className='flex flex-row space-x-2 ml-10'>
            <TextField.Root type='date' {...register('dueDate')} />
          </div>
        </div>
        <Text as='div' size='2' mb='1' weight='bold'>
          Description
        </Text>
        <TextArea
          size='2'
          className='h-[20rem]'
          {...register('description')}
          placeholder='Task description...'
        />
        <Button type='submit'>Submit New Task</Button>
      </Flex>
    </form>
  );
};

export default NewTaskPage;
