import React, { useRef } from "react";
import { Button } from "./Ui/button";
import { useFormData } from "../Context/DataContext";
import ReactToPrint from "react-to-print";

const TemplatePreview = () => {
  const { formData } = useFormData();
  const ref = useRef(null);

  const formatText = (text) => {
    const lines = text.split("\n");
    return (
      <React.Fragment>
        {lines.map((line, index) => (
          <span className="block" key={index}>
            {line}
          </span>
        ))}
      </React.Fragment>
    );
  };

  function ArrowRight({ className }) {
    return (
      <svg
        className={className}
        width="12"
        height="12"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 4L0.5 7.4641L0.5 0.535898L5 4Z" fill="black" />
      </svg>
    );
  }

  return (
    <div className="relative bg-red-300 overflow-hidden">
      <ReactToPrint
        bodyClass="print-agreement"
        content={() => ref.current}
        trigger={() => (
          <Button className={"absolute top-3 right-3"}>Print</Button>
        )}
      />

      <div
        ref={ref}
        id="resumePreview"
        format="a4"
        className="font-poppins grid w-[210mm] h-[297mm] format grid-cols-[1fr_2fr] border border-gray-300  bg-white p-8 shadow-lg"
      >
        <div className="mb-6 flex flex-col gap-2 border-r-[1px] border-black py-3 pr-7 text-center">
          <h1 className="customFont test text-[26pt] font-extrabold">
            {formData.name}
          </h1>
          <h2 className="font-poppins text-[12pt] font-medium">
            {formData.title}
          </h2>
          {formData.address !== "" && (
            <div className="black border-b py-6">
              <h3 className="mb-2 font-bold text-[11pt] uppercase">Address</h3>
              <p className="text-[10pt]">{formData.address}</p>
            </div>
          )}
          {formData.age !== 0 && (
            <div className="black border-b py-6">
              <h3 className="mb-2 font-bold uppercase text-[11pt]">Age</h3>
              <p className="text-[10pt]">{formData.age}</p>
            </div>
          )}
          {formData.experienceYears !== "" && (
            <div className="black border-b py-6">
              <h3 className="mb-2 font-bold uppercase text-[11pt]">
                Experience Years
              </h3>
              <p className="text-[10pt]">{formData.experienceYears}</p>
            </div>
          )}
          {formData.salaryExpectation !== 0 && (
            <div className="black border-b py-6">
              <h3 className="mb-2 font-bold uppercase text-[11pt]">
                Salary Expectation
              </h3>
              <p className="text-[10pt]">{formData.salaryExpectation}$</p>
            </div>
          )}
          {formData.noticePeriod !== "" && (
            <div className="black py-6">
              <h3 className="mb-2 font-bold uppercase text-[11pt]">
                Notice Period
              </h3>
              <p className="text-[10pt]">{formData.noticePeriod}</p>
            </div>
          )}
          {formData.personalityColor !== "" && (
            <div className="black border p-[8pt]">
              <h3 className="mb-2 font-bold uppercase text-[11pt]">
                Personal Color
              </h3>
              <div className="text-[10pt] p">
                {formatText(formData.personalityColor)}
              </div>
            </div>
          )}
          {formData.personalityType !== "" && (
            <div className="black border p-[8pt]">
              <h3 className="mb-2 font-bold uppercase text-[11pt]">
                Personality Type
              </h3>
              <div className="text-[10pt]">
                {formatText(formData.personalityType)}
              </div>
            </div>
          )}
        </div>
        <div className="pl-5 flex flex-col gap-4">
          {formData.professionalExperiences.length > 0 && (
            <div>
              <h3 className="border-b border-black pb-2 text-[13pt] font-bold uppercase">
                Work History
              </h3>
              <ul
                className={`marker:size-3 marker:text-3xl list-image-arrowRight list-inside`}
              >
                {formData.professionalExperiences.map((experience, index) => {
                  return (
                    <li
                      key={index}
                      className="py-[10pt] flex items-start gap-2"
                    >
                      <ArrowRight className="mt-1" />
                      <div>
                        <h4 className="text-[11pt] font-medium">
                          {experience.title}
                        </h4>
                        <p className="text-[9pt] ">{experience.subtitle}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {formData.education.length > 0 && (
            <div>
              <h3 className="border-b border-black pb-2 text-[13pt] font-bold uppercase">
                Education
              </h3>
              <ul
                className={`marker:size-3 marker:text-3xl list-image-arrowRight list-inside`}
              >
                {formData.education.map((education, index) => {
                  return (
                    <li
                      key={index}
                      className="py-[10pt] flex items-start gap-2"
                    >
                      <ArrowRight className="mt-1" />
                      <div>
                        <h4 className="text-[11pt] font-medium">
                          {education.title}
                        </h4>
                        <p className="text-[9pt]">{education.subtitle}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {formData.languages !== "" && (
            <div>
              <h3 className="border-b border-black pb-2 text-[13pt] font-bold uppercase">
                Languages
              </h3>
              <div className="py-[10pt] flex items-start gap-2">
                <ArrowRight className="mt-1" />
                <p className="text-[9pt]">{formatText(formData.languages)}</p>
              </div>
            </div>
          )}
          {formData.skills !== "" && (
            <div>
              <h3 className="border-b border-black pb-2 text-[13pt] font-bold uppercase">
                Skills
              </h3>
              <div className="py-[10pt] flex items-start gap-2">
                <ArrowRight className="mt-1" />
                <p className="text-[9pt]">{formatText(formData.skills)}</p>
              </div>
            </div>
          )}
          {formData.hobbies !== "" && (
            <div>
              <h3 className="border-b border-black pb-2 text-[13pt] font-bold uppercase">
                Hobbies
              </h3>
              <div className="py-[10pt] flex items-start gap-2">
                <ArrowRight className="mt-1" />
                <p className="text-[9pt]">{formatText(formData.hobbies)}</p>
              </div>
            </div>
          )}
          {formData.note !== "" && (
            <div>
              <h3 className="border-b border-black pb-2 text-[13pt] font-bold uppercase">
                Notes
              </h3>
              <div className="py-[10pt] flex items-start gap-2">
                <ArrowRight className="mt-1" />
                <p className="[font-size:_clamp(6pt,8pt,10pt)]">
                  {formatText(formData.note)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplatePreview;
