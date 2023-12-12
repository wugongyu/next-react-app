import CatCard from '@/components/cards/cat/CatCard';
import { mockCatCardProps } from '@/components/cards/cat/CatCard.mocks';

const Home: React.FC<{}> = () => {
  return (
    <main className="flex flex-col items-center justify-between p-6 overflow-auto">
      <div className="flex flex-wrap justify-center">
        {[1,2,3,4].map(item => (
          <CatCard key={item} {...mockCatCardProps.base} />
        ))}
      </div>
    </main>
  );
}
export default Home;
