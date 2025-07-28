# 🗺️ React Map
This is a learning project for practicing and understanding core React concepts using components and layout.

## 🎯 Purpose
The goal of this project is to:
* Practice React fundamentals (components, props, state, hooks)
* Learn to organize and structure a small React app
* Explore working with layout and simple interactive elements (like lists, buttons, etc.)
Note: This is not a production-ready map application. It’s focused on learning React.

## 🚀 Getting Started
1. Clone the repository:
```bash
git clone https://github.com/StanislavRiabtsev/react-map.git
cd react-map
```
2. Install dependencies:
```bash
npm install 
```
3. Start the development server:
```bash
npm start
```
The app will run at http://localhost:3000.

## 🧠 Topics Covered
* Functional components
* Passing data with props
* Component composition
* Basic styling

## 📁 Project Structure (project-crud)
```bash
src/
├─ components/
│  ├─ app/
│  │  └─ App.jsx                # Root component that renders the full app layout
│  ├─ app-filter/               # Filter buttons for employee list (e.g. "All", "Rise", "MoreThen")
│  ├─ app-info/                 # Displays general app info (e.g. total employees, prize)
│  ├─ employees-add-form/       # Form component to add a new employee
│  ├─ employees-list/           # List that renders all employee items
│  ├─ employees-list-item/      # Individual employee item (with rize/delete/increase)
│  └─ search-panel/             # Search input field to filter employees by name
│
└─ index.jsx                    # Entry point — renders <App /> into the DOM
```