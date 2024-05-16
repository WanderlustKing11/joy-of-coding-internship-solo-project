'use client';

import {
  Button,
  Callout,
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
import { zodResolver } from '@hookform/resolvers/zod';
import { formTaskSchema } from '../validationSchemas';
import { z } from 'zod';
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner';

interface TaskProps {
  onClose: () => void;
  isOpen: boolean;
}

/////////// Zod inferiing types based on our Schema ////////////
type TaskForm = z.infer<typeof formTaskSchema>;

const TaskEditor: React.FC<TaskProps> = ({ onClose, isOpen }) => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskForm>({
    resolver: zodResolver(formTaskSchema),
  });

  const onSubmit = async (data: TaskForm) => {
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
      // router.push('/listslibrary/list');
      reset();
      onClose();
    } catch (error) {
      setSubmitting(false);
      console.log('Failed to create task:', error);
      setError('An unexpected error occurred.');
    }
  };

  if (!isOpen) return null;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <Dialog.Close>
              <Button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                Save
                {isSubmitting && <Spinner />}
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </form>
    </div>
  );
};

export default TaskEditor;
