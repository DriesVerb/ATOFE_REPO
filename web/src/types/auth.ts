import { z } from 'zod'

export const signUpSchema = z
  .object({
    username: z.string().min(2),
    email: z.string().email().toLowerCase(),
    confirmEmail: z.string(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password, email, confirmEmail }, ctx) => {
    if (confirmEmail !== email) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmEmail'],
        message: 'The email did not match',
      })
    }
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'The passwords did not match',
      })
    }
  })

export type SignUp = z.infer<typeof signUpSchema>
