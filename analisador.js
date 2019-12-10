let valores = []
let menor = 0
let maior = 0
let soma = 0
let res = document.getElementById('res')
let n = document.getElementById('fnum')

function adicionar() {
	let lista = document.getElementById('flista')
	let item = document.createElement('span')
	let num = Number(n.value)

	if (num > 100 || num < 1) {
		alert("Valor inválido!")
	} else if (valores.indexOf(num) != -1) {
		alert("Este número já foi utilizado!")
	} else {
		soma += num
		res.innerHTML = ''
		valores.push(num)
		if (menor == 0) {
			menor = num
			lista.innerHTML = ''
		}
		if (num > maior) {
			maior = num
		} else if (num < menor) {
			menor = num
		}
		item.innerHTML = num
		lista.appendChild(item)
		if (valores.length % 10 == 0) {
			lista.innerHTML += '<br>'
		}
	}
	n.value = ''
	n.focus()
}

function finalizar() {
	res.innerHTML = ''
	if (valores.length < 2) {
		alert("Adicione pelo menos 2 números!")
	} else {
		res.innerHTML =
			`No total, ${valores.length} números foram inseridos.<br>
			O maior número inserido foi ${maior} e o menor foi ${menor}.<br>
			A soma de todos os valores é igual a ${soma}.<br>
			A média dos valores é igual a ${soma / valores.length}.<br>`
	}
}