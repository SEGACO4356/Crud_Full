create database apires;

CREATE TABLE USERS (
    ID SERIAL PRIMARY KEY,
    USERNAME VARCHAR(50),
    USEREMAIL TEXT
); 

INSERT INTO USERS (USERNAME, USEREMAIL) 