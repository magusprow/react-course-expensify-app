console.log("App.js is running");

//JSX - Javascript XML

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  //subtitle: "",
  options: []
  //options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const Reset = e => {
  e.preventDefault();
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

//create "Remove All" button above list

// const user = {
//   name: "",
//   age: 17
//   location: "New York"
// };

// //

// const userLocation = "Parts Unknown";
// function getLocation(location) {
//   if (location) {
//     return <p>Location:{location}</p>;
//   }
// }

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : "Anonymous"}</h1>
//     {user.age && user.age >= 18 && <p>Age:{user.age}</p>}

//     {getLocation(user.location)}
//   </div>
// );

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : " No options"}</p>
      <p>{app.options.length}</p>
      <button disabled={false} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={Reset}>reset</button>
      {/* numbers.map(number => {
        return <p key={number}>Number:{number}</p>;
      })
      */}

      <ol>
        {/*map over app.options getting back an array of lis{set key and text} */}
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
