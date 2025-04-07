const { z } = require('zod')

const CreateProductSchema = z.object({
    name: z.string().min(3),
    unit: z.string().optional(),
    price: z.number().minValue(1)
})

const UpdateProductSchema = CreateProductSchema
    .optional()
    .extend({ id: z.number().min(1) })


module.exports = {
    CreateProductSchema,
    UpdateProductSchema
}