// When loading the page, load from localStorage.
const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
	
	name: 'make dinner',
	dueDate: '2023-07-25'
},{
	name: 'wash dishes',
	dueDate: '2023-07-25'
},{
	name: 'watch youtube',
	dueDate: '2023-07-25'
}
];
// now we nead to upData todoList
//because is not longer just a string because now is an object.

	renderTodoList ();// at the start displat todoList
	
	

function renderTodoList (){
		let todoListHTML = ''; // Accumulator pattern

		for(let i = 0; i <= todoList.length - 1; i++){
		//const todo = todoList[i];  todo now is an object after dueDate
		const todoObject = todoList[i]; // to make it more clear
		// we nead name and dueDate out of this object
		//todoObject.name//todoObvject.dueDate
		const name = todoObject.name;
		const dueDate = todoObject.dueDate;
		// const {name, dueDate} = todoObject;
		const html = 
		//${todo} no more egxs change to ${name} ${dueDate}
		// Separate into 3 elements 
		
					`<div>${name}</div> 
					
					<div>${dueDate}</div> 
					
					<button onclick="
					todoList.splice(${i},1);
					renderTodoList ();
					      // Whenever we update the todo list, save in localStorage.
					saveToStorage();
					
					" class="delete-todo-button">Delete</button> `
					/*`<p>
						
						${name} ${dueDate}
						<button onclick="
						todoList.splice(${i},1);
						renderTodoList ();
						">Delete</button> 
					</p>`; 
					*/
		
		
		
		// Create HTML to put each todo into
		// delete button iside <p></p> to remove it
		
		
	 	todoListHTML = todoListHTML + html;
		}
	console.log(todoListHTML);
	
	document.querySelector('.js-todo-list')
		.innerHTML = todoListHTML; // Put the HTML on wbe page
		
	/* new todo dosent show up on the page
		we need to run - let todolistHTML all code again thrue addTodo function
		we have to create function to reuse code and put into addTodo
	render = means display something on the page 
	function renderTodoList (){} make it
	*/
}
	

// update calendar when we click onto add button
// class="js-due-date-input"
function addTodo(){
	
	const inputElement = document.querySelector('.js-name-input');
	const name = inputElement.value;
	/*console.log(name);
	Add it to array .push();*/
	
	const dateInputElement = document.querySelector('.js-due-date-input');
	const dueDate = dateInputElement.value;
	
	//todoList.push(name); now add an object
	todoList.push({
	 	name: name, // name = inputElement.value;
		dueDate: dueDate // dueDate = dateInputElement.value;
	}

	);
	console.log(todoList);
	/*reset text in placeholder.
	value properti represent text in the textbox
	
	inputElement.value = ''; clear - remove
	
	*/
	inputElement.value = ''; // change value
	
	renderTodoList(); // when we addTodo to the list we need to display again
	      // Whenever we update the todo list, save in localStorage.
		  saveToStorage();
}
function saveToStorage (){
	
	localStorage.setItem('todoList', JSON.stringify(todoList));
	
}
