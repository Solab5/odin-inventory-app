const db = require('../db/queries');
const { get } = require('../routes/indexRouter');

exports.getAllCategories = async (req, res) => {
    const categories = await db.getAllCategories();
    res.render("index", { title: "categories", categories: categories})
}

exports.categoryDetails = async  (req, res) => {
    const categories = await db.getAllCategories();
    const categoryId = req.params.id;
    const category = categories[categoryId];
    res.render("categoryDetails", {category: category});
}

exports.createCategoryForm = (req, res) => {
    res.render("categoryForm", { title: "Create Category"});
}

 
exports.addNewCategory = async (req, res) => {
    const { 
        name, 
        description, 
        price, 
        stock_quantity, 
        category_id, 
        unit_type
    }   = req.body;
    await db.addNewCategory(name, description, price, stock_quantity, category_id, unit_type)
    res.redirect("/")
}
