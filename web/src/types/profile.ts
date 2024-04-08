import { z } from "zod";

export const ProfileUpdateSchema = z.object({
  avatar: z.string(),
  avatarBg: z.string().array().max(2),
  bio: z.string().max(250),
})

export type ProfileUpdate = z.infer<typeof ProfileUpdateSchema>
