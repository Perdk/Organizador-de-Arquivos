const fs = require("fs");
const path = require("path");

const pastaAlvo = path.join(__dirname, "pasta_teste");

const categorias = {
  imagens: [".jpeg", ".png"],
  documentos: [".pdf", ".txt"],
};

const organizar = () => {
  const arquivos = fs.readdirSync(pastaAlvo);
  arquivos.forEach((arquivo) => {
    const caminhoCompleto = path.join(pastaAlvo, arquivo);
    const extensao = path.extname(arquivo).toLowerCase();

    // console.log(`Arquivo: ${arquivo} | Extensão: ${extensao}`);

    if (categorias.imagens.includes(extensao)) {
      console.log("ok");
    }

    for (const nomeCategoria in categorias) {
      // nomeCategoria guarda o NOME da pasta ("imagens", "documentos")
      console.log(nomeCategoria);

      // categorias[nomeCategoria] guarda a LISTA de extensões ([".jpeg", ".png"])
      const listaDeExtensoes = categorias[nomeCategoria];
      console.log(`Categoria: ${nomeCategoria} | Extensões:`, listaDeExtensoes);
    }
  });
};

organizar();
