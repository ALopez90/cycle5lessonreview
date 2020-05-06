-- TODO Create query to create a new user
-- REVIEW This will create a new row of data in the table called 'users'!
-- NOTE The questions marks will be replaced by the properties that were passed in in the 'server.js' file. Each question mark corresponds to each column stated right before, in that exact same order. Make sure that the properties being passed in follow that order as well!
INSERT INTO cycle5.users(`companyName`, `email`, `FName`, `LName`, `password`, `role`) VALUES(?, ?, ?, ?, ?, ?);