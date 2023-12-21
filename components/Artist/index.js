import useSWR from "swr";
import { useRouter } from "next/router";
import { ArtistCard } from "./Artist.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/artists/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ArtistCard>
      <h2>{data.name}</h2>
      <p>Genre: {data.genre}</p>
      <p>Location: {data.location}</p>
      <p>Pronoun: {data.pronoun}</p>
      <StyledLink href="/">Back to all</StyledLink>
    </ArtistCard>
  );
}
