// FS -> TRABALHA COM ARQUIVOS
const fs = require("fs");
// ENCONTRA/CONSTRUI OS CAMINHOS DOS ARQUIVOS
const path = require("path");

const pastaAlvo = path.join(__dirname, "pasta_teste");

const categorias = {
  imagens: [".jpeg", ".png"],
  documentos: [".pdf", ".txt", ".doc"],
};

const organizar = () => {
  // LEITURA DA PASTA
  const arquivos = fs.readdirSync(pastaAlvo);
  arquivos.forEach((arquivo) => {
    const caminhoCompleto = path.join(pastaAlvo, arquivo);
    const extensao = path.extname(arquivo).toLowerCase();

    // console.log(`Arquivo: ${arquivo} | Extensão: ${extensao}`);

    for (const nomeCategoria in categorias) {
      // nomeCategoria guarda o NOME da pasta ("imagens", "documentos")
      console.log(nomeCategoria);

      // categorias[nomeCategoria] guarda a LISTA de extensões ([".jpeg", ".png"])
      const listaDeExtensoes = categorias[nomeCategoria];
      console.log(`Categoria: ${nomeCategoria} | Extensões:`, listaDeExtensoes);

      if (listaDeExtensoes.includes(extensao)) {
        const novaSubPasta = path.join(pastaAlvo, nomeCategoria);

        // PASTA EXISTE? -> NAO
        if (!fs.existsSync(novaSubPasta)) {
          // ENTAO CRIA A PASTA
          fs.mkdirSync(novaSubPasta);
        }
        const caminhoNovo = path.join(novaSubPasta, arquivo);
        //  MOVE O ARQUIVO PRA NOVA PASTA
        fs.renameSync(caminhoCompleto, caminhoNovo);
      }
    }
  });
};

organizar();
