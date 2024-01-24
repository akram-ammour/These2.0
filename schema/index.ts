import * as z from "zod";

export const theseByCategorySchema = z.object({
  category: z.string().nullable(),
  searchParams: z
    .object({
      // sort by year
      year: z.enum(["asc", "desc"]).optional(),
      //   sort by order of thesis
      ord: z.enum(["asc", "desc"]).optional(),
      //   find by association of tags
      tags: z.array(z.string()).optional(),
      //   q search we might search here a prof a name a title a year
      q: z.string().optional(),
    })
    .optional(),
});
