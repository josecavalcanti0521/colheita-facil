import app from './backend/app.js';
import sequelize from './backend/config/connection.js';

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
