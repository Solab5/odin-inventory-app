const pool = require('./pool');

// Categories
//  id name description created_at updated_at 
exports.getAllCategories = async() => {
    try {
        const { rows } = await pool.query("SELECT * FROM categories");
        return rows;
    } catch (error) {
        console.error("Database error in getAllCategories:", error);
        throw error;
    }
}

exports.getCategoryById = async (id) => {
    try {
        const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1", [id]);
        return rows[0];
    } catch (error) {
        console.error(`Database error in getCategoryById for id ${id}:`, error);
        throw error;
    }
}

exports.addNewCategory = async(name, description) => {
    try {
        await pool.query(
            "INSERT INTO categories (name, description) VALUES ($1, $2)", 
            [name, description]
        );
    } catch (error) {
        console.error("Database error in addNewCategory:", error);
        throw error;
    }
}

exports.updateCategory = async (id, name, description) => {
    try {
        await pool.query(
            "UPDATE categories SET name = $1, description = $2 WHERE id = $3",
            [name, description, id]
        );
    } catch (error) {
        console.error(`Database error in updateCategory for id ${id}:`, error);
        throw error;
    }
}

exports.deleteCategory = async (id) => {
    try {
        await pool.query("DELETE FROM categories WHERE id = $1", [id]);
    } catch (error) {
        console.error(`Database error in deleteCategory for id ${id}:`, error);
        throw error;
    }
}


// Items
// id name description price stock_quantity category_id unit_type created_at         |         updated_at 
exports.getAllItems = async() => {
    try {
        const { rows } = await pool.query("SELECT * FROM items");
        return rows;
    } catch (error) {
        console.error("Database error in getAllItems:", error);
        throw error;
    }
}

exports.getItemById = async (id) => {
    try {
        const { rows } = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
        return rows[0];
    } catch (error) {
        console.error(`Database error in getItemById for id ${id}:`, error);
        throw error;
    }
}

exports.addNewItem = async(name, description, price, stock_quantity, category_id, unit_type) => {
    try {
        await pool.query(
            "INSERT INTO items (name, description, price, stock_quantity, category_id, unit_type) VALUES ($1, $2, $3, $4, $5, $6)", 
            [name, description, price, stock_quantity, category_id, unit_type]
        );
    } catch (error) {
        console.error("Database error in addNewItem:", error);
        throw error;
    }
}

exports.deleteItem = async (id) => {
    try {
        await pool.query("DELETE FROM items WHERE id = $1", [id]);
    } catch (error) {
        console.error(`Database error in deleteItem for id ${id}:`, error);
        throw error;
    }
}

exports.updateItem = async (id, name, description, price, stock_quantity, category_id, unit_type) => {
    try {
        await pool.query(
            "UPDATE items SET name = $1, description = $2, price = $3, stock_quantity = $4, category_id = $5, unit_type = $6 WHERE id = $7",
            [name, description, price, stock_quantity, category_id, unit_type, id]
        );
    } catch (error) {
        console.error(`Database error in updateItem for id ${id}:`, error);
        throw error;
    }
}
