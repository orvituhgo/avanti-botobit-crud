-- CreateTable
CREATE TABLE "players" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_team" TEXT NOT NULL,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teams" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "founded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "toutruernaments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "toutruernaments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teams_tournaments" (
    "id" TEXT NOT NULL,
    "id_team" TEXT NOT NULL,
    "id_tournament" TEXT NOT NULL,

    CONSTRAINT "teams_tournaments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teams_name_key" ON "teams"("name");

-- CreateIndex
CREATE UNIQUE INDEX "toutruernaments_name_key" ON "toutruernaments"("name");

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_id_team_fkey" FOREIGN KEY ("id_team") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams_tournaments" ADD CONSTRAINT "teams_tournaments_id_team_fkey" FOREIGN KEY ("id_team") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams_tournaments" ADD CONSTRAINT "teams_tournaments_id_tournament_fkey" FOREIGN KEY ("id_tournament") REFERENCES "toutruernaments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
