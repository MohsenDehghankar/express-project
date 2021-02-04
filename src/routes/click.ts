import express from "express";
import { report } from "process";
import ClickRateModel from "./../models/ClickEvent";

const router = express.Router();

/* GET home page. */
router.get(
  "/",
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const ip = req.ip;
    const date = new Date();
    const rate = new ClickRateModel({
        ip,
        time: date
    })
    await rate.save();
    console.log(date, " ", ip);
    res.render("index", { title: "Ad Clicked!" });
  }
);

export default router;
