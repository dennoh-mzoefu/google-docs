import TextEditor from "./TextEditor";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/documents/:id" element={<TextEditor />} />
          <Route
            path="/documents"
            element={<Navigate replace to={`/documents/${uuidV4()}`} />}
          />
          <Route
            path="/"
            element={<Navigate replace to={`/documents/${uuidV4()}`} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
