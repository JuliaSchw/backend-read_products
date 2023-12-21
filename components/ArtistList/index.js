import useSWR from "swr";
import { StyledHeading, StyledList } from "./ProductList.styled";
import { StyledLink } from "../Link/Link.styled";

export default function ArtistList() {
  const { data, isLoading } = useSWR("/api/artists");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledHeading>Available Artists</StyledHeading>
      <StyledList>
        {data.map((artist) => (
          <li key={artist._id}>
            <StyledLink href={`/${artist._id}`}>{artist.name}</StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  );
}
