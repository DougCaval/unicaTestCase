const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const savePdf = async (fileName, content) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(content);
  const pdfPath = path.join('cypress', 'downloads', `${fileName}.pdf`);
  await page.pdf({ path: pdfPath, format: 'A4' });
  await browser.close();
};

Cypress.Commands.add('generatePdf', (fileName, content) => {
  const sanitizedFileName = fileName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  savePdf(sanitizedFileName, content);
});
