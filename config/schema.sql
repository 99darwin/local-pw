CREATE DATABASE IF NOT EXISTS pw;

CREATE TABLE IF NOT EXISTS Pws (
    id INTEGER NOT NULL AUTO_INCREMENT,
    service VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    addtional TEXT,
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (id)
);