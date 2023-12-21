import { StyledForm, StyledHeading, StyledLabel } from "./ArtistForm.styled";
import { StyledButton } from "@/components/Button/Button.styled";
import useSWR from "swr";

export default function ArtistForm() {
  const { mutate } = useSWR("/api/products");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const artistData = Object.fromEntries(formData);

    const response = await fetch("/api/artists", {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artistData),
    });
    if (response.ok) {
      mutate();
    }

    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add a new Artist</StyledHeading>
      <StyledLabel htmlFor="name">
        Artist Name:
        <input type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="genre">
        Genre:
        <input type="text" id="genre" name="genre" />
      </StyledLabel>
      <StyledLabel htmlFor="location">
        Located in:
        <input type="text" id="location" name="location" min="0" />
      </StyledLabel>
      <StyledLabel htmlFor="pronoun">
        Pronoun:
        <select id="pronoun" name="pronoun">
          <option value="She/Her">She/Her</option>
          <option value="He/Him">He/Him</option>
          <option value="Other">Other</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
