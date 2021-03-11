create table product (
     product_id serial not null,
     ingredients varchar(255),
     name varchar(255) not null,
     price float not null,
     category_id int not null,
     primary key (product_id),
     CONSTRAINT fk_product FOREIGN KEY(category_id) REFERENCES category(category_id)
    );