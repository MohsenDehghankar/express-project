import express from "express";
const router = express.Router();
import ClickRateModel from "../models/ClickEvent";

/* GET home page. */
router.get(
  "/",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    let ips: string[] = [];
    let times: string[] = [];
    await ClickRateModel.find((err, results) => {
      if (err) {
        console.log("error: ", err);
        throw err;
      }
      ips = results.map((v) => v.ip);
      times = results.map((v) => v.time.toString());
    });
    res.render("statistics", { title: "Statistics!", ips, times });
  }
);

export default router;
