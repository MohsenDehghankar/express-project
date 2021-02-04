import { Mode } from "fs";
import { Schema, model, Document, Model } from "mongoose";

interface IClickRate extends Document {
  time: Date;
  ip: string;
}

const clickRateSchema = new Schema({
  time: Date,
  ip: String,
});

const clickRateModel: Model<IClickRate> = model("ClickRateModel", clickRateSchema);

export default clickRateModel;
