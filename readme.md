# Inventory Management System

A web-based inventory management system built with Node.js, Express, and EJS templating engine. This application allows users to manage items and categories in their inventory with a clean, responsive interface.

## Features

- **Items Management**
  - Create, read, update, and delete inventory items
  - Track item details including name, description, price, and stock quantity
  - Assign items to categories
  - Specify unit types for items

- **Categories Management**
  - Create and manage product categories
  - View items within each category
  - Organize inventory efficiently

- **User Interface**
  - Clean and responsive design
  - Font Awesome icons for better visual feedback
  - Mobile-friendly layout
  - Intuitive navigation

## Technologies Used

- **Backend**
  - Node.js
  - Express.js
  - Postgres (Database)
  - EJS (Templating)

- **Frontend**
  - HTML5
  - CSS3
  - Font Awesome Icons
  - Custom responsive design

## Installation

1. Clone the repository:

git clone [repository-url]

2. Install dependencies:
```bash
npm install
```

3. Initialize the database:
```bash
npm run init-db
```

4. Start the server:
```bash
npm start
```

5. Visit `http://localhost:3000` in your browser

## Project Structure

```
inventory-system/
├── public/
│   └── styles/
│       └── main.css
├── views/
│   ├── categories/
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── show.ejs
│   │   └── form.ejs
│   ├── items/
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── show.ejs
│   │   └── form.ejs
│   ├── header.ejs
│   ├── footer.ejs
│   └── index.ejs
├── app.js
├── database.js
└── package.json
```

## Database Schema

### Items Table
- id (INTEGER PRIMARY KEY)
- name (TEXT)
- description (TEXT)
- price (REAL)
- stock_quantity (INTEGER)
- unit_type (TEXT)
- category_id (INTEGER FOREIGN KEY)

### Categories Table
- id (INTEGER PRIMARY KEY)
- name (TEXT)
- description (TEXT)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

