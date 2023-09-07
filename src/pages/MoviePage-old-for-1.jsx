//*** рабочий вариант, но нужно переписать */
// const MoviesPage = () => {
//   const [query, setQuery] = useState('');
//   const [movieList, setMovieList] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (query === '') {
//       return;
//     }
//     async function handleQueryMovies() {
//       try {
//         setLoading(true);
//         const { results } = await getQueryMovies(query);
//         const movies = results.map(({ id, title }) => ({
//           id,
//           title,
//         }));
//         setMovieList(movies);
//       } catch (error) {
//         console.log(`An error occurred: ${error.message}`);
//       } finally {
//         setLoading(false);
//       }
//     }
//     handleQueryMovies();
//   }, [query]);

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     const query = evt.target.elements.query.value;
//     query.trim() === ''
//       ? console.log('УПС... Введите запрос!')
//       : changeQuery(query);
//     evt.target.reset();
//   };

//   const changeQuery = newQuery => {
//     if (newQuery !== query) {
//       setQuery(newQuery);
//       setMovieList([]);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="query" />
//         <button type="submit">Search</button>
//       </form>
//       {loading ? <Loader /> : <QueryMovies movies={movieList} />}
//     </div>
//   );
// };
