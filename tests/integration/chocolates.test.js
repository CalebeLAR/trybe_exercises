// tests/integration/chocolates.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../src/app')

const { expect } = chai;


chai.use(chaiHttp);

describe('Testando a API Cacau Trybe', function () {
  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });
  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna a quantidade total de chocolates!', async function () {
      const totalChocolates = 4;

      const response = await chai
        .request(app)
        .get('/chocolates/total');
      expect(response.status).to.be.equal(200);
      expect(response.body.totalChocolates).to.deep.equal(totalChocolates);
    });
  });
  describe('Usando o método GET em /chocolates/search', function () {
    it('Retorna os chocolates pesquisados!', async function () {
      const searchedChocolates = [
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=Mo');
      expect(response.status).to.be.equal(200);
      expect(response.body.searchedChocolates).to.deep.equal(searchedChocolates);
    });
    it('Retorna erro caso nem um chocolate confere o nome pesquisado!', async function () {
      const searchedChocolates = [];

      const response = await chai
        .request(app)
        .get('/chocolates/search?name=undefined');
      expect(response.status).to.be.equal(404);
      expect(response.body.searchedChocolates).to.deep.equal(searchedChocolates);
    });
  });
});