import EditCourseForm from "@/components/courses/EditCourseForm";
import { db } from "@/lib/db";
import { Course } from "@prisma/client";
import React from "react";

const CourseBasics = async ({ params }: { params: { courseId: string } }) => {
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      instructorId: "hkfs",
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
    include: {
      subCategories: true,
    },
  });

  const levels = await db.level.findMany();

  return (
    <div className="p-10">
      <EditCourseForm
        course={course as Course}
        categories={categories.map((category) => ({
          label: category.name,
          value: category.id,
          subCategories: category.subCategories.map((subCategory) => ({
            label: subCategory.name,
            value: subCategory.id,
          })),
        }))}
        levels={levels.map((level) => ({
          label: level.name,
          value: level.id,
        }))}
      />
    </div>
  );
};

export default CourseBasics;
