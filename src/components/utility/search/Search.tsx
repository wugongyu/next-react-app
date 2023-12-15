// useRouter only be used inside client component
'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Search.module.css';

export interface SearchProps {
  searchText?: string;
}

const Search: React.FC<SearchProps> = (props) => {
  const { searchText } = props;
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');
  useEffect(() => {
    if(searchText) {
      setSearchTerm(searchText)
    }
  }, [searchText])
  return (
    <div>
      <form 
        action="" 
        className="flex flex-col items-center gap-y-5"
        onSubmit={e=> {
          e.preventDefault();
          // alert('actionRequested, search for term:' + searchTerm);
          router.push(`/results?search=${searchTerm}`);
        }}
      >
        <input 
          type="text" 
          className="rounded-full border-2 w-5/6 sm:w-128 h-12 px-3" 
          value={searchTerm}
          onChange={e => setSearchTerm(e?.target?.value)}
        />
        <div className='space-x-3'>
          <button type='submit' className='btn-primary'>
            Google Search
          </button>
          <button
            className='btn-primary'
            onClick={() => alert('FEATURE COMING SOON!')}
          >
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>  
    </div>
  );
}

export default Search;