import "./App.css";
import Menu from "./Components/Menu";
import ChatList from "./Components/ChatList";
import ChatPage from "./Components/ChatPage";

function App() {
  return (
    <div className="app">
      <Menu />
      <ChatList />
      <ChatPage name={"Nika Jerrardo"} status={"last online 5 hours ago"} />
    </div>
  );
}

export default App;
