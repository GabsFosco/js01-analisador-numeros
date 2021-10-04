# **Analisador de Números**

## **Introdução**

Este repositório foi criado para fins de estudo utilizando a tríade do desenvolvimento front-end: HTML, CSS e Javascript.

## **Para que serve o Analisador de Números?**

Dentre as inúmeras possibilidades, considero que esse sistema tem como função principal analisar números.
Realizando com precisão e velocidade calculos matemáticos como média e somatória.

## **Execução via Dockerfile**
> Como pré-requisito, se faz necessário a instalação do Docker em sua máquina.

### Buildando a imagem:
```
docker build -t analisador-numeros-img .
```
### Após o build acima, execute o comando abaixo para rodar a aplicação na porta 8080 do seu localhost:
```
docker run -d --rm --name analisador-numeros-app -p 8080:80 analisador-numeros-img
```