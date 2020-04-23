const todosData = [
  {
    id: 1,
    text: "Take out the trash",
    completed: true,
  },
  {
    id: 2,
    text: "Grocery shopping",
    completed: false,
  },
  {
    id: 3,
    text: "Clean gecko tank",
    completed: false,
  },
  {
    id: 4,
    text: "Mow lawn",
    completed: true,
  },
  {
    id: 5,
    text: "Catch up on Arrested Development",
    completed: false,
  },
];

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </p>
    </div>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
