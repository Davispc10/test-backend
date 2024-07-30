const { z } =  require('zod');

module.exports.querySchema = z.object({
  page: z.number({ coerce: true }).positive().optional(),
  size: z.number({ coerce: true }).positive().optional(),
  filter: z.object().optional()
})