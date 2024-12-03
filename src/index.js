import express from "express";
import connectDB from "./config/dbConfig.js";
//import postRouter  from "./routers/post.js";
import apiRouter from "./routers/apiRouter.js";
import multer from "multer";
import { isAuthenticated } from "./middlewares/authMiddleware.js";
import ip from "ip"
import rateLimiter from "express-rate-limit"

const PORT = process.env.PORT || 8000;
const app = express();


const limiter = rateLimiter({
  windowMs: 1 * 60 * 1000, // only for one minute
  max: 5, // limit each Ip to 5 requests per windoes
  message: "Too many requested from this Ip, plese try again after 01 minute",

})

app.use(limiter);

const upload = multer();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());
// app.use(upload.array('image'));

app.use("/api", apiRouter); // if the url start with /api then the request is forworded to the apiRouter
//           isAuthenticated,
app.get("/ping",        (req, res) => {
  console.log(req.query);
  console.log(req.user);
  // const name = req.params.name; // (here yout get )
  console.log(req.query);
  console.log(req.body);
  const ipaddr = ip.address();
  return res.send({ message: "pong" + ipaddr });
});

app.listen(PORT, () => {
  console.log(`Server is running port nnumber: ${PORT}`);
  connectDB();
});
