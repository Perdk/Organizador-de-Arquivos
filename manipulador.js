const fs = require("fs");
const path = require("path");

const pastaAlvo = path.join(__dirname, "pasta_teste");

const categorias = {
  imagens: [".jpeg", ".png"],
  documentos: [".pdf", ".txt"],
};

const organizar = () => {
  const arquivos = fs.readdirSync(pastaAlvo);
  console.log(arquivos);
};

organizar();
