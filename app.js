const express = require("express");
const indexRouter = require("./routes/indexRouter");
const itemsRouter = require("./routes/itemsRouter");
const categoriesRouter = require('./routes/categoriesRouter')
const app = express();
const PORT = 3000



app.use('/', indexRouter);
app.use('/category', categoriesRouter);
app.use('/item', itemsRouter);

app.listen(PORT, console.log(`My app running on port: ${PORT}`));