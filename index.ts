import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import packageJSON from "./package.json";
import path from "path";

dotenv.config(); // load data from .env file

const app = express();
const port = process.env.PORT || 3000;

/**
 * Express configuration
 * Change it to fit your needs
 */
app.use(cors()); // Block cross-origin requests to all routes
app.use(bodyParser.json()); // Allow application/json body
app.set("trust proxy", true); // Make express aware of proxies (needed, for example, to create IP based middlewares)
app.use(express.static(path.join(__dirname, "public"))); // Serve as static content what is inside `/public`
app.set("view engine", "ejs"); // Use `ejs` as template engine

/**
 * Example APP routes
 */

app.get("/", (request, response, next) => {
	return response.render("index");
}); // to render views/index.ejs

app.get("/welcome", (request, response, next) => {
	response.status(200).json({ message: "welcome" });
}); // to send a JSON response

/**
 * Start you Express app
 */

app.listen(port, () => {
	console.log(`⚡ ${packageJSON.name} is running on port ${port}.`);
});
