const pool = require('./pool');

// Categories
//  id name description created_at updated_at 
exports.getAllCategories = async() =>   {
    const { rows } = await pool.query("SELECT * FROM categories");
    return rows
}

exports.getCategoryById = async (id) => {
    const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1", [id]);
    return rows[0];
}

exports.addNewCategory = async(name, description) => {
    await pool.query("INSERT INTO categories (name, description) VALUES ($1, $2)", [name, description]);
}

exports.updateCategory = async (id, name, description) => {
    await pool.query(
        "UPDATE categories SET name = $1, description = $2 WHERE id = $3",
        [name, description, id]
    )
}

exports.deleteCategory = async (id) => {
    await pool.query("DELETE FROM categories WHERE id = $1", [id]);
}


// Items
// id name description price stock_quantity category_id unit_type created_at         |         updated_at 
exports.getAllItems = async() =>   {
    const { rows } = await pool.query("SELECT * FROM items");
    return rows
}

exports.getItemById = async (id) => {
    const { rows } = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
    return rows[0];
}

exports.addNewItem = async(name, description, price, stock_quantity, category_id, unit_type) => {
    await pool.query(
        "INSERT INTO items (name, description, price, stock_quantity, category_id, unit_type) VALUES ($1, $2, $3, $4, $5, $6)", 
        [name, description, price, stock_quantity, category_id, unit_type, id]
    );
}

exports.deleteItem = async (id) => {
    await pool.query("DELETE FROM items WHERE id = $1", [id]);
}

exports.updateItem = async (id, name, description, price, stock_quantity, category_id, unit_type) => {
    await pool.query(
        "UPDATE items SET name = $1, description = $2, price = $3, stock_quantity = $4, category_id = $5, unit_type = $6 WHERE id = $7",
        [name, description, price, stock_quantity, category_id, unit_type, id]
    )
}
