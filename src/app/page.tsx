'use client'

import Search from '@/components/utility/search/Search';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Home: React.FC<{}> = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image 
        src="/google.png"
        width={272}
        height={92}
        alt="google-logo"
      />
      <Search />
      <p>
        Google offered in:{' '}
        <Link href="/" className="underline text-blue-600">
          Français
        </Link>
      </p>
    </section>
  );
}
export default Home;
