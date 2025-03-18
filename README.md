This repository contains React.js projects completed as part of The Complete Web Development Bootcamp by Angela Yu.

1. Dynamic Greeting App: A simple React app that displays a greeting message based on the current time of day. Built with React components and inline dynamic styling.

2. Emojipedia App: A React app that displays a collection of emojis along with their names and short descriptions. Uses React components, props, and JavaScript map() to dynamically generate and render an emoji dictionary. Data is stored in a separate JavaScript file and each entry’s description is truncated to the first 100 characters for cleaner presentation.

3. Keeper App: A React-based note-taking application. Users can view a collection of notes, each with a title and content. The app uses React components, props, and JavaScript map() to dynamically render notes. 

4. Contact Form App: A React-based form that collects and displays a user's contact information. It uses React components, state management, and event handling to dynamically update the form. The app also demonstrates making use of previous state when updating state. After submission, the user's input is displayed in a greeting card.

5. To-Do List App: A React app that demonstrates function calls between components, complex state management, and the spread operator.
- Function Calls Between Components: The App component passes addItem and deleteItem functions to InputArea and ToDoItem components via props. InputArea calls addItem to add tasks, and ToDoItem calls deleteItem to remove tasks.
- Complex State Management: Tasks are stored in an array using useState. The filter method is used in deleteItem to remove tasks by index immutably.
- Spread Operator: The spread operator (...prevItems) is used to add new tasks without mutating the existing state.
This app shows how React handles state and function calls efficiently across components.

#### Setup Instructions

Install Node.js and npm.
Install required packages:
`npm i`

Start the React development server:
`npm start`

Open a browser and visit http://localhost:3000/