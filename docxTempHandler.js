const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const ImageModule = require("docxtemplater-image-module-free");
const fs = require("fs");
const path = require("path");

function formatString(inputString) {
  // Replace multiple spaces with a single space and <br> with ' \n '
  return inputString.replace(/\s+/g, " ").replace(/<br\s*\/?>/gi, " \n ");
}

function generateDocument(templateData, templatePath, outputPath) {
  const content = fs.readFileSync(
    path.resolve(__dirname, templatePath),
    "binary"
  );
  const zip = new PizZip(content);

  templateData.address = formatString(templateData.address);
  templateData.bill_to = formatString(templateData.bill_to);
  templateData.shipped_to = formatString(templateData.shipped_to);
  templateData.payment_info = formatString(templateData.payment_info);
  templateData.contact_info = formatString(templateData.contact_info);

  const imageOptions = {
    centered: true,
    getImage(tagValue, tagName) {
      console.log({ tagValue, tagName });
      return fs.readFileSync(tagValue);
    },
    getSize() {
      // it also is possible to return a size in centimeters, like this : return [ "2cm", "3cm" ];
      return [100, 100];
    },
  };

  const doc = new Docxtemplater(zip, {
    linebreaks: true,
    modules: [new ImageModule(imageOptions)],
  });

  doc.setData(templateData);

  try {
    doc.render();
  } catch (error) {
    alert("internal error ");
    return false;
  }

  const buf = doc.getZip().generate({ type: "nodebuffer" });

  try {
    fs.writeFileSync(path.resolve(__dirname, outputPath), buf);
    alert('Temaplate is saved')
    return true;
  } catch (error) {
    alert("Error while writing file");
    return false;
  }
}

module.exports = generateDocument;
