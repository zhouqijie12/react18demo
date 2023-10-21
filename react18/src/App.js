import classnames from "classnames";

function App() {
  const flag = true;
  return (
    <div className="App">
      <div className={classnames("abc", { foo: flag })}>react18181</div>
    </div>
  );
}

export default App;
