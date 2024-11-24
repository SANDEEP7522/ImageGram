import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "image/webs",
];
export const zodPostSchema = z.object({
  caption: z.string({ message: "Caption is required" }).min(1),
  //   image: z
  //     .any()
  //     .refine(
  //       (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //       ".jpg, .jpeg, .png and webp file are supported or accepted"
  //     ),
});
