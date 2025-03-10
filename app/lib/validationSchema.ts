import { z } from "zod"

export const validationSchema = z.object({
    task: z.string().nonempty("タスクを入力してください。"),
    
    priority: z.string().optional(),
    description: z.string().optional()
})