const fs = require("fs/promises");

const writeFile = async (fileName, fileContent) => {
  try {
    
    try {
      await fs.access(fileName);
      console.log(`${fileName} already exists. Skipping write operation`);
      return;
    } catch (err) {
     
      await fs.writeFile(fileName, fileContent);
      console.log(`File ${fileName} created and data written successfully!`);
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = writeFile;
