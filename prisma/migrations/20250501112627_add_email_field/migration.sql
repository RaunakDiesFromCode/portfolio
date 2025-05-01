/*
  Warnings:

  - Made the column `contact` on table `Review` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "email" TEXT,
ALTER COLUMN "contact" SET NOT NULL;
