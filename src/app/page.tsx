import { getMovies } from 'src/api';
import Header from 'src/components/Header';

export default async function Home() {
  const {
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  } = await getMovies();

  return (
    <main>
      <Header />
    </main>
  );
}
