-- Create Database
CREATE DATABASE "sistem-pengurusan-elaun";
-- Enable PostGIS Extension
CREATE EXTENSION postgis;

-- table ahli
CREATE TABLE "ahli" (
    id BIGSERIAL PRIMARY KEY,
    nama VARCHAR(120),
    alamat VARCHAR(120),
    no_tel VARCHAR(120),
    poskod VARCHAR(120),
    negeri VARCHAR(120),
    email VARCHAR(120),
    password VARCHAR(120),
    access_point VARCHAR(120),
    status VARCHAR(120)
);
-- table waris
CREATE TABLE "waris"(
    id BIGSERIAL PRIMARY KEY,
    ahli_id BIGINT,
    nama VARCHAR(120),
    no_tel BIGINT,
    FOREIGN KEY (id) REFERENCES "ahli"(id)
);
-- table kehadiran
CREATE TABLE "kehadiran"(
    id BIGSERIAL PRIMARY KEY,
    masa_masuk TIME,
    masa_keluar TIME,
    tarikh DATE,
    ahli_id BIGINT,
    FOREIGN KEY (id) REFERENCES "ahli"(id)
);
-- table bayaran_elaun
CREATE TABLE "bayaran_elaun"(
    id BIGSERIAL PRIMARY KEY,
    ahli_id BIGINT,
    nilai DECIMAL(10,2),
    kadar_elaun_id BIGINT,
    kehadiran_id BIGINT,
    masa TIME,
    tarikh DATE,
    kaedah_pembayaran VARCHAR(120),
    status VARCHAR(120),
    nota VARCHAR(120),
    FOREIGN KEY (id) REFERENCES "ahli"(id)
);

--table kadar_elaun
CREATE TABLE "kadar_elaun"(
    id BIGSERIAL PRIMARY KEY,
    nama BIGINT,
    kadar_sejam DECIMAL(10,2)
);