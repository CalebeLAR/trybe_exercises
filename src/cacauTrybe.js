// src/cacauTrybe.js

const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getTotalChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.length;
};

const getChocolatesSearch = async (name) => {
  const cacauTrybe = await readCacauTrybeFile();
  const searchedChocolates = cacauTrybe.chocolates.filter((chocolate) => chocolate.name.includes(name));
  return searchedChocolates;
}

const updateCacauTrybeFile = async (data) => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const data = await fs.readFile(join(__dirname, path), 'utf-8');
    let parsedData = JSON.parse(data);

    parsedData = parsedData.map((chocolate) => chocolate.brandId === data.brandId ? data : chocolate);

    await fs.writeFile(join(__dirname, path), JSON.stringify(parsedData));
    const chocolate = parsedData.find((chocolate) => chocolate.brandId === data.brandId);

    return { chocolate };
  } catch (error) {
    return null;
  }
};

module.exports = {
  getAllChocolates,
  getTotalChocolates,
  getChocolatesSearch,
  updateCacauTrybeFile
};