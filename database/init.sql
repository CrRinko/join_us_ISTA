create database ISTA default charset utf8 collate utf8_general_ci;
use ISTA;
create table Application(
	uuid bigint unsigned primary key,
	name nchar(15) not null,
	stuid char(10) not null,
	class nchar(10),
	tel char(12) not null,
	department tinyint not null
)default CHARSET=utf8;
create user 'ista'@'localhost' identified by 'join_ista';
grant all privileges on ISTA.* to ista@localhost;
flush privileges;

-- 解决中文乱码问题：需要将Apache2的默认字符集，mysqld的默认字符集设置为utf8