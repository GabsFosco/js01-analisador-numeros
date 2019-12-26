let valores = []
let res = document.querySelector('#res')
let n = document.querySelector('#fnum')
let tempo1
let tempo2

n.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		event.preventDefault()
		document.querySelector('#adicionar').click()
	}
})

function adicionar() {
	let lista = document.querySelector('#flista')
	let item = document.createElement('span')
	let num = Number(n.value)
	
	if (n.value == '') {
		geraErro(0)
	} else if (num > 100 || num < 1) {
		geraErro(1)
	} else if (valores.indexOf(num) != -1) {
		geraErro(2)
	} else {
		res.innerHTML = ''
		valores.push(num)
		if (valores.length == 1) {
			lista.innerHTML = ''
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
		geraErro(3)
	} else {
		let soma = 0
		for (let total of valores) {
			soma += total
		}
		valores.sort((a, b) => a - b)
		res.innerHTML =
			`No total, ${valores.length} números foram inseridos.<br>
			O maior número inserido foi ${valores[valores.length-1]} e o menor foi ${valores[0]}.<br>
			A soma de todos os valores é igual a ${soma}.<br>
			A média dos valores é igual a ${soma / valores.length}.<br>`
	}
}

function geraErro(erro) {
	let msg = document.querySelector('#aviso-erro')
	msg.style.opacity ='1'
	switch(erro) {
		case 0:
			msg.innerText='Digite um número!'
			break
		case 1:
			msg.innerText='O número digitado deve estar entre 1 e 100!'
			break
		case 2:
			msg.innerText='Este número já foi utilizado!'
			break
		case 3:
			msg.innerText='Adicione pelo menos dois números!'
			break
	}
	clearTimeout(tempo1)
	clearTimeout(tempo2)
	tempo1 = setTimeout(function() {
		msg.style.opacity ='0'
		tempo2 = setTimeout(function() {
			msg.innerText=''
		}, 600)
	}, 2800)
}