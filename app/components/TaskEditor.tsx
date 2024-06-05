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
import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { editTaskSchema, formTaskSchema } from '../validationSchemas';
import { z } from 'zod';
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner';
import { useRouter } from 'next/navigation';

interface EditTaskDialogProps {
  onClose: () => void;
  isOpen: boolean;
  taskData: z.infer<typeof editTaskSchema> | null;
  onUpdateTask: (updatedTask: z.infer<typeof editTaskSchema>) => void;
}

type TaskFormType = z.infer<typeof formTaskSchema>;

const TaskEditor: React.FC<EditTaskDialogProps> = ({
  onClose,
  isOpen,
  taskData,
  onUpdateTask,
}) => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TaskFormType>({
    resolver: zodResolver(formTaskSchema),
  });

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  useEffect(() => {
    if (taskData) {
      const dueDateTime = new Date(taskData.dueDateTime);
      const dueDate = dueDateTime.toISOString().split('T')[0];
      const dueTime = dueDateTime.toTimeString().split(' ')[0];
      setValue('title', taskData.title);
      setValue('dueDate', dueDate);
      setValue('dueTime', dueTime);
      setValue('description', taskData.description);
    }
  }, [taskData, setValue]);

  const onSubmit = async (data: TaskFormType) => {
    const dueDateTime = new Date(
      `${data.dueDate}T${data.dueTime}`
    ).toISOString();

    const task = {
      title: data.title,
      dueDateTime,
      description: data.description,
    };

    try {
      setSubmitting(true);
      const response = await axios.patch(`/api/tasks/${taskData?.id}`, task);
      console.log('Task updated:', response.data);
      onUpdateTask(response.data);
      onClose();
      router.push('/listslibrary/list');
    } catch (error) {
      console.log('Failed to update task:', error);
      setError('An unexpected error occurred.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
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
            <Button onClick={handleCancel} variant='soft' color='gray'>
              Cancel
            </Button>
          </Dialog.Close>
          <Button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
            Save
            {isSubmitting && <Spinner />}
          </Button>
        </Flex>
      </Dialog.Content>
    </form>
  );
};

export default TaskEditor;
