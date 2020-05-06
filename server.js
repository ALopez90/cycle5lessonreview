// TODO Create a variable for each library you want to use in this file.
// NOTE This creating variables for each library that was installed. To install the libraries do: 'npm install fs' and 'npm install mysql' in the terminal
// NOTE Fun fact! If you need to create multiple variables, you simply need to state 'var' once and seperate each variable with a comma (shown below). Jordan is wrong, I am right 😤
var mysql = require('mysql'),
    fs = require('fs');

// NOTE Jordan wanted to include the "proper way" of making variables
var mysql = require('mysql');
var fs = require('fs');

// TODO Change the the properties to what you need to have. Link to the documentation: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-nodejs.rds.html#nodejs-rds-create
// NOTE This is the information to connect to your AWS instance
var connection = mysql.createConnection({
    host: "hostname",
    user: "username",
    password: "password",
    port: 0000
});

// TODO create a user object to test the function
var user = {
    companyName: 'dummydata',
    email: 'dummydata',
    FName: 'dummydata',
    // NOTE the name of the property does NOT need to match the column name
    LastName: 'dummydata',
    Password: 'password',
    Role: 'dummydata'
}

// TODO Create function for creating a new user
// NOTE The user object created above is being passed in as a parameter
function createUser(user) {

    // REVIEW This will connect to the AWS instance you created above ('var connection = ...'). If the connection fails, then it would return the errors it encountered and would not continue with the rest of the function.
    connection.connect(function (err) {
        if (err) {
            console.error('Database connection failed: ' + err.stack);
            return;
        }

        // TODO Connect to and execute a specific MySQL file
        // NOTE In this case, we're connecting to a MySQL file that inserts data into the 'user' table
        // REVIEW Quick overview of this line of code: You're creating a connection to the MySQL file ('./sql/createUser.sql'), converting it into a string so that 'readFileSync' can read it, and passing in the properties from the user object (user.companyName, user.email, user.FName, user.LastName, user.Role).
        // Those properties will replace the question marks (?) in the SQL file (createUser.sql).
        // NOTE Make sure that the properties being passed in are in order of the columns listed in the SQL file.
        // REVIEW (continued) After the properties, it has the logic to get the rows and any errors, if there are errors, it'll post it, otherwise it'll continue to the console logs.
        connection.query(fs.readFileSync('./sql/createUser.sql').toString(), [user.companyName, user.email, user.FName, user.LastName, user.Password, user.Role], (err, rows) => {
            if (err) throw err;

            console.log('Data received from Db:');
            console.log(rows);
        })

        console.log('Connected to database.');
    });
}
// TODO Make sure to add this at the end to actually execute the function just created above.
createUser(user);

// TODO Commented out this to not end the connection
// connection.end();