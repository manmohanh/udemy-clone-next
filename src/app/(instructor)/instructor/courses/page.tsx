import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Link from "next/link";

const CoursesPage = async () => {

  const courses = await db.course.findMany({
    where:{
      instructorId:"hkfs"
    },
    orderBy:{
      createdAt:"desc"
    }
  })

  return (
    <div className="px-6 py-4">
      <Link href="/instructor/create-course">
        <Button>Create new course</Button>
      </Link>
      <div className="mt-10 flex flex-col gap-4">
      {courses.map((course) =>(
        <Link href={`/instructor/courses/${course.id}/basic`}>{course.title}</Link>
      ))}
      </div>
    </div>
  );
};

export default CoursesPage;
