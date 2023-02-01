import mongoose from "mongoose";
const Schema = mongoose.Schema;

const VisitorSchema = new Schema({
  ip: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  count: { type: Number, required: true },
  time:{type: String, required:true}
});

export default mongoose.models.VisitorModel ||
  mongoose.model("VisitorModel", VisitorSchema);
