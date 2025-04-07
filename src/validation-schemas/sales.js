const { z } = require('zod')

const CreateSalesSchema = z.object({
    customerId: z.number().min(1),
    productIds: z.array(z.number()).min(1),
})

const GetAllSalesSchema = z.object({
    date: z.string().date().optional(),
    customerId: z.string().min(1).optional().transform(Number),
})

const UpdateSalesSchema = CreateSalesSchema
    .extend({ id: z.number().min(1) })


module.exports = {
    CreateSalesSchema,
    GetAllSalesSchema,
    UpdateSalesSchema
}