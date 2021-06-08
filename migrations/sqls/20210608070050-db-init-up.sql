/* Replace with your SQL commands */

CREATE TABLE IF NOT EXISTS `game` (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(160) NOT NULL,
    imageUrl VARCHAR(255),
    rating INT(1),
    genre VARCHAR(160), 
    PRIMARY KEY (id)
);