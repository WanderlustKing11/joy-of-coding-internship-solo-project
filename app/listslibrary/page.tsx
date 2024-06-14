'use client';

import { Button, Dialog, IconButton, Select } from '@radix-ui/themes';
import Link from 'next/link';
import { TrashIcon } from '@radix-ui/react-icons';
import SelectSort from '../components/SelectSort';
import ListPopup from '../components/ListPopup';
import { fetchTaskSchema } from '../validationSchemas';
import { z } from 'zod';
import { useState } from 'react';

type ListData = z.infer<typeof fetchTaskSchema>;

const ListsLibraryPage = () => {
  const [sortOrder, setSortOrder] = useState('oldest');
  const [lists, setLists] = useState<ListData[]>([]);

  const listStyle =
    'grid grid-cols-6 gap-4 py-2 pl-4 rounded hover:bg-blue-950 hover:text-indigo-300';

  const sortHandlers: { [key: string]: (lists: ListData[]) => ListData[] } = {
    newest: (lists) => lists.slice().sort((a, b) => b.id - a.id),
    oldest: (lists) => lists.slice().sort((a, b) => a.id - b.id),
    alphabetical: (lists) =>
      lists.slice().sort((a, b) => a.title.localeCompare(b.title)),
    'due date': (lists) =>
      lists
        .slice()
        .sort(
          (a, b) =>
            new Date(a.dueDateTime).getTime() -
            new Date(b.dueDateTime).getTime()
        ),
  };

  const handleSortChange = (value: string) => setSortOrder(value);

  const sortedLists = sortHandlers[sortOrder](lists);

  return (
    <div className='w-full h-full'>
      <div className='flex flex-row'>
        {/* TITLE */}
        <h2 className='text-3xl flex flex-wrap mb-14'>Lists Library</h2>
        <SelectSort
          className='w-full flex justify-start'
          onSortChange={handleSortChange}
          sortOptions={Object.keys(sortHandlers)}
        />
      </div>

      {/* lISTS */}
      {/* ***** Create an option to delete lists ***** */}
      <div>
        <ul className=''>
          <Link href='/listslibrary/list'>
            <li className={listStyle}>
              <div className='col-span-2'>List #1</div>
              <div className='col-start-3 col-span-2'>created: 5/10/24</div>
              <IconButton className='col-start-5' color='gray' variant='soft'>
                <TrashIcon width='18' height='18' color='gray' />
              </IconButton>
            </li>
          </Link>

          <Link href='/listslibrary/list'>
            <li className={listStyle}>
              <div className='col-span-2'>List #2</div>
              <div className='col-start-3 col-span-2'>created: 5/15/24</div>
              <IconButton className='col-start-5' color='gray' variant='soft'>
                <TrashIcon width='18' height='18' color='gray' />
              </IconButton>
            </li>
          </Link>

          <Link href='/listslibrary/list'>
            <li className={listStyle}>
              <div className='col-span-2'>List #3</div>
              <div className='col-start-3 col-span-2'>created: 5/29/24</div>
              <IconButton className='col-start-5' color='gray' variant='soft'>
                <TrashIcon width='18' height='18' color='gray' />
              </IconButton>
            </li>
          </Link>

          <Link href='/listslibrary/list'>
            <li className={listStyle}>
              <div className='col-span-2'>List #4</div>
              <div className='col-start-3 col-span-2'>created: 6/01/24</div>
              <IconButton className='col-start-5' color='gray' variant='soft'>
                <TrashIcon width='18' height='18' color='gray' />
              </IconButton>
            </li>
          </Link>
        </ul>
      </div>
      <div className='mt-14'>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button>Create New List</Button>
          </Dialog.Trigger>
          <ListPopup />
        </Dialog.Root>
      </div>
    </div>
  );
};

export default ListsLibraryPage;
