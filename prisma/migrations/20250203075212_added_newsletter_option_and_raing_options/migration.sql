/*
  Warnings:

  - Made the column `newsletter` on table `Review` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `Review` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "newsletter" SET NOT NULL,
ALTER COLUMN "rating" SET NOT NULL;
