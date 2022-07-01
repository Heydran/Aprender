create table Categoria(
    cod_categoria primary key int auto_increment,
    nom_categoria varchar(20) not null
);


create table Produto (
cod_produto primary key int auto_increment,
desc_produto varchar(20) not null,
pre_produto float not null,
cod_categoria int not null,
foreign key cod_categoria references Categoria(cod_categoria)
);

create table Itens(
    cod_item primary key int auto_increment,
    nome_item varchar(20) not null,
    qnt_itens int not null
    cod_produto int not null,
    foreign key cod_produto references Produto(cod_produto)
);


