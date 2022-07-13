CREATE TABLE Cliente(
    cod_cliente SERIAL PRIMARY KEY,
    nom_cliente VARCHAR(30)
);

CREATE TABLE Carro(
    cod_carro SERIAL PRIMARY KEY,
    modelo_carro VARCHAR(30)
);

CREATE TABLE Possui(
    cod_cliente INTEGER,
    cod_carro INTEGER,
    FOREIGN KEY (cod_cliente) REFERENCES Cliente(cod_cliente),
    FOREIGN KEY (cod_carro) REFERENCES Carro(cod_Carro)
);

INSERT INTO Cliente VALUES (1,'André');
INSERT INTO Cliente VALUES (2,'William');
INSERT INTO Cliente VALUES (3,'FULADO');
INSERT INTO Cliente VALUES (4,'SICLANO');
INSERT INTO Cliente VALUES (5,'BELTRANO');


INSERT INTO Carro VALUES (1,'Lancer Evolution');
INSERT INTO Carro VALUES (2,'Lamburguine Gallardo');
INSERT INTO Carro VALUES (3,'Dodge Mustang');
INSERT INTO Carro VALUES (4,'Camaro 2022');
INSERT INTO Carro VALUES (5,'Camaro 76');

INSERT INTO Possui VALUES (1,1);
INSERT INTO Possui VALUES (1,3);
INSERT INTO Possui VALUES (1,5);
INSERT INTO Possui VALUES (2,2);
INSERT INTO Possui VALUES (2,3);
INSERT INTO Possui VALUES (2,4);

SELECT * FROM Carro;
SELECT * FROM Cliente;
SELECT * FROM Possui;

SELECT nom_cliente, modelo_carro FROM Cliente as cl 
INNER JOIN Possui as po ON cl.cod_cliente = po.cod_cliente 
INNER JOIN Carro as ca ON ca.cod_carro = po.cod_carro;


SELECT cl.nom_cliente FROM Cliente as cl;


