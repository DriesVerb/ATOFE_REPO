-- CreateTable
CREATE TABLE "story" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "published_at" TIMESTAMPTZ,
    "deleted_at" TIMESTAMPTZ,
    "emojis" TEXT[],
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "story" JSONB NOT NULL,

    CONSTRAINT "story_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "story" ADD CONSTRAINT "story_author_fkey" FOREIGN KEY ("author") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
