CREATE TABLE Categoria(
    cod_categoria SERIAL PRIMARY KEY,
    nom_categoria VARCHAR(20) NOT NULL
);


CREATE TABLE Produto (
	cod_produto PRIMARY KEY INTEGER auto_increment,
	desc_produto VARCHAR(20) NOT NULL,
	pre_produto FLOAT NOT NULL,
	cod_categoria INTEGER NOT NULL,
	FOREIGN KEY cod_categoria REFERENCES Categoria(cod_categoria)
);

CREATE TABLE Itens(
    cod_item SERIAL PRIMARY KEY,
    nome_item VARCHAR(20) NOT NULL,
    qnt_itens INTEGER NOT NULL,
    cod_produto INTEGER NOT NULL,
    FOREIGN KEY cod_produto REFERENCES Produto(cod_produto)
);


SELECT desc_produto from Produto as pr INNER JOIN Categoria as ca ON ca.cod_categoria == pr.cod_categoria