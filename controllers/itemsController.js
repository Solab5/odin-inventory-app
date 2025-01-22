const db = require('../db/queries');

exports.getAllItems = async (req, res) => {
    try {
        const items = await db.getAllItems();
        res.render("items/index", { title: "Items", items: items})
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).send("Error loading items");
    }
}

exports.itemDetails = async (req, res) => {
    try {
        const itemId = req.params.id;
        const item = await db.getItemById(itemId)

        if (!item) {
            return res.status(404).send("Item not found")
        }
        res.render("items/show", {item: item});
    } catch (error) {
        console.error("Error fetching item details:", error);
        res.status(500).send("Error loading item details");
    }
}

exports.createItemForm = async (req, res) => {
    try {
        const categories = await db.getAllCategories()
        res.render("items/new", { title: "Items Form", categories: categories });
    } catch (error) {
        console.error("Error loading create item form:", error);
        res.status(500).send("Error loading form");
    }
}

exports.addNewItem = async (req, res) => {
    try {
        const { name, description, price, stock_quantity, category_id, unit_type } = req.body;
        await db.addNewItem(name, description, price, stock_quantity, category_id, unit_type)
        res.redirect("/items");
    } catch (error) {
        console.error("Error adding new item:", error);
        res.status(500).send("Error creating item");
    }
}

exports.editItemForm = async (req, res) => {  
    try {
        const itemId = req.params.id;
        const item = await db.getItemById(itemId);
        
        if (!item) {
            return res.status(404).send("Item not found");
        }

        const categories = await db.getAllCategories();
        res.render("items/form", { title: "Edit Item", item: item, categories: categories })
    } catch (error) {
        console.error("Error loading edit form:", error);
        res.status(500).send("Error loading edit form");
    }
}

exports.updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, stock_quantity, category_id, unit_type } = req.body;
        await db.updateItem(id, name, description, price, stock_quantity, category_id, unit_type);
        res.redirect(`/items/${id}`);
    } catch (error) {
        console.error("Error updating item:", error);
        res.status(500).send("Error updating item");
    }
}

exports.deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        await db.deleteItem(id);
        res.redirect("/items");
    } catch (error) {
        console.error("Error deleting item:", error);
        res.status(500).send("Error deleting item");
    }
}
