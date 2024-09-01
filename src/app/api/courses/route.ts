import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { title, categoryId, subCategoryId } = await req.json();
    const newCourse = await db.course.create({
      data: {
        title,
        categoryId,
        subCategoryId,
        instructorId: "hkfs",
      },
    });
    return NextResponse.json(newCourse, { status: 200 });
  } catch (error) {
    console.log("[courses]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
};
