/*
  Warnings:

  - Changed the type of `emojis` on the `story` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "story" DROP COLUMN "emojis",
ADD COLUMN     "emojis" JSONB NOT NULL;
