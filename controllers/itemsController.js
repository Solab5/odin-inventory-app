const db = require('../db/queries');

exports.getAllItems = async (req, res) => {
    const items = await db.getAllItems();
    res.render("items/index", { title: "Items", items: items})
}

exports.itemDetails = async  (req, res) => {
    const itemId = req.params.id;
    const item = await db.getItemById(itemId)

    if (!item) {
        return res.status(404).send("Item not found")
    }
    res.render("items/show", {item: item});
}

exports.createItemForm = (req, res) => {
    res.render("items/form", { title: "Items Form" });
}

exports.addNewItem = async (req, res) => {
    const { name, description, price, stock_quantity, category_id, unit_type } = req.body;
    await db.addNewItem(name, description, price, stock_quantity, category_id, unit_type)
    res.redirect("/items");
}

exports.editItemForm = async (req, res) => {
    const items = await db.getAllitems();
    const itemId = req.params.id;
    const item = items[itemId];
    res.render("items/form", { title: "Edit Item", item: item })
}

exports.updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock_quantity, category_id, unit_type } = req.body;
    await db.updateItem(id, name, description, price, stock_quantity, category_id, unit_type);
    res.redirect("/items");
}

exports.deleteItem = async (req, res) => {
    const { id } = req.params;
    await db.deleteItem(id);
    res.redirect("/items");
}
