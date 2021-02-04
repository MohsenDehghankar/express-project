import mongoose from "mongoose";

const clickRateSchema = new mongoose.Schema({
  time: Date,
  ip: String,
});

const clickRateModel = mongoose.model("ClickRateModel", clickRateSchema);

export default clickRateModel;
