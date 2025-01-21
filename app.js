const express = require("express");
const methodOverride = require('method-override');

const indexRouter = require("./routes/indexRouter");
const itemsRouter = require("./routes/itemsRouter");
const categoriesRouter = require('./routes/categoriesRouter')
const app = express();
const PORT = 3000

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/', indexRouter);
app.use('/categories', categoriesRouter);
app.use('/items', itemsRouter);


app.listen(PORT, console.log(`My app running on port: ${PORT}`));