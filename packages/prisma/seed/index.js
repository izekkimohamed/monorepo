const fs = require("fs");
const csv = require("csv-parser");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const results = [];

// Products
const createProducts = async () => {
  return fs
    .createReadStream("./products.csv", "latin1")
    .pipe(csv())
    .on("data", async (data) => {
      results.push(data);

      await prisma.product.create({
        data: {
          code: data.CODE,
          libelle: data.LIBELLE,
          code_interne: data.CODE_INTERNE,
          famille_code: +data.CODE_FAMILLE || 610,
          rayon_code: +data.CODE_RAYON || 1,
          pvht: Number(data.PVHT),
          price: Number(data.PVTTC),
          tva_code: +data.CODE_TVA,
        },
      });
    })
    .on("end", async () => {
      // await prisma.product.deleteMany();
      await prisma.$disconnect();
      console.log(results.length);
    });
};

// tva;
const createTva = async () => {
  return fs
    .createReadStream("./tva.csv", "latin1")
    .pipe(csv())
    .on("data", async (data) => {
      await prisma.tva.createMany({
        data: {
          code: Number(data.CODE),
          libelle: data.LIBELLE,
          taux: Number(data.TAUX),
        },
      });
      console.log(data);
    })
    .on("end", async () => {
      await prisma.$disconnect();
      console.log(results.length);
    });
};

const createRayon = async () => {
  return fs
    .createReadStream("./rayon.csv", "latin1")
    .pipe(csv())
    .on("data", async (data) => {
      await prisma.rayon.createMany({
        data: {
          code: Number(data.CODE),
          libelle: data.LIBELLE,
        },
      });
    })
    .on("end", async () => {
      await prisma.$disconnect();
      console.log(results.length);
    });
};

const createFamille = async () => {
  return fs
    .createReadStream("./famille.csv", "latin1")
    .pipe(csv())
    .on("data", async (data) => {
      await prisma.famille.create({
        data: {
          code: +data.CODE,
          libelle: data.LIBELLE,
          rayon_code: +data.LIEN_RAYON,
        },
      });
    })
    .on("end", async () => {
      await prisma.$disconnect();
      console.log(results.length);
    });
};

const seed = async () => {
  // await createTva();
  // await createRayon();
  // await createFamille();
  await createProducts();
};

seed();
