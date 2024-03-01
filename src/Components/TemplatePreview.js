import React from "react";
import { useFormData } from "../Context/DataContext";

const TemplatePreview = () => {
  const { formData } = useFormData();

  return (
    <div>
      <h2>{formData.name}</h2>
    </div>
  );
};

export default TemplatePreview;
