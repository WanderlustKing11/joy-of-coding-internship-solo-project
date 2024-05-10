'use client';

import { motion } from 'framer-motion';
import {
  CheckIcon,
  DotsVerticalIcon,
  SquareIcon,
  TrashIcon,
} from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';
import React, { useState } from 'react';

interface TaskButtonsProps {
  onCheckClick: () => void;
  isCompleted: boolean;
}

const variants = {
  open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
  closed: { opacity: 0, x: '-10%', transition: { duration: 0.5 } },
};

const TaskManButtons: React.FC<TaskButtonsProps> = ({
  onCheckClick,
  isCompleted,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full flex flex-row'>
      <IconButton
        onClick={toggleOpen}
        className='ml-10 z-20'
        color='gray'
        variant='surface'
      >
        <DotsVerticalIcon width='18' height='18' />
      </IconButton>

      <motion.div
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className='z-0'
      >
        <div className='z-0'>
          <IconButton radius='none' color='crimson' onClick={onCheckClick}>
            {isCompleted ? (
              <CheckIcon width='18' height='18' />
            ) : (
              <SquareIcon width='18' height='18' />
            )}
          </IconButton>
          <IconButton radius='none' color='indigo'>
            <TrashIcon width='18' height='18' />
          </IconButton>
        </div>
      </motion.div>
    </div>
  );
};

export default TaskManButtons;
