DROP TABLE IF EXISTS test;

CREATE TABLE  watches  (
   id SERIAL PRIMARY KEY, 
   name TEXT NOT NULL,
   description TEXT,
   rating NUMERIC
   CHECK (rating >= 0 AND rating <= 5),
   image TEXT,
   featured BOOLEAN,
   price INTEGER
);