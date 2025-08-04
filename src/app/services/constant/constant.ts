 
// constant.ts
export const Constant = {
  API_KEY: 'ff6d58b2f3dc7643056dc6ac023d3948',
   METHODS: {
    getPopularMovies: (page: number = 1) =>
      `https://api.themoviedb.org/3/movie/popular?api_key=ff6d58b2f3dc7643056dc6ac023d3948&language=en-US&page=${page}`,

    getMovieDetails(id: number): string {
      return `https://api.themoviedb.org/3/movie/${id}?api_key=${Constant.API_KEY}&language=en-US`;
    },
    searchMovies(query: string, page: number = 1): string {
      return `https://api.themoviedb.org/3/search/movie?api_key=${Constant.API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=${page}`;
    }
       
   }
}
