Add the following to this `README.md` file:  
  * A short report explaining your design decisions and any challenges faced.
  * Documentation: Clear and concise documentation on how to run your application.
  * 

The tasks state is initialized as an empty array and each task is an object with id, title, and completed properties. addTask accepts a title parameter, creates a new task with a unique id (Date.now() for simplicity), sets the completed status to false, and updates the tasks array using the spread operator.

Toggling Task Completion (toggleTaskCompletion function):
This function takes a task's id, iterates through the tasks array, finds the task with the matching id, and toggles the completed status.
The state is updated immutably by returning a new array.

Rendering Tasks:
The tasks are displayed using .map() to render each task’s title and completion status.
The completion status is conditionally displayed as "(Completed)" or "(Incomplete)" based on the completed status.
Each task has a "Toggle Completion" button that, when clicked, toggles the task's completion status by calling toggleTaskCompletion.