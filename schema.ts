import { pgTable, serial, text, timestamp, integer, boolean } from "drizzle-orm/pg-core";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  category: text("category").default("general"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const toolRatings = pgTable("tool_ratings", {
  id: serial("id").primaryKey(),
  toolSlug: text("tool_slug").notNull(),
  rating: integer("rating").notNull(), // 1 to 5
  feedback: text("feedback"),
  helpful: boolean("helpful").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
