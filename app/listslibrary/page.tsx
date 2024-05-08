import { IconButton } from '@radix-ui/themes';
import Link from 'next/link';
import { TrashIcon } from '@radix-ui/react-icons';

const ListsLibraryPage = () => {
  const listStyle = 'grid grid-cols-6 gap-4 py-2 hover:bg-slate-400';

  return (
    <div className='w-full h-full'>
      {/* TITLE */}
      <h2 className='text-3xl flex flex-wrap mb-14'>Lists Library</h2>

      {/* lISTS */}
      {/* ***** Create an option to delete lists ***** */}
      <div>
        <ul className=''>
          <Link href='/listslibrary/list'>
            <li className={listStyle}>
              <div className='col-span-2'>List #1</div>
              <div className='col-start-3 col-span-2'>create: 5/10/24</div>
              <IconButton className='col-start-5' color='gray' variant='soft'>
                <TrashIcon width='18' height='18' />
              </IconButton>
            </li>
          </Link>

          <Link href='/listslibrary/list'>
            <li className={listStyle}>
              <div className='col-span-2'>List #2</div>
              <div className='col-start-3 col-span-2'>create: 5/15/24</div>
              <IconButton className='col-start-5' color='gray' variant='soft'>
                <TrashIcon width='18' height='18' />
              </IconButton>
            </li>
          </Link>

          <Link href='/listslibrary/list'>
            <li className={listStyle}>
              <div className='col-span-2'>List #3</div>
              <div className='col-start-3 col-span-2'>create: 5/29/24</div>
              <IconButton className='col-start-5' color='gray' variant='soft'>
                <TrashIcon width='18' height='18' />
              </IconButton>
            </li>
          </Link>

          <Link href='/listslibrary/list'>
            <li className={listStyle}>
              <div className='col-span-2'>List #4</div>
              <div className='col-start-3 col-span-2'>create: 6/01/24</div>
              <IconButton className='col-start-5' color='gray' variant='soft'>
                <TrashIcon width='18' height='18' />
              </IconButton>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ListsLibraryPage;
