import { useContext } from 'react';
import DataContext from '../context/useDataContext';
import Feed from '../components/Feed';

function Home() {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);

  return (
    <main className="Home">
      {isLoading && <h2>Loading Posts ...</h2>}
      {!isLoading && fetchError && <h2>{fetchError}</h2>}
      {!isLoading && !fetchError && searchResults.length ? (
        <Feed posts={searchResults} />
      ) : (
        <h2>No Posts To Display</h2>
      )}
    </main>
  );
}

export default Home;
