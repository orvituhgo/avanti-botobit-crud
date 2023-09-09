-- DropForeignKey
ALTER TABLE "jogadores" DROP CONSTRAINT "jogadores_id_time_fkey";

-- AlterTable
ALTER TABLE "jogadores" ALTER COLUMN "id_time" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "jogadores" ADD CONSTRAINT "jogadores_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "time"("id") ON DELETE SET NULL ON UPDATE CASCADE;
