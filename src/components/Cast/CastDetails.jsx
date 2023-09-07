import {
  CastList,
  CastListItem,
  CastName,
  CastCharacter,
} from './CastDetails.styled';
export const CastDetails = ({ castInfo }) => {
  return (
    <CastList>
      {castInfo.map(cast => (
        <CastListItem key={cast.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            alt=""
            width="150"
          />
          <h2>
            Name: <br /> <CastName>{cast.name} </CastName>
          </h2>
          <p>
            Charaсter: <CastCharacter>{cast.character} </CastCharacter>
          </p>
        </CastListItem>
      ))}
    </CastList>
  );
};
