import { requests } from 'src/api/requests';

export async function getMovies() {
  const API_KEY = process.env.API_KEY;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals, options).then((res) => res.json()),
    fetch(requests.fetchTrending, options).then((res) => res.json()),
    fetch(requests.fetchTopRated, options).then((res) => res.json()),
    fetch(requests.fetchActionMovies, options).then((res) => res.json()),
    fetch(requests.fetchComedyMovies, options).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies, options).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies, options).then((res) => res.json()),
    fetch(requests.fetchDocumentaries, options).then((res) => res.json()),
  ]);

  return {
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  };
}
