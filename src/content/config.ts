import { defineCollection, z } from 'astro:content';

// Уровень листинга — основа будущей монетизации (бизнес-подписка)
const tier = z.enum(['free', 'verified', 'recommended']).default('free');

const countries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    currency: z.string().optional(),
    language: z.string().optional(),
    bestTimeToVisit: z.string().optional(),
    featured: z.boolean().default(false),
    pubDate: z.date(),
  }),
});

const cities = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    country: z.string(), // slug страны, напр. "thailand"
    description: z.string(),
    heroImage: z.string().optional(),
    featured: z.boolean().default(false),
    pubDate: z.date(),
  }),
});

const places = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    city: z.string(), // slug города
    category: z.enum(['attraction', 'restaurant', 'bar', 'cafe', 'activity', 'viewpoint', 'shopping', 'nightlife']),
    description: z.string(),
    address: z.string().optional(),
    priceLevel: z.enum(['$', '$$', '$$$', '$$$$']).optional(),
    rating: z.number().min(1).max(5),
    affiliateUrl: z.string().url().optional(),
    images: z.array(z.string()).optional(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    tier,
    featured: z.boolean().default(false),
    pubDate: z.date(),
  }),
});

const hotels = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    city: z.string(),
    stars: z.number().min(1).max(5).optional(),
    priceRange: z.enum(['budget', 'mid', 'luxury']),
    rating: z.number().min(1).max(5),
    affiliateUrl: z.string().url(),
    images: z.array(z.string()).optional(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    tier,
    featured: z.boolean().default(false),
    pubDate: z.date(),
  }),
});

// Полезные тревел-сервисы: esim, страховки, визы, приложения
const tools = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['esim', 'insurance', 'visa', 'app', 'booking', 'transport', 'other']),
    pricing: z.enum(['Free', 'Freemium', 'Paid']),
    rating: z.number().min(1).max(5),
    affiliateUrl: z.string().url(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    pubDate: z.date(),
    logo: z.string().optional(),
  }),
});

// Статьи/дайджесты/новости — контентная приманка на главной
const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    relatedCountry: z.string().optional(),
    relatedCity: z.string().optional(),
    featured: z.boolean().default(false),
    pubDate: z.date(),
  }),
});

export const collections = { countries, cities, places, hotels, tools, articles };
