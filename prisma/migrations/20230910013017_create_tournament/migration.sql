/*
  Warnings:

  - You are about to drop the `tournaments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "teams_tournaments" DROP CONSTRAINT "teams_tournaments_id_tournament_fkey";

-- DropTable
DROP TABLE "tournaments";

-- CreateTable
CREATE TABLE "tournaments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tournaments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tournaments_name_key" ON "tournaments"("name");

-- AddForeignKey
ALTER TABLE "teams_tournaments" ADD CONSTRAINT "teams_tournaments_id_tournament_fkey" FOREIGN KEY ("id_tournament") REFERENCES "tournaments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
