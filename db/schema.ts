import { relations } from "drizzle-orm";
import { integer, pgTable, point, serial, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull(),
});

export const coursesRelations = relations(courses, ({many}) => ({
    userProgress: many(userProgress)
}));

export const userProgress = pgTable("users_progress", {
    userId: text("user_id").primaryKey(),
    username: text("username").notNull().default("User"),
    UserimageSrc: text("user_image_src").notNull().default("/mascot.svg"),
    activeCourseId: integer("active_course_id").references(() => courses.id, { onDelete: 'cascade' }),
    hearts: integer("hearts").notNull().default(5),
    point: integer("point").notNull().default(5),
  });
  

export const userProgressRalation = relations(userProgress, ({one}) => ({
    activeCourse: one(courses,{
        fields: [userProgress.activeCourseId],
        references: [courses.id], 
    })
}));