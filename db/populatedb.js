#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
-- Create Categories table
  CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  -- Create Items table
  CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER NOT NULL DEFAULT 0,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
    unit_type VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  -- Insert some sample categories
  INSERT INTO categories (name, description)
  VALUES 
    ('Produce', 'Fresh fruits and vegetables'),
    ('Dairy', 'Milk, cheese, and other dairy products'),
    ('Beverages', 'Drinks and refreshments'),
    ('Bakery', 'Fresh bread and baked goods');

  -- Insert some sample items
  INSERT INTO items (name, description, price, stock_quantity, category_id, unit_type)
  VALUES 
    ('Banana', 'Fresh yellow bananas', 0.99, 100, 1, 'kg'),
    ('Milk', 'Whole milk', 3.99, 50, 2, 'liter'),
    ('Bread', 'Freshly baked white bread', 2.99, 30, 4, 'unit'),
    ('Orange Juice', '100% pure orange juice', 4.99, 40, 3, 'liter');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://rtv-lpt-127:rtv-lpt-127@localhost:5432/grocery_db",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
