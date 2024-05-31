import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import Link from 'next/link';
import React, { useState } from 'react';

interface ListPopupProps {
  onUpdateListTitle: (newTitle: string) => void;
}

const ListPopup: React.FC<ListPopupProps> = ({ onUpdateListTitle }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onUpdateListTitle(inputValue);
  };

  return (
    <Dialog.Content maxWidth='450px'>
      <Flex direction='column' gap='3'>
        <label>
          <TextField.Root value={inputValue} onChange={handleChange} />
        </label>
      </Flex>

      <Flex gap='3' mt='4' justify='center'>
        <Dialog.Close>
          <Link href='/listslibrary/list'>
            <Button onClick={handleSubmit}>Save</Button>
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
