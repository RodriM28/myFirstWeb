const ip = prompt("Digite o seu IP:");

async function obterDadosDaAPI() {
  if (!ip) {
    console.error("Nenhum IP foi fornecido.");
    return;
  }

  try {
    const resposta = await fetch(`https://ipapi.co/${ip}/json/`);

    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status}`);
    }

    const dados = await resposta.json();
    console.log("Dados recebidos da API:", dados);

    // Verifica se city e country_name existem
    if (dados.city && dados.country_name) {
      alert(`Localização aproximada:\nCidade: ${dados.city}\nPaís: ${dados.country_name}`);
    } else {
      alert("Dados de localização não disponíveis para esse IP.");
    }

  } catch (erro) {
    console.error("Ocorreu um erro:", erro.message);
  }
}

obterDadosDaAPI();
  