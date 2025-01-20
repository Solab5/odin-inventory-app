const { Router } = require("express");
const { 
    getAllCategories,
    categoryDetails,
    createCategoryForm,
    addNewCategory,
    editCategoryForm,
    updateCategory,
    deleteCategory
} = require("../controllers/categoriesController");


const categoriesRouter = Router();

categoriesRouter.get("/", getAllCategories);
categoriesRouter.get("/:id", categoryDetails)
categoriesRouter.get("/new", createCategoryForm);
categoriesRouter.post("/", addNewCategory);
categoriesRouter.get("/:id/edit", editCategoryForm);
categoriesRouter.put("/:id", updateCategory);
categoriesRouter.delete("/:id", deleteCategory);

module.exports = categoriesRouter;

