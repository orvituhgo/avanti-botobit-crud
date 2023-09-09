/*
  Warnings:

  - Made the column `id_time` on table `jogadores` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "jogadores" DROP CONSTRAINT "jogadores_id_time_fkey";

-- AlterTable
ALTER TABLE "jogadores" ALTER COLUMN "id_time" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "jogadores" ADD CONSTRAINT "jogadores_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "time"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
