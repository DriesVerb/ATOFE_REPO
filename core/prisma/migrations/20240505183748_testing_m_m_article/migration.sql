-- CreateTable
CREATE TABLE "emoji" (
    "id" SERIAL NOT NULL,
    "character" TEXT NOT NULL,
    "info" TEXT NOT NULL,

    CONSTRAINT "emoji_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "published_at" TIMESTAMPTZ,
    "deleted_at" TIMESTAMPTZ,
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ArticleToEmoji" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "emoji_character_key" ON "emoji"("character");

-- CreateIndex
CREATE UNIQUE INDEX "_ArticleToEmoji_AB_unique" ON "_ArticleToEmoji"("A", "B");

-- CreateIndex
CREATE INDEX "_ArticleToEmoji_B_index" ON "_ArticleToEmoji"("B");

-- AddForeignKey
ALTER TABLE "article" ADD CONSTRAINT "article_author_fkey" FOREIGN KEY ("author") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleToEmoji" ADD CONSTRAINT "_ArticleToEmoji_A_fkey" FOREIGN KEY ("A") REFERENCES "article"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleToEmoji" ADD CONSTRAINT "_ArticleToEmoji_B_fkey" FOREIGN KEY ("B") REFERENCES "emoji"("id") ON DELETE CASCADE ON UPDATE CASCADE;
