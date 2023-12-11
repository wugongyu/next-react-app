import CatCard from '@/components/cards/cat/CatCard';
import { mockCatCardProps } from '@/components/cards/cat/CatCard.mocks';

const Home: React.FC<{}> = () => {
  return (
    <main className="flex flex-col items-center justify-between p-6 overflow-auto">
      <div className="flex flex-wrap justify-center">
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
      </div>
    </main>
  );
}
export default Home;
