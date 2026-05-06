function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <Welcome name="ankush" />
      <Welcome name="Student" />
    </div>
  );
}

export default App;