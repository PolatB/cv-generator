import React from "react";
import InputForm from "./Components/InputForm";
import TemplatePreview from "./Components/TemplatePreview";

function App() {
  return (
    <main className="text-center">
      <h1 className="text-base font-bold p-6 uppercase tracking-widest text-gray-500">
        CV Generator
      </h1>
      <div className="flex">
        <InputForm />
        <TemplatePreview />
      </div>
    </main>
  );
}

export default App;
