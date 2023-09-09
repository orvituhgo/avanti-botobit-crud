-- DropForeignKey
ALTER TABLE "jogadores" DROP CONSTRAINT "jogadores_id_time_fkey";

-- AddForeignKey
ALTER TABLE "jogadores" ADD CONSTRAINT "jogadores_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "time"("id") ON DELETE CASCADE ON UPDATE CASCADE;
