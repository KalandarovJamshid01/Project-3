Drop Table IF EXISTS todo_list;

CREATE TABLE todo_list(
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT FALSE
);

insert into todo_list (description) values ("buy milk")