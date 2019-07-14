function resultado(id) {

	var media;

	if (id == 'aln01' || id == 'aln02' || id == 'aln03' || id == 'aln04') {
		media = 27.5;
	}	else if (id == 'aln05' || id == 'aln06' || id == 'aln07' || id == 'aln08' || id == 'aln09') {
			media = 31.8;
		}

	if (id == 'aln01') {
		var linha = document.getElementById("aln01");
		var coluna = linha.getElementsByTagName("td");
		var nota = coluna[3].firstChild.nodeValue;
		var nome = coluna[0].firstChild.nodeValue;
		var nivel;
		var diferenca = nota - media;
		diferenca = parseFloat(diferenca.toFixed(2));
		if (nota >= media) {
			nivel = 'acima';
		}	else {
				nivel = 'abaixo';
			}
		
		alert(nome + " fez " + nota + " pontos, portanto está " + nivel + " da média de Web que é de " + media + " pontos. >>> " + nota + " - " + media + " = " + diferenca);
	}	else if (id == 'aln02') {
			var linha = document.getElementById("aln02");
			var coluna = linha.getElementsByTagName("td");
			var nota = coluna[3].firstChild.nodeValue;
			var nome = coluna[0].firstChild.nodeValue;
			var nivel;
			var diferenca = nota - media;
			diferenca = parseFloat(diferenca.toFixed(2));
			if (nota >= media) {
				nivel = 'acima';
			}	else {
					nivel = 'abaixo';
				}
			
			alert(nome + " fez " + nota + " pontos, portanto está " + nivel + " da média de Web que é de " + media + " pontos. >>> " + nota + " - " + media + " = " + diferenca);
		}	else if (id == 'aln03') {
				var linha = document.getElementById("aln03");
				var coluna = linha.getElementsByTagName("td");
				var nota = coluna[3].firstChild.nodeValue;
				var nome = coluna[0].firstChild.nodeValue;
				var nivel;
				var diferenca = nota - media;
				diferenca = parseFloat(diferenca.toFixed(2));
				if (nota >= media) {
					nivel = 'acima';
				}	else {
						nivel = 'abaixo';
					}
				
				alert(nome + " fez " + nota + " pontos, portanto está " + nivel + " da média de Web que é de " + media + " pontos. >>> " + nota + " - " + media + " = " + diferenca);
			}	else if (id == 'aln04') {
					var linha = document.getElementById("aln04");
					var coluna = linha.getElementsByTagName("td");
					var nota = coluna[3].firstChild.nodeValue;
					var nome = coluna[0].firstChild.nodeValue;
					var media = 27.5;
					var diferenca = nota - media;
					diferenca = parseFloat(diferenca.toFixed(2));
					if (nota >= media) {
						nivel = 'acima';
					}	else {
							nivel = 'abaixo';
						}
					
					alert(nome + " fez " + nota + " pontos, portanto está " + nivel + " da média de Web que é de " + media + " pontos. >>> " + nota + " - " + media + " = " + diferenca);
				}	else if (id == 'aln05') {
						var linha = document.getElementById("aln05");
						var coluna = linha.getElementsByTagName("td");
						var nota = coluna[3].firstChild.nodeValue;
						var nome = coluna[0].firstChild.nodeValue;
						var nivel;
						var diferenca = nota - media;
						diferenca = parseFloat(diferenca.toFixed(2));
						if (nota >= media) {
							nivel = 'acima';
						}	else {
								nivel = 'abaixo';
							}
						
						alert(nome + " fez " + nota + " pontos, portanto está " + nivel + " da média de Lógica da Programação que é de " + media + " pontos. >>> " + nota + " - " + media + " = " + diferenca);
					}	else if (id == 'aln06') {
							var linha = document.getElementById("aln06");
							var coluna = linha.getElementsByTagName("td");
							var nota = coluna[2].firstChild.nodeValue;
							var nome = coluna[0].firstChild.nodeValue;
							var nivel;
							var diferenca = nota - media;
							diferenca = parseFloat(diferenca.toFixed(2));
							if (nota >= media) {
								nivel = 'acima';
							}	else {
									nivel = 'abaixo';
								}
							
							alert(nome + " fez " + nota + " pontos, portanto está " + nivel + " da média de Lógica da Programação que é de " + media + " pontos. >>> " + nota + " - " + media + " = " + diferenca);
						}	else if (id == 'aln07') {
								var linha = document.getElementById("aln07");
								var coluna = linha.getElementsByTagName("td");
								var nota = coluna[3].firstChild.nodeValue;
								var nome = coluna[0].firstChild.nodeValue;
								var nivel;
								var diferenca = nota - media;
								diferenca = parseFloat(diferenca.toFixed(2));
								if (nota >= media) {
									nivel = 'acima';
								}	else {
										nivel = 'abaixo';
									}
								
								alert(nome + " fez " + nota + " pontos, portanto está " + nivel + " da média de Lógica da Programação que é de " + media + " pontos. >>> " + nota + " - " + media + " = " + diferenca);
							}	else if (id == 'aln08') {
									var linha = document.getElementById("aln08");
									var coluna = linha.getElementsByTagName("td");
									var nota = coluna[2].firstChild.nodeValue;
									var nome = coluna[0].firstChild.nodeValue;
									var nivel;
									var diferenca = nota - media;
									diferenca = parseFloat(diferenca.toFixed(2));
									if (nota >= media) {
										nivel = 'acima';
									}	else {
											nivel = 'abaixo';
										}
									
									alert(nome + " fez " + nota + " pontos, portanto está " + nivel + " da média de Lógica da Programação que é de " + media + " pontos. >>> " + nota + " - " + media + " = " + diferenca);
								}	else if (id == 'aln09') {
										var linha = document.getElementById("aln09");
										var coluna = linha.getElementsByTagName("td");
										var nota = coluna[3].firstChild.nodeValue;
										var nome = coluna[0].firstChild.nodeValue;
										var nivel;
										var diferenca = nota - media;
										diferenca = parseFloat(diferenca.toFixed(2));
										if (nota >= media) {
											nivel = 'acima';
										}	else {
												nivel = 'abaixo';
											}
										
										alert(nome + " fez " + nota + " pontos, portanto está " + nivel + " da média de Lógica da Programação que é de " + media + " pontos. >>> " + nota + " - " + media + " = " + diferenca);
									}



}