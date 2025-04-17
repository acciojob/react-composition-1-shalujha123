import React, {useState} from "react";
import "./../styles/App.css";
import Tab from "./Tab";

const App = () => {
  const [items] = useState([
    { title: "Tab 1", content: "This is the content for Tab 1." },
    { title: "Tab 2", content: "This is the content for Tab 2." },
    { title: "Tab 3", content: "This is the content for Tab 3." },
  ]);
  const [activeTab,setActiveTab] = useState(0);

  return (
    <div>
      {/* Do not remove the main div */}
      <Tab items={items} setActiveTab={setActiveTab} />
      <p>{items[activeTab].content}</p>
    </div>
  );
};

export default App;
