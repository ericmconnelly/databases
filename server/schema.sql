CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  username varchar(255),
  created_At TIMESTAMP,
  PRIMARY KEY(id)

);

CREATE TABLE rooms (
  id INT(11) NOT NULL AUTO_INCREMENT,
  roomName varchar(255),
  created_At TIMESTAMP,
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INT(11) NOT NULL AUTO_INCREMENT,
  user_id INT(11),
  room_id INT(11),
  username VARCHAR(255),
  roomname VARCHAR(255),
  text TEXT,
  created_at TIMESTAMP,
  PRIMARY KEY(id)
);