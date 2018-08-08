create database burgers_db;

use burgers_db;

create table burgers (
	id int not null auto_increment,
    burger_name varchar (30) not null,
    devoured BOOLEAN DEFAULT false,
    primary key (id)
)

 