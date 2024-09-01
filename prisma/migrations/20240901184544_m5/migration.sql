-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_levelId_fkey";

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "levelId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE SET NULL ON UPDATE CASCADE;
