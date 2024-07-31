'use strict';
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('livros', [
      // Novo Testamento
      { id: uuidv4(), nome: 'Mateus', capitulos: 28, novoTestamento: true, ordemBiblica: 1 },
      { id: uuidv4(), nome: 'Marcos', capitulos: 16, novoTestamento: true, ordemBiblica: 2 },
      { id: uuidv4(), nome: 'Lucas', capitulos: 24, novoTestamento: true, ordemBiblica: 3 },
      { id: uuidv4(), nome: 'João', capitulos: 21, novoTestamento: true, ordemBiblica: 4 },
      { id: uuidv4(), nome: 'Atos', capitulos: 28, novoTestamento: true, ordemBiblica: 5 },
      { id: uuidv4(), nome: 'Romanos', capitulos: 16, novoTestamento: true, ordemBiblica: 6 },
      { id: uuidv4(), nome: '1 Coríntios', capitulos: 16, novoTestamento: true, ordemBiblica: 7 },
      { id: uuidv4(), nome: '2 Coríntios', capitulos: 13, novoTestamento: true, ordemBiblica: 8 },
      { id: uuidv4(), nome: 'Gálatas', capitulos: 6, novoTestamento: true, ordemBiblica: 9 },
      { id: uuidv4(), nome: 'Efésios', capitulos: 6, novoTestamento: true, ordemBiblica: 10 },
      { id: uuidv4(), nome: 'Filipenses', capitulos: 4, novoTestamento: true, ordemBiblica: 11 },
      { id: uuidv4(), nome: 'Colossenses', capitulos: 4, novoTestamento: true, ordemBiblica: 12 },
      { id: uuidv4(), nome: '1 Tessalonicenses', capitulos: 5, novoTestamento: true, ordemBiblica: 13 },
      { id: uuidv4(), nome: '2 Tessalonicenses', capitulos: 3, novoTestamento: true, ordemBiblica: 14 },
      { id: uuidv4(), nome: '1 Timóteo', capitulos: 6, novoTestamento: true, ordemBiblica: 15 },
      { id: uuidv4(), nome: '2 Timóteo', capitulos: 4, novoTestamento: true, ordemBiblica: 16 },
      { id: uuidv4(), nome: 'Tito', capitulos: 3, novoTestamento: true, ordemBiblica: 17 },
      { id: uuidv4(), nome: 'Filemon', capitulos: 1, novoTestamento: true, ordemBiblica: 18 },
      { id: uuidv4(), nome: 'Hebreus', capitulos: 13, novoTestamento: true, ordemBiblica: 19 },
      { id: uuidv4(), nome: 'Tiago', capitulos: 5, novoTestamento: true, ordemBiblica: 20 },
      { id: uuidv4(), nome: '1 Pedro', capitulos: 5, novoTestamento: true, ordemBiblica: 21 },
      { id: uuidv4(), nome: '2 Pedro', capitulos: 3, novoTestamento: true, ordemBiblica: 22 },
      { id: uuidv4(), nome: '1 João', capitulos: 5, novoTestamento: true, ordemBiblica: 23 },
      { id: uuidv4(), nome: '2 João', capitulos: 1, novoTestamento: true, ordemBiblica: 24 },
      { id: uuidv4(), nome: '3 João', capitulos: 1, novoTestamento: true, ordemBiblica: 25 },
      { id: uuidv4(), nome: 'Judas', capitulos: 1, novoTestamento: true, ordemBiblica: 26 },
      { id: uuidv4(), nome: 'Apocalipse', capitulos: 22, novoTestamento: true, ordemBiblica: 27 },

      // Antigo Testamento
      { id: uuidv4(), nome: 'Gênesis', capitulos: 50, novoTestamento: false, ordemBiblica: 28 },
      { id: uuidv4(), nome: 'Êxodo', capitulos: 40, novoTestamento: false, ordemBiblica: 29 },
      { id: uuidv4(), nome: 'Levítico', capitulos: 27, novoTestamento: false, ordemBiblica: 30 },
      { id: uuidv4(), nome: 'Números', capitulos: 36, novoTestamento: false, ordemBiblica: 31 },
      { id: uuidv4(), nome: 'Deuteronômio', capitulos: 34, novoTestamento: false, ordemBiblica: 32 },
      { id: uuidv4(), nome: 'Josué', capitulos: 24, novoTestamento: false, ordemBiblica: 33 },
      { id: uuidv4(), nome: 'Juízes', capitulos: 21, novoTestamento: false, ordemBiblica: 34 },
      { id: uuidv4(), nome: 'Rute', capitulos: 4, novoTestamento: false, ordemBiblica: 35 },
      { id: uuidv4(), nome: '1 Samuel', capitulos: 31, novoTestamento: false, ordemBiblica: 36 },
      { id: uuidv4(), nome: '2 Samuel', capitulos: 24, novoTestamento: false, ordemBiblica: 37 },
      { id: uuidv4(), nome: '1 Reis', capitulos: 22, novoTestamento: false, ordemBiblica: 38 },
      { id: uuidv4(), nome: '2 Reis', capitulos: 25, novoTestamento: false, ordemBiblica: 39 },
      { id: uuidv4(), nome: '1 Crônicas', capitulos: 29, novoTestamento: false, ordemBiblica: 40 },
      { id: uuidv4(), nome: '2 Crônicas', capitulos: 36, novoTestamento: false, ordemBiblica: 41 },
      { id: uuidv4(), nome: 'Esdras', capitulos: 10, novoTestamento: false, ordemBiblica: 42 },
      { id: uuidv4(), nome: 'Neemias', capitulos: 13, novoTestamento: false, ordemBiblica: 43 },
      { id: uuidv4(), nome: 'Ester', capitulos: 10, novoTestamento: false, ordemBiblica: 44 },
      { id: uuidv4(), nome: 'Jó', capitulos: 42, novoTestamento: false, ordemBiblica: 45 },
      { id: uuidv4(), nome: 'Salmos', capitulos: 150, novoTestamento: false, ordemBiblica: 46 },
      { id: uuidv4(), nome: 'Provérbios', capitulos: 31, novoTestamento: false, ordemBiblica: 47 },
      { id: uuidv4(), nome: 'Eclesiastes', capitulos: 12, novoTestamento: false, ordemBiblica: 48 },
      { id: uuidv4(), nome: 'Cantares', capitulos: 8, novoTestamento: false, ordemBiblica: 49 },
      { id: uuidv4(), nome: 'Isaías', capitulos: 66, novoTestamento: false, ordemBiblica: 50},
      { id: uuidv4(), nome: 'Jeremias', capitulos: 52, novoTestamento: false, ordemBiblica: 51 },
      { id: uuidv4(), nome: 'Lamentações', capitulos: 5, novoTestamento: false, ordemBiblica: 52 },
      { id: uuidv4(), nome: 'Ezequiel', capitulos: 48, novoTestamento: false, ordemBiblica: 53 },
      { id: uuidv4(), nome: 'Daniel', capitulos: 12, novoTestamento: false, ordemBiblica: 54 },
      { id: uuidv4(), nome: 'Oséias', capitulos: 14, novoTestamento: false, ordemBiblica: 55 },
      { id: uuidv4(), nome: 'Joel', capitulos: 3, novoTestamento: false, ordemBiblica: 56 },
      { id: uuidv4(), nome: 'Amós', capitulos: 9, novoTestamento: false, ordemBiblica: 57 },
      { id: uuidv4(), nome: 'Obadias', capitulos: 1, novoTestamento: false, ordemBiblica: 58 },
      { id: uuidv4(), nome: 'Jonas', capitulos: 4, novoTestamento: false, ordemBiblica: 59 },
      { id: uuidv4(), nome: 'Miquéias', capitulos: 7, novoTestamento: false, ordemBiblica: 60 },
      { id: uuidv4(), nome: 'Naum', capitulos: 3, novoTestamento: false, ordemBiblica: 61 },
      { id: uuidv4(), nome: 'Habacuque', capitulos: 3, novoTestamento: false, ordemBiblica: 62 },
      { id: uuidv4(), nome: 'Sofonias', capitulos: 3, novoTestamento: false, ordemBiblica: 63 },
      { id: uuidv4(), nome: 'Ageu', capitulos: 2, novoTestamento: false, ordemBiblica: 64 },
      { id: uuidv4(), nome: 'Zacarias', capitulos: 14, novoTestamento: false, ordemBiblica: 65 },
      { id: uuidv4(), nome: 'Malaquias', capitulos: 4, novoTestamento: false, ordemBiblica: 66 }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
