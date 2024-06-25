import Button from "./components/Button";

function App() {

  return (
    <div>
      <Button onClick={() => console.log('Clicked')}>
        <span>Solution</span>
      </Button>
    </div>
  );
}

export default App;
