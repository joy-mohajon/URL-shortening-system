import { useState } from "react";
import BackgroundAnimation from "./components/BackgroundAnimation";
import EntryPage from "./components/pages/EntryPage";
import UrlListPage from "./components/pages/UrlListPage";
import EditUrlPage from "./components/pages/EditUrlPage";

function App() {
  const [urlObject, setUrlObject] = useState(null);

  const urlObjectHandler = (url) => {
    setUrlObject(url);
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          {urlObject ? (
            <EditUrlPage urlObject={urlObject} urlObjectHandler={urlObjectHandler} />
          ) : (
            <EntryPage />
          )}
          <UrlListPage urlObjectHandler={urlObjectHandler} />
        </div>
      </div>
      <BackgroundAnimation />
    </div>
  );
}

export default App;
