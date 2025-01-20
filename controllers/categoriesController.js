const db = require('../db/queries');

exports.getAllCategories = async (req, res) => {
    const categories = await db.getAllCategories();
    res.render("categories/index", { title: "categories", categories: categories})
}

exports.categoryDetails = async  (req, res) => {
    const categoryId = req.params.id;
    const category = await db.getCategoryById(categoryId)
    if (!category) {
        res.status(404).send("Category not found")
    }
    res.render("categories/show", {category: category});
}

exports.createCategoryForm = (req, res) => {
    res.render("categories/form", { title: "Create Category"});
}

 
exports.addNewCategory = async (req, res) => {
    const { 
        name, 
        description, 
    }   = req.body;
    await db.addNewCategory(name, description )
    res.redirect("/categories")
}

exports.editCategoryForm = async (req, res) => {
    categoryId = req.params.id;
    const category = await db.getCategoryById(categoryId);

    if (!category) {
        return res.status(404).send("Category not found");
    }

    res.render("categories/form", { title: "Edit Category", category: category })
}

exports.updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    await db.updateCategory(id, name, description);
    res.redirect("/categories");
}

exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    await db.deleteCategory(id);
    res.redirect("/categories");
}