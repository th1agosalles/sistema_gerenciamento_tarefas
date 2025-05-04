create database banco_de_tarefas;

use banco_de_tarefas;

create table tarefa (
	id integer auto_increment primary key,
    titulo varchar(200) not null,
    descricao text 
);

insert into tarefa values (null, 'dormir', 'deitar');

select * from tarefa;

