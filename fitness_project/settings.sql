-- settings.sql
CREATE DATABASE fitness;
CREATE USER fitness WITH PASSWORD 'fitness';
GRANT ALL PRIVILEGES ON DATABASE fitness TO fitness;