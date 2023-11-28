import ConfirmationScreen from "./screens/ConfirmationScreen";
import HomeScreen from "./screens/HomeScreen";
import VotingScreen from "./screens/VotingScreen";

function App() {
  return (
    <>
      <div className="App flex flex-col h-screen justify-between">
        {" "}
        <HomeScreen />
        <ConfirmationScreen/>
        {/* <VotingScreen/> */}
      </div>
    </>
  );
}

export default App;
