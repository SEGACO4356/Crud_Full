create database apires;

CREATE TABLE USERS (
    ID SERIAL PRIMARY KEY,
    USERNAME VARCHAR(50),
    USEREMAIL TEXT
); 

INSERT INTO USERS (USERNAME, USEREMAIL) 
VALUES            ('Sebas', 'sebas@gmail.com'),
                  ('Kevin', 'kevin@gmail.com'),
                  ('Julio', 'julio@gmail.com'),
                  ('Brayan', 'brayan@gmail.com'),
                  ('Andrés', 'andres@gmail.com'),
                  ('Erika', 'erika@gmail.com'),
                  ('Lina', 'lina@gmail.com'),
                  ('Jorge', 'jorge@gmail.com'),
                  ('Juan', 'juan@gmail.com'),
                  ('Pablo', 'pablo@gmail.com'); 


SELECT * FROM USERS;
