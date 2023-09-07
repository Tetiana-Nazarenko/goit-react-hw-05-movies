export const CastDetails = ({ castInfo }) => {
  return (
    <ul>
      {castInfo.map(cast => (
        <li key={cast.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            alt="The actor`s photo is not in the database"
            width="100"
          />
          <h2>Name:{cast.name}</h2>
          <p>Charaсter: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
};
