import Card from "./Card";
import "./styles.css";

export default function App() {
  var button = document.getElementById("root");

  // Define a function to be executed when the button is clicked
  function handleClick() {
    var newDiv = document.createElement("div");

    // 2. Set attributes or styles
    newDiv.id = "myNewDiv"; // Set an ID for the <div>
    newDiv.className = "myClass"; // Set a class name
    newDiv.backgroundImage = "ballons.png"; // Set inline styles

    // 3. Add content to the <div>
    newDiv.innerHTML = "<p>Hello, World!</p>"; // Add HTML content

    // 4. Append the new <div> to an existing element in the document
    document.body.appendChild(newDiv); // Adds the new <div> as the last child of the <body>
  }

  // Add an event listener to the button
  button.addEventListener("click", handleClick);

  return (
    <div className="App">
      <Card />
    </div>
  );
}
