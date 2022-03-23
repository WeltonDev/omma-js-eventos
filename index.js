const empresa = "Sistema Omma";
console.log(`Seja bem vindo ao ${empresa}`);

const listaDeReceitas = [{
  id: 1,
  titulo: "Cachorro Quente",
  dificuldade: "simples",
  ingredientes: ["1 pao de leite", "1 Salsicha", "Maionese"],
  preparo: "corte o pão, coloque a salsicha e a maionese",
  link: "youtube.com",
  vegano: "não",
},];

const cadastrarReceita = (
  id,
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegano
) => {
  const novaReceita = {
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  };
  listaDeReceitas.push(novaReceita);

  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};

const enviar = document.querySelector('#btnEnviar');

enviar.onclick = (event) => {
  event.preventDefault();

  // selecionando os campos do formulário no HTML
  let inputTitulo = document.querySelector('#titulo');
  let inputDificuldade = document.querySelector('#dificuldade');
  let inputIngredientes = document.querySelector('#ingredientes');
  let inputPreparo = document.querySelector('#preparo');
  let inputLink = document.querySelector('#link');
  let inputVegano = document.querySelector("input[name='vegano']:checked");

  // criando nova receita, com os dados obtidos do formulário
  let receita = {
    id: listaDeReceitas.length + 1,
    titulo: inputTitulo.value,
    dificuldade: inputDificuldade.value,
    ingredientes: inputIngredientes.value.split(','),
    preparo: inputPreparo.value,
    link: inputLink.value,
    vegano: inputVegano.value,
  }

  // adicionando receita no Array
  listaDeReceitas.push(receita);

  // limpando os campos de digitação quando a receita for adicionada
  inputTitulo.value = "";
  inputDificuldade.value = "";
  inputIngredientes.value = "";
  inputPreparo.value = "";
  inputLink.value = "";
  inputVegano.value = "";

  // exibir a lista de receitas.
  exibirReceitas();
}

function exibirReceitas() {

  // criando uma nova receita no HTML com os dados do formulário
  let htmlReceitas = '';

  for (let index = 0; index < listaDeReceitas.length; index++) {
    htmlReceitas += `<article class="card">
    <h2>${listaDeReceitas[index].titulo}</h2> 
    <b>Dificuldade:</b> ${listaDeReceitas[index].dificuldade}
    <p><b>Ingredientes</b><br>${listaDeReceitas[index].ingredientes}
    <p><b>Preparo</b></br>${listaDeReceitas[index].preparo}</p>
    <p><b>Link</b><br><a href="${listaDeReceitas[index].link}">${listaDeReceitas[index].link} <a/></p>
    <p><b>Vegano</b><br>${listaDeReceitas[index].vegano}</p>
</article>`
    let painelReceitas = document.querySelector('.painel-receitas');
    painelReceitas.innerHTML = htmlReceitas;
  }

}
// Exibindo receitas, agora com a nova receita já incluida.
exibirReceitas();

function deletarReceita(id) {
  let novaListaDeReceitas = [];

  for (let index = 0; index < listaDeReceitas.length; index++) {
    const receita = listaDeReceitas[index];

    if (receita.id != id) {
      novaListaDeReceitas.push(receita);
    }
  }

  if (novaListaDeReceitas.length == listaDeReceitas.length) {
    return console.log("Não encontrei o id");
  }

  listaDeReceitas = novaListaDeReceitas;
  console.log("receita deletada com sucesso!");
}

function deletarReceita(id) {
  const novaListaDeReceitas = listaDeReceitas.filter(
    (receita) => receita.id != id
  );

  if (novaListaDeReceitas.length == listaDeReceitas.length) {
    return console.log("Não encontrei o id");
  }

  listaDeReceitas = novaListaDeReceitas;
  console.log("receita deletada com sucesso!");
}


const condicaoDeReceita = (receita) => (receita.vegano = true);


const atualizaReceita = (id, receitaAtualizada) => {
  let foiAtualizado = false;

  listaDeReceitas.forEach((receita) => {
    if (receita.id != id) {
      return;
    }

    if (receitaAtualizada.titulo) {
      receita.titulo = receitaAtualizada.titulo;
    }

    if (receitaAtualizada.ingredientes) {
      receita.ingredientes = receitaAtualizada.ingredientes;
    }

    foiAtualizado = true;
  });

  console.log(
    foiAtualizado ?
      "Receita atualizada com sucesso!" :
      "Não foi encontrado o id"
  );
};


const buscarReceita = (termoBuscado) => {

  const resultados = listaDeReceitas.filter(
    (receita) =>
      receita.titulo.toLowerCase().indexOf(termoBuscado.toLowerCase()) != -1
  );

  // if (resultados.length) {
  //   console.log(resultados);
  // } else {
  //   console.log("Não foi encontrado receitas");
  // }

  if (!resultados.length) {
    console.log("Não foi encontrado receitas");
  }

  return console.log(resultados);
};