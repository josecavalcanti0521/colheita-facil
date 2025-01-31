import app from './src/app.js';
import sequelize from './src/db/connection.js';

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(process.env.PORT, () => {
            console.log(`Server started on localhost:${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(`Unable to connect to the database:, ${error}`);
    });
