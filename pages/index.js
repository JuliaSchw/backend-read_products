import ArtistList from "../components/ArtistList";
import styled from "styled-components";
import ArtistForm from "@/components/ArtistForm";

const Heading = styled.h1`
  text-align: center;
  color: var(--color-granite);
`;

export default function HomePage() {
  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          👾 👾 👾
        </span>{" "}
        <br></br>
        Artist Database
      </Heading>
      <ArtistForm />
      <hr />
      <ArtistList />
    </>
  );
}
