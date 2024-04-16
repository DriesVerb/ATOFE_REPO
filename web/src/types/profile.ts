import { z } from "zod";

export const ProfileUpdateSchema = z.object({
  avatar: z.string().optional(),
  avatarBg: z.string().array().max(2).optional(),
  bio: z.string().max(250).optional(),
})

export type ProfileUpdate = z.infer<typeof ProfileUpdateSchema>
