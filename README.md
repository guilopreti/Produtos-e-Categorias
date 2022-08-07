# 🏁 Entrega: Produtos e Categorias

Nessa entrega foi desenvolvido um serviço de back-end responsável por gerenciar produtos e suas categorias.

Nesse repositório contém alguns testes.

Esse serviço utiliza o banco de dados PostgreSQL, com imagens Docker orquestradas em um container utilizando docker-compose.

O arquivo create_tables.sql contem as instruções em SQL para a criação das tabelas.

Foi criado dois bancos de dados, um para o desenvolvimento e um para os testes.

Deploy da API: https://categories-products.herokuapp.com/

## Endpoints do serviço:

POST	/categories	Criação de categorias

GET	/categories	Lista todos os categorias

GET	/categories/<id>	Retorna os dados de uma categoria

PATCH	/categories/<id>	Atualiza os dados de uma categoria

DELETE	/categories/<id>	Deleta categorias do banco

POST	/products	Criação de produtos

GET	/products	Lista todos os produtos

GET	/products/<id>	Retorna os dados de um produto

PATCH	/products/<id>	Atualiza os dados de um produto

DELETE	/products/<id>	Deleta produtos do banco

GET	/products/category/<category_id>	Retorna os dados dos produtos pertencentes a categoria dona do id
