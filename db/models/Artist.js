import mongoose from "mongoose";

const { Schema } = mongoose;

const artistSchema = new Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  location: { type: String, required: true },
  pronoun: { type: String, required: true },
});

const Artist = mongoose.models.Artist || mongoose.model("Artist", artistSchema);

export default Artist;
