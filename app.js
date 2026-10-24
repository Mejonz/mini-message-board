import express from 'express';
import path from 'node:path';
// import messageRouter from './routes/messageRouter.js';
import indexRouter from './routes/indexRouter.js';

const app = express();
const __dirname = import.meta.dirname;
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true}));

//routes
app.use('/', indexRouter);
// app.use('/new', messageRouter);



//server
const PORT = 3000;
app.listen(PORT, (error) => {

    if (error) {
        throw error;
    }
    console.log(`server listening on ${PORT}`);
});