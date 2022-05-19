import core from "./core"

function App() {
  const onClick = async () => {
    const result = await core.profile.getMyProfile();
    console.log("result", result)
  };

  return (
    <div className="App">
      <button onClick={onClick}>Click to test</button>
    </div>
  );
}

export default App;
