DROP DATABASE chat;

CREATE DATABASE IF NOT EXISTS chat;

USE chat;

-- CREATE TABLE messages (
--    Describe your table here.
-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
-- 
-- ---

-- DROP TABLE IF EXISTS users;s
    
CREATE TABLE IF NOT EXISTS users (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  username MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ALTER TABLE users ADD UNIQUE (username);
-- ---
-- Table 'messages'
-- 
-- ---

-- DROP TABLE IF EXISTS messages;
    
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  msg MEDIUMTEXT NULL DEFAULT NULL,
  roomname MEDIUMTEXT NULL DEFAULT NULL,
  userID INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE messages ADD FOREIGN KEY (userID) REFERENCES users (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE users ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE messages ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO users (id,username) VALUES
-- ('','');
-- INSERT INTO messages (id,msg,userID) VALUES
-- ('','','');