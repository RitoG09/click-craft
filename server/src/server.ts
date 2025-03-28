import express, { Application, Request, Response } from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
//Queues:
import "./jobs/index.js";
import { emailQueue, emailQueueName } from "./jobs/EmailJob.js";
import Routes from "./routes/index.js";
import { renderEmailEjs } from "./helper.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app: any = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

//Routes
app.use(Routes);

app.get("/", async (req: Request, res: Response) => {
  const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
    name: "Cicada",
  });
  // await sendEmail("salisa2593@cybtric.com", "Test SMTP", html);
  await emailQueue.add(emailQueueName, {
    to: "wesof46399@boyaga.com",
    subject: "Sample queue email",
    body: html,
  });
  return res.json({
    message: "email sent successfully..",
  });
});

app.listen(PORT, () => {
  console.log(`Backend is listening on PORT ${PORT}`);
});
