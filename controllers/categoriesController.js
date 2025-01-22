const db = require('../db/queries');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await db.getAllCategories();
        res.render("categories/index", { title: "categories", categories: categories})
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).send("Error loading categories");
    }
}

exports.categoryDetails = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await db.getCategoryById(categoryId)
        if (!category) {
            return res.status(404).send("Category not found")
        }
        res.render("categories/show", {category: category});
    } catch (error) {
        console.error("Error fetching category details:", error);
        res.status(500).send("Error loading category details");
    }
}

exports.createCategoryForm = (req, res) => {
    try {
        res.render("categories/new", { title: "Create Category" });
    } catch (error) {
        console.error("Error loading create form:", error);
        res.status(500).send("Error loading form");
    }
}

exports.addNewCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        await db.addNewCategory(name, description)
        res.redirect("/categories")
    } catch (error) {
        console.error("Error adding new category:", error);
        res.status(500).send("Error creating category");
    }
}

exports.editCategoryForm = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await db.getCategoryById(categoryId);

        if (!category) {
            return res.status(404).send("Category not found");
        }

        res.render("categories/form", { title: "Edit Category", category: category })
    } catch (error) {
        console.error("Error loading edit form:", error);
        res.status(500).send("Error loading edit form");
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        await db.updateCategory(id, name, description);
        res.redirect(`/categories/${id}`);
    } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).send("Error updating category");
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await db.deleteCategory(id);
        res.redirect("/categories");
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).send("Error deleting category");
    }
}