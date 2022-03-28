function acessarAPI(url) {
	let request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.send();
	return request.responseText;
}

function carregarDadosApi() {
	let dados = acessarAPI("https://mock-json-service.glitch.me/");
	let vagas = JSON.parse(dados);
	console.log(vagas);

	divDados = '';
	vagas.forEach(e => {
		divDados += '<div class="card mb-3 p-3">';
		divDados += '<div class="container">';
		divDados += '<h4>';
		divDados += `<b>Vaga ${e.id}</b> - ${e.position}`;
		divDados += '</h4>';
		divDados += `<p>Empresa: ${e.company}</p>`;
		divDados += `<p>Cargo: ${e.position}</p>`;
		divDados += `<p>Descrição: ${e.description}</p>`;
		divDados += `<p>Localidade: ${e.location}</p>`;

		divDados += '</div></div>';
	});
	document.getElementById("dados_vagas").innerHTML = divDados;
}