'use client';

import {
  Button,
  Callout,
  Dialog,
  Flex,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { fetchTaskSchema, formTaskSchema } from '../validationSchemas';
import { z } from 'zod';
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner';

interface TaskProps {
  onClose: () => void;
  isOpen: boolean;
  onTaskCreated: (newTask: FetchTaskType) => void;
}

/////////// Zod inferiing types based on our Schema ////////////
type TaskFormType = z.infer<typeof formTaskSchema>;
type FetchTaskType = z.infer<typeof fetchTaskSchema>;

const TaskCreator: React.FC<TaskProps> = ({
  onClose,
  isOpen,
  onTaskCreated,
}) => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormType>({
    resolver: zodResolver(formTaskSchema),
  });

  const onSubmit = async (data: TaskFormType) => {
    console.log('Inside the onSubmit function');
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

    try {
      setSubmitting(true);
      const response = await axios.post('/api/tasks', task);
      console.log('Task created:', response.data);
      reset();
      onClose();
      onTaskCreated(response.data);
      // router.push('/listslibrary/list');
    } catch (error) {
      console.log('Failed to create task:', error);
      setError('An unexpected error occurred.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <form> */}
      <Dialog.Content maxWidth='450px'>
        <Flex direction='column' gap='3'>
          {error && (
            <Callout.Root color='red'>
              <Callout.Text>{error}</Callout.Text>
            </Callout.Root>
          )}
          <label>
            <Text as='div' size='2' mb='1' weight='bold'>
              Title
            </Text>
            <TextField.Root {...register('title')} placeholder='Task Name' />
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
          </label>
          <label>
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
          </label>
          <label>
            <Text as='div' size='2' mb='1' weight='bold'>
              Description
            </Text>
            <TextArea
              size='2'
              className='h-[20rem]'
              {...register('description')}
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
          {/* <Dialog.Close> */}
          <Button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
            Save
            {isSubmitting && <Spinner />}
          </Button>
          {/* </Dialog.Close> */}
        </Flex>
      </Dialog.Content>
    </form>
  );
};

export default TaskCreator;
