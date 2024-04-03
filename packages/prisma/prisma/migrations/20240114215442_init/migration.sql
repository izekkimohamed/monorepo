-- CreateEnum
CREATE TYPE "PaymentEnum" AS ENUM ('Cash', 'Card', 'Cheque');

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "code" TEXT,
    "code_interne" TEXT,
    "libelle" TEXT,
    "pvttc" DOUBLE PRECISION,
    "pvht" DOUBLE PRECISION,
    "rayon_code" INTEGER,
    "famille_code" INTEGER,
    "tva_code" INTEGER,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaittingTickets" (
    "number" SERIAL NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "WaittingTickets_pkey" PRIMARY KEY ("number")
);

-- CreateTable
CREATE TABLE "Famille" (
    "code" INTEGER NOT NULL,
    "libelle" TEXT,
    "rayon_code" INTEGER,

    CONSTRAINT "Famille_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Rayon" (
    "code" INTEGER NOT NULL,
    "libelle" TEXT,

    CONSTRAINT "Rayon_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Tva" (
    "libelle" TEXT,
    "taux" DOUBLE PRECISION,
    "code" INTEGER NOT NULL,

    CONSTRAINT "Tva_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "libelle" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "pvht" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ticketNumber" INTEGER,
    "waittingTicketsNumber" INTEGER,
    "famille_code" INTEGER,
    "tva_code" INTEGER,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "number" SERIAL NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" INTEGER,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("number")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentMode" (
    "id" SERIAL NOT NULL,
    "mode" "PaymentEnum" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "ticketNumber" INTEGER,

    CONSTRAINT "PaymentMode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TabsRayon" (
    "id" SERIAL NOT NULL,
    "libelle" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "products" TEXT[],

    CONSTRAINT "TabsRayon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_famille_code_fkey" FOREIGN KEY ("famille_code") REFERENCES "Famille"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_rayon_code_fkey" FOREIGN KEY ("rayon_code") REFERENCES "Rayon"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_tva_code_fkey" FOREIGN KEY ("tva_code") REFERENCES "Tva"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Famille" ADD CONSTRAINT "Famille_rayon_code_fkey" FOREIGN KEY ("rayon_code") REFERENCES "Rayon"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_famille_code_fkey" FOREIGN KEY ("famille_code") REFERENCES "Famille"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_ticketNumber_fkey" FOREIGN KEY ("ticketNumber") REFERENCES "Ticket"("number") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_tva_code_fkey" FOREIGN KEY ("tva_code") REFERENCES "Tva"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_waittingTicketsNumber_fkey" FOREIGN KEY ("waittingTicketsNumber") REFERENCES "WaittingTickets"("number") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentMode" ADD CONSTRAINT "PaymentMode_ticketNumber_fkey" FOREIGN KEY ("ticketNumber") REFERENCES "Ticket"("number") ON DELETE SET NULL ON UPDATE CASCADE;
