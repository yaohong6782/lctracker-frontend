import { z } from "zod";

export const UploadSchema = z.object({
  questionNumber: z
    .string()
    .min(1, { message: "Please enter the question number" }),
  title: z
    .string()
    .min(3, { message: "Minimum character of 3 characters for Title" }),
  url: z.string().url({message : "Please enter a valid URL containing http"}).min(1, { message: "Please enter a link" }),
  content: z.string().min(1, { message: "Please enter a solution" }),
});
