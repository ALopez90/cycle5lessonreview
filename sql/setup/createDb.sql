-- REVIEW One of the biggest differences between MS SQL SERVER and MySQL is that each query you create needs to end with a semi-colon (;) so that it'll execute each one individually. Also, use the back-tilt (``) instead of a single quote (''). To run a SQL file manually, simply right-click on an empty space in the file and select 'Run MySQL Query'.
-- TODO Create a new Database
CREATE DATABASE cycle5;

-- TODO Create tables
-- REVIEW When creating the table columns, here are some things to know:
-- `columnName` DATATYPE(MAX_NUMBER_OF_CHARACTERS)
-- INT: integer
-- VARCHAR vs CHAR: CHAR is a fixed length, while VARCHAR is a variable length. If the data beign stored will always be the same length no matter what, it's best to use CHAR, otherwise use VARCHAR.
-- Example: The value being passed is 'abc'. That's 3 characters long. If you used CHAR(5), it would store the data as 'abc  ' (5 characters long), because that's the fixed length stated. This would use about 5 bytes of storage. If you used VARCHAR(5), it would store the data as 'abc' (3 characters long), because 3 is still within the 5 character limit. This would use about 3 bytes of storage. Hopefully this gives you a better idea as to why VARCHAR would be preferred to be used here instead of CHAR :D
-- AUTO_INCREMENT: this is used on ONE column (typically an INT). Will automatically create data for said column in increments of 1 (first row would have '1', second would have '2', etc.)
-- PRIMARY KEY(nameOfColumn): declares the primary key of the table. MAKE SURE TO INCLUDE THIS
-- NOTE This is just an EXAMPLE of the tables you might use, please adjust as needed and/or create more tables!
CREATE TABLE `cycle5`.`users`(`id` INT(9) AUTO_INCREMENT, `companyName` VARCHAR(50), `email` VARCHAR(50), `FName` VARCHAR(20), `LName` VARCHAR(20), `password` VARCHAR(20), `role` VARCHAR(20), PRIMARY KEY(id));

CREATE TABLE `cycle5`.`timeLog`(`timeId` INT(9)AUTO_INCREMENT, `id` INT(9), `FName` VARCHAR(20), `LName` VARCHAR(20), `timestamp` TIMESTAMP, `hours` FLOAT, PRIMARY KEY(timeId));