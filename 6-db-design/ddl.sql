-- Create Database
CREATE DATABASE "bitly-clone";

CREATE TABLE "Users" (
    id SERIAL PRIMARY KEY,
    email VARCHAR(120) UNIQUE,
    password VARCHAR(120),
    username VARCHAR(120) UNIQUE
);

CREATE Table "Links" (
    id SERIAL PRIMARY KEY,
    actual_link TEXT,
    shortened_link VARCHAR(120),
    created_by INTEGER,
    FOREIGN KEY (created_by) REFERENCES "Users"(id)
);

ALTER TABLE "Links" 
ADD COLUMN visitor_count INTEGER Default 0;