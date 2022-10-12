async function fetchTrendingMovies(p = 1) {
  const searchParams = new URLSearchParams({
    api_key: '0214e4f6556edfc65f2eadfc23b43510',
    language: 'en-US',
    page: p ?? 1,
    include_adult: false,
  });

  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?${searchParams}`
  );
  const response = await data.json();
  const { results } = response;

  localStorage.setItem('movies', JSON.stringify(results));
  return response;
}

async function fetchMovieById(id) {
  const searchParams = new URLSearchParams({
    api_key: '0214e4f6556edfc65f2eadfc23b43510',
    language: 'en-US',
  });
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?${searchParams}`
  );
  const response = await data.json();
  return response;
}

async function fetchMoviesByName(movieName, p = 1) {
  const searchParams = new URLSearchParams({
    api_key: '0214e4f6556edfc65f2eadfc23b43510',
    language: 'en-US',
    page: p ?? 1,
    include_adult: false,
    query: movieName,
  });

  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?${searchParams}`
    );
    const response = await data.json();
    const { results } = response;
    localStorage.setItem('movies', JSON.stringify(results));

    return response;
  } catch (error) {
    console.log(error.statusText);
  }
}

async function fetchGenresList() {
  try {
    const data = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=0214e4f6556edfc65f2eadfc23b43510&language=en-US'
    );
    const genresList = await data.json();
    localStorage.setItem('genresList', JSON.stringify(genresList.genres));
  } catch (error) {
    console.log(error.message);
  }
}

if (!localStorage.getItem('genresList')) {
  fetchGenresList();
}

async function fetchTrailerById(id) {
  const searchParams = new URLSearchParams({
    api_key: '0214e4f6556edfc65f2eadfc23b43510',
    language: 'en-US',
  });
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?${searchParams}`
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export {
  fetchTrendingMovies,
  fetchMovieById,
  fetchMoviesByName,
  fetchGenresList,
  fetchTrailerById,
};
