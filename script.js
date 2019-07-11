

  // V6 - TOGGLE ALL

 //  .toggleAll - if everything is true, make everything false//
//   .toggleAll - otherwise make everything true

var todoList = {
    todos: [ //Todos Array of Objects
  
      {
        todoText: 'Item 1',
        completed: false //Boolean True or False
      },
  
      {
        todoText: 'Item 2',
        completed: false
      },
  
      {
        todoText: 'Item 3',
        completed: false
      }
    ],
  
    //Display Todos
    displayTodos: function() {
      //If Statement
      if (this.todos.length === 0) {
        //When Todo List is empty
        console.log('Your todo List is empty!');
      } else {
        //When Todo List is not empty 
        console.log('My Todos: ');
        //Important Loop that displays the entire Todo List
        for (var i = 0; i < this.todos.length; i++) {
          // check if .completed is true
          if (this.todos[i].completed === true) {
  
            // print with (x)
            console.log('(x)', this.todos[i].todoText);
          } else {
            // print with ( )
            console.log('( )', this.todos[i].todoText);
          }
        }
      }
  
      // Comparison - use triple equals
      //if there are no todos
      // if this.todos.length is equal to 0 in all parameters
      //if this.todos.length === 0
      //console.log ('Your todo List is empty!');
      //else
      //print todos as normal
  
    },
  
    //Add Todos
    addTodo: function(todoText) {
      this.todos.push({
        todoText: todoText, //first one: property- stable; second one: value/parameter/user input; changes based on user data 
        completed: false
      });
      this.displayTodos();
    },
  
    //Change Todos
    changeTodo: function(position, todoText) {
      // this.todos[position] = newValue; Old statement
      this.todos[position].todoText = todoText;
      this.displayTodos();
    },
  
    //Delete Todos
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
    },
  
    //Toggle Completed Todo
    toggleCompleted: function(position) {
      var todo = this.todos[position]; //(This variable 'todo' saves us from retyping this.todos[position]' everytime. DRY yo!)
      todo.completed = !todo.completed; //this will change the completed value of our selected todo to "true".
      this.displayTodos();
    },
  
    //Toggle All
    toggleAll: function() {
      var totalTodos = this.todos.length; //easy peezy lemon squeezy
      var completedTodos = 0; // we will go through each item in todo list, and as each one is complete we will add 1 to the variable. 
  
      //How do you do a test to see if everything is true? Couple ways to do this:
      // 1. does completedTodos === totalTodos? if yes, everything is true. Use this.
      //2. Does no of incompleteTodos === 0? if yes, everything is false.
  
      //Get number of completed Todos.
      for (var i = 0; i < totalTodos; i++) {
        if (this.todos[i].completed === true) {
          completedTodos++;
        }
      } //not sure if semi-colon is needed here
  
  
      // Case 1: if everything is true, make everything false
      if (completedTodos === totalTodos) {
        for (var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = false;
        }
      }
      //Case 2: Otherwise, make everything true
      else {
        for (var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = true;
        }
      }
  
      this.displayTodos();
    }
  
    //End of Object
  };



