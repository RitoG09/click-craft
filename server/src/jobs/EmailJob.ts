import { Job, Queue, Worker } from "bullmq";
import { defaultQueueOptions, redisConnection } from "../config/queue.js";
import { sendEmail } from "../config/mail.js";

export const emailQueueName = "emailQueue";

interface EmailJobsDataType {
  to: string;
  subject: string;
  body: string;
}

export const emailQueue = new Queue(emailQueueName, {
  connection: redisConnection,
  defaultJobOptions: defaultQueueOptions,
});

//Worker
export const worker = new Worker(
  emailQueueName,
  async (job: Job) => {
    const data: EmailJobsDataType = job.data;
    await sendEmail(data.to, data.subject, data.body);
  },
  {
    connection: redisConnection,
  }
);

// worker.on("failed", (job: Job | undefined, error: Error, prev: string) => {
//   console.log("error: ", e
// rror);
// });
