create table tb_category (id  bigserial not null, created_at TIMESTAMP WITHOUT TIME ZONE, name varchar(255), updated_at TIMESTAMP WITHOUT TIME ZONE, primary key (id));
create table tb_movie (id bigint generated by default as identity, image varchar(255), sinopse TEXT, title varchar(255), year integer, primary key (id));

create table tb_movie_category (movie_id int8 not null, category_id int8 not null, primary key (movie_id, category_id));

alter table tb_movie_category add constraint FK5r4sbavb4nkd9xpl0f095qs2a foreign key (category_id) references tb_category;
alter table tb_movie_category add constraint FK5r4sbavb4nkd9xpl0f095qs2a foreign key (movie_id) references tb_movie;

