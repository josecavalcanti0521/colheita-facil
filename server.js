import app from './backend/app.js';

app.listen(process.env.PORT, () => {
    console.log(`Server started on localhost:${process.env.PORT}`);
});
