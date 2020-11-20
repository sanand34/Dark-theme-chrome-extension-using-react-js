import React,{useState,useEffect} from 'react';
import Draggable from 'react-draggable';




const Main = () => {
  const [extensionId, setExtensionId] = useState(undefined);
  
  function getExtensionId() {
    window.postMessage({ type: "GET_EXTENSION_ID" }, "*");
  }
  useEffect(() => {
    // Set up event listeners from Content script
    window.addEventListener("message", function(event) {
      if (event.source !== window) return;
      if (event.data.type && (event.data.type === "EXTENSION_ID_RESULT")) {
        setExtensionId(event.data.extensionId);
      }
    });
  }, []);
  return (
  
        <Draggable
          handle=".main-handle"
          defaultPosition={ {x: 500, y: -20 }}
        >
          <div id="main" className="main-window" style={{
        }}>
            <div className="main-window-inner-border">
                <>
                  <div className="main-body">
                    <div className="main-content">
                      <h3>{extensionId}</h3>
                      <button
                        onClick={getExtensionId}
                        className="main-button"
                      >
                        Set Dark Theme
                      </button>
                    </div>
                  </div>
                </>
              </div>
          </div>
        </Draggable>
      
  );
};

export default Main;
