DROP TABLE IF EXISTS employees;


\echo Creating table.
CREATE TABLE employees (
    id serial PRIMARY KEY,
    name text NOT NULL,
    birthday date NOT NULL,
    salary integer NOT NULL
);