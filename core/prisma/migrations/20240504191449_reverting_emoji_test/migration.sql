/*
  Warnings:

  - You are about to drop the `emoji` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "emoji" DROP CONSTRAINT "emoji_storyId_fkey";

-- DropTable
DROP TABLE "emoji";
