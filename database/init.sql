create database ISTA;
use ISTA;
create table Application(
	uuid bigint unsigned primary key,
	name nchar(15) not null,
	stuid char(10) not null,
	class nchar(10),
	tel char(12) not null,
	department tinyint not null
);
create user 'ista'@'localhost' identified by 'join_ista';
grant all privileges on ISTA.* to ista@localhost;
flush privileges;