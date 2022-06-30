
use Restaurante_E;
drop table Orden;
drop table Plato;
drop table Pedido;
drop table cliente;
drop table Restaurante;

#Tabla cliente

create table cliente(
Clave_Cliente int,
pass_Cliente varchar(100),
Nombre_Cliente varchar(100),
Telefono_Cliente bigint,
Direccion_Cliente varchar(200),
Correo_Cliente varchar(50),
Medio_Pago varchar(200),
constraint pk_cc primary key(Clave_Cliente)
);


#Tabla Restaurante
create table Restaurante(
Clave_Restaurante int NOT NULL AUTO_INCREMENT,
Nombre_Restaurante varchar(100),
Telefono_Restaurante bigint,
Direccion_Restaurante varchar(200),
Nit_Restaurante varchar(50),
Descripcion_Restaurante varchar(500),
Pagos_Restaurante varchar(500),
Horario_Restaurante varchar(200),
constraint pk_cr primary key(Clave_Restaurante)

);

/*-------------comentario para mostar como meter valores cuando la Pk es autoincrementada -----------
insert into Restaurante (Nombre_Restaurante,Telefono_Restaurante,Direccion_Restaurante,Nit_Restaurante,Descripcion_Restaurante,Pagos_Restaurante,Horario_Restaurante) values 
('restaurante1',6014140001,'carrera1','nit1','descripcion1','infopagos1','7:00am - 5:00pm'),
('restaurante2',6014140002,'carrera2','nit2','descripcion2','infopagos2','6:00am - 4:00pm'),
('restaurante3',6014140003,'carrera3','nit3','descripcion3','infopagos3','7:00am - 5:00pm'),
se ponen todos los datos exepto la pk ya que es automatica
*/

/*Tabla Pedido
(con dos claves foraneas)*/
create table Pedido(
Clave_Pedido int NOT NULL AUTO_INCREMENT,
Platos_Pedido int,
Precio_Pedido float,
Comensales_Pedido int,
ValorReserva_Pedido float,
Clave_ClienteFK1 int,
Clave_RestauranteFK1 int,
constraint pk_c primary key(Clave_Pedido),
constraint fk_fclienteFK1 foreign key(Clave_ClienteFK1) references cliente(Clave_Cliente),
constraint fk_frestauranteFK1 foreign key(Clave_RestauranteFK1) references Restaurante(Clave_Restaurante)
);


#Tabla Plato
create table Plato(
Clave_Plato int NOT NULL AUTO_INCREMENT,
Nombre_Plato varchar(500),
Descripcion_Plato varchar(500),
Precio_Plato float,
Clave_RestauranteFK2 int,
constraint pk_cp primary key(Clave_Plato),
constraint fk_frestauranteFK2 foreign key(Clave_RestauranteFK2) references Restaurante(Clave_Restaurante)
);



#Tabla orden pedido-plato
create table Orden(
Clave_PedidoFK1 int,
Clave_PlatoFK1 int,
constraint fk_fpedidoFK1 foreign key(Clave_PedidoFK1) references Pedido(Clave_Pedido),
constraint fk_fplatoFK1 foreign key(Clave_PlatoFK1) references Plato(Clave_Plato)
);





#-----------------------Vistas---------------------------

#¿como llamar las vistas? asi: select * from Vista_Restaurante

#vista_Restaurante
create view Vista_Restaurante
as
select Nombre_Restaurante, Telefono_Restaurante, Direccion_Restaurante from Restaurante;

#vista_DetallePlato
#Nombre del plato, descripcion, precio y restaurante dodne venden ese plato
create view Vista_DetallePlato
as
select Nombre_Restaurante, Nombre_Plato, Descripcion_Plato, Precio_Plato
from Restaurante inner join Pedido on Pedido.Clave_RestauranteFK1=Restaurante.Clave_Restaurante
inner join Orden on Orden.Clave_PedidoFK1=Pedido.Clave_Pedido
inner join Plato on Plato.Clave_Plato=Orden.Clave_PlatoFK1;

#vista_Reserva
#nombre restaurante, valor reserva, nombre cliente, id, telf , y platos de la orden
create view Vista_Reserva
as
Select Nombre_Restaurante, ValorReserva_Pedido, Nombre_Cliente, Clave_Cliente, Telefono_Cliente, Nombre_Plato
from Restaurante inner join Pedido on Pedido.Clave_RestauranteFK1=Restaurante.Clave_Restaurante
inner join cliente on cliente.Clave_Cliente=Pedido.Clave_ClienteFK1
inner join Orden on Orden.Clave_PedidoFK1=Pedido.Clave_Pedido
inner join Plato on Plato.Clave_Plato=Orden.Clave_PlatoFK1
where Clave_PedidoFK1=1


