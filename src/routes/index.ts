import express from "express";
const router = express.Router();

/* GET home page. */
router.get(
  "/",
  (
    req: any,
    res: { render: (arg0: string, arg1: { title: string }) => void },
    next: any
  ) => {
    res.render("index", { title: "Express Title" });
  }
);

export default router;
