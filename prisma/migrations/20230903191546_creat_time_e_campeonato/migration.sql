-- CreateTable
CREATE TABLE "Time" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fundacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Time_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campeonato" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Campeonato_pkey" PRIMARY KEY ("id")
);
