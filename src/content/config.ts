import { defineCollection, z } from 'astro:content';

const eventsCollection = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        date: z.string(),
        time: z.string(),
        description: z.string()

    }),
});
// const artisansCollection = defineCollection({
//     type: "content",
//     schema: z.object({
//         name: z.string(),
//         profession: z.string(),
//         image: z.string(),
//     }),
// });

export const collections = {
    events: eventsCollection,
    // artisans: artisansCollection
};
// 4. Export a single `collections` object to register your collection(s)
