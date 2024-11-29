const { z } = require("zod")

const signupSchema = z.object({
    username: z
    .string({required_error:"Name is reqired"})
    .trim()
    .min(3,{message:"Name must be atleast of 3 characters"})
    .max(225,{message:"Name must not be more than 255 characters"}),
    email: z
    .string({required_error:"Email is reqired"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be atleast of 3 characters"})
    .max(225,{message:"Email must not be more than 255 characters"}),
    phone: z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone must be atleast of 10 characters"})
    .max(20,{message:"Phone must not be more than 20 characters"}),
    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(7,{message:"Password must be atleast of 6 characters"})
    .max(1024,{message:"Password can not be greater than 1024 characters"}),
});


module.exports = signupSchema;