DROP DATABASE IF EXISTS  expenseApp;
CREATE DATABASE expenseApp;
USE expenseApp;


DROP TABLE IF EXISTS user;
CREATE TABLE `user` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `hashedPassword` VARCHAR(255) NOT NULL
  );


  
DROP TABLE IF EXISTS category;
CREATE TABLE `category` (
  `id` INT PRIMARY KEY  NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `icon` VARCHAR(255) NOT NULL,
  `user_id` INT NOT NULL,
   CONSTRAINT `user_fk`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE CASCADE
);
  
DROP TABLE IF EXISTS expense;
CREATE TABLE IF NOT EXISTS `expense` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `type`VARCHAR(32) NOT NULL,
  `payment_method` VARCHAR(32) NOT NULL,
  `date` VARCHAR(32) NOT NULL,
  `category_id` INT NOT NULL,
  `amount` DECIMAL(10,2) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  CONSTRAINT `user_fk2`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `category_fk`
    FOREIGN KEY (`category_id`)
    REFERENCES `category` (`id`)
    ON DELETE CASCADE
);
SELECT * FROM user;
SELECT * FROM category;

SELECT e.id,payment_method,amount,date,e.name,description,c.name as category_name,c.icon as category_icon FROM expense As e
JOIN category AS c ON e.category_id=c.id
WHERE e.user_id=1;



