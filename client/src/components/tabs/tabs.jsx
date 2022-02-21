import { useState } from "react";
import CardScreen from "../pricing-cards/cards";
import "./tabsStyles.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
    <div><h1 className='heading'>Pricing</h1></div>
    <div className="tabs-container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          For Most Buisnesses
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          For very small Buisnesses
        </button>
        
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <CardScreen/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
            <CardScreen/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Tabs;