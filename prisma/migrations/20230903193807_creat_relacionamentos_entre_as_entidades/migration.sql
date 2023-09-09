/*
  Warnings:

  - You are about to drop the `Campeonato` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Jogadores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Time` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Campeonato";

-- DropTable
DROP TABLE "Jogadores";

-- DropTable
DROP TABLE "Time";

-- CreateTable
CREATE TABLE "jogadores" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_time" TEXT NOT NULL,

    CONSTRAINT "jogadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "time" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fundacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "time_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campeonato" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campeonato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campeonatotimes" (
    "id" TEXT NOT NULL,
    "id_time" TEXT NOT NULL,
    "id_campeonato" TEXT NOT NULL,

    CONSTRAINT "campeonatotimes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "jogadores" ADD CONSTRAINT "jogadores_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "time"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatotimes" ADD CONSTRAINT "campeonatotimes_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "time"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatotimes" ADD CONSTRAINT "campeonatotimes_id_campeonato_fkey" FOREIGN KEY ("id_campeonato") REFERENCES "campeonato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
