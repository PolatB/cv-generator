import React from "react";
import InputForm from "./Components/InputForm";
import TemplatePreview from "./Components/TemplatePreview";

function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6 bg-gray-50">
      <h1 className="text-base font-bold p-6 uppercase tracking-widest text-gray-500">
        CV Generator
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
        <InputForm />
        <TemplatePreview />
      </div>
    </main>
  );
}

export default App;
