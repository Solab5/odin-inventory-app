const { Router } = require("express");

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.render("index", { title: 'Grocery Inventory'})
})

module.exports = indexRouter;