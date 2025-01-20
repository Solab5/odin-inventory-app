const { Router } = require("express");
const { getAllItems, itemDetails, createItemForm, addNewItem, editItemForm, updateItem, deleteItem } = require("../controllers/itemsController")
const itemsRouter = Router();

itemsRouter.get("/", getAllItems);
itemsRouter.get("/:id", itemDetails);
itemsRouter.get("/new", createItemForm);
itemsRouter.post("/", addNewItem);
itemsRouter.get("/:id/edit", editItemForm);
itemsRouter.put("/:id", updateItem);
itemsRouter.delete("/:id", deleteItem);

module.exports = itemsRouter;