/*
  Warnings:

  - Added the required column `html` to the `story` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "story" ADD COLUMN     "html" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "emoji" (
    "id" SERIAL NOT NULL,
    "character" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "storyId" INTEGER NOT NULL,

    CONSTRAINT "emoji_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "emoji" ADD CONSTRAINT "emoji_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
