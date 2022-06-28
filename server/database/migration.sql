CREATE DATABASE target_db;

\c target_db;

CREATE TABLE target_item (
    id SERIAL PRIMARY KEY,
    item text
);