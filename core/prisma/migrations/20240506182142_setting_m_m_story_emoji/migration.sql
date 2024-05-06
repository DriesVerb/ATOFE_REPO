/*
  Warnings:

  - You are about to drop the column `emojis` on the `story` table. All the data in the column will be lost.
  - You are about to drop the `_ArticleToEmoji` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `article` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ArticleToEmoji" DROP CONSTRAINT "_ArticleToEmoji_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArticleToEmoji" DROP CONSTRAINT "_ArticleToEmoji_B_fkey";

-- DropForeignKey
ALTER TABLE "article" DROP CONSTRAINT "article_author_fkey";

-- AlterTable
ALTER TABLE "story" DROP COLUMN "emojis";

-- DropTable
DROP TABLE "_ArticleToEmoji";

-- DropTable
DROP TABLE "article";

-- CreateTable
CREATE TABLE "_EmojiToStory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EmojiToStory_AB_unique" ON "_EmojiToStory"("A", "B");

-- CreateIndex
CREATE INDEX "_EmojiToStory_B_index" ON "_EmojiToStory"("B");

-- AddForeignKey
ALTER TABLE "_EmojiToStory" ADD CONSTRAINT "_EmojiToStory_A_fkey" FOREIGN KEY ("A") REFERENCES "emoji"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmojiToStory" ADD CONSTRAINT "_EmojiToStory_B_fkey" FOREIGN KEY ("B") REFERENCES "story"("id") ON DELETE CASCADE ON UPDATE CASCADE;
