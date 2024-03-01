import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Ui/accordion";
import { Input } from "./Ui/input";
import { Textarea } from "./Ui/textarea";
import { Button } from "./Ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Ui/dialog";
import { v4 as uuidv4 } from "uuid";
import { useFormData } from "../Context/DataContext";

const InputForm = () => {
  const { formData, updateFormData } = useFormData();
  const [professionalExperiences, setProfessionalExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [newEducation, setNewEducation] = useState({
    title: "",
    subtitle: "",
  });

  const [newExperience, setNewExperience] = useState({
    title: "",
    subtitle: "",
  });

  const addNewExperience = () => {
    updateFormData({
      ...formData,
      professionalExperiences: [
        ...formData.professionalExperiences,
        {
          d: uuidv4(),
          title: newExperience.title,
          subtitle: newExperience.subtitle,
        },
      ],
    });
    setProfessionalExperiences((prevValues) => [
      ...prevValues,
      {
        id: uuidv4(),
        title: newExperience.title,
        subtitle: newExperience.subtitle,
      },
    ]);

    setNewExperience({
      title: "",
      subtitle: "",
    });
  };

  const addNewEducation = () => {
    updateFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          d: uuidv4(),
          title: newEducation.title,
          subtitle: newEducation.subtitle,
        },
      ],
    });
    setEducation((prevValues) => [
      ...prevValues,
      {
        id: uuidv4(),
        title: newEducation.title,
        subtitle: newEducation.subtitle,
      },
    ]);

    setNewEducation({
      title: "",
      subtitle: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({
      ...formData,
      professionalExperiences: professionalExperiences,
      education: education,
    });
    console.log(formData);
  };

  return (
    <aside className="p-3">
      <form onSubmit={handleSubmit}>
        <Accordion className="w-full" collapsible type="single">
          <AccordionItem className="accordion" value="personal-info">
            <AccordionTrigger>Profile</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4">
                <Input
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => {
                    updateFormData({
                      ...formData,
                      name: e.target.value,
                    });
                  }}
                />
                <Input
                  id="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={(e) => {
                    updateFormData({
                      ...formData,
                      title: e.target.value,
                    });
                  }}
                />
                <Input
                  id="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => {
                    updateFormData({
                      ...formData,
                      address: e.target.value,
                    });
                  }}
                />
                <Input
                  id="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={(e) => {
                    updateFormData({
                      ...formData,
                      age: e.target.value,
                    });
                  }}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="professional-info">
            <AccordionTrigger>Personal information</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4">
                <Input
                  id="experience-years"
                  placeholder="Experience Years"
                  type="text"
                  value={
                    formData.experienceYears !== ""
                      ? formData.experienceYears
                      : ""
                  }
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      experienceYears: e.target.value,
                    })
                  }
                />
                <Input
                  id="salary-expectation"
                  placeholder="Salary Expectation"
                  type="number"
                  value={
                    formData.salaryExpectation !== 0
                      ? formData.salaryExpectation
                      : ""
                  }
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      salaryExpectation: e.target.value,
                    })
                  }
                />
                <Input
                  id="notice-period"
                  placeholder="Notice period"
                  type="text"
                  value={
                    formData.noticePeriod !== 0 ? formData.noticePeriod : ""
                  }
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      noticePeriod: e.target.value,
                    })
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="personality">
            <AccordionTrigger>Personality</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4">
                <Textarea
                  id="personality-color"
                  placeholder="Personality Color"
                  value={formData.personalityColor}
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      personalityColor: e.target.value,
                    })
                  }
                />
                <Textarea
                  id="personality-type"
                  placeholder="Personality Type"
                  value={formData.personalityType}
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      personalityType: e.target.value,
                    })
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="experience">
            <AccordionTrigger>Experience</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              {professionalExperiences.map((experience, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-2 justify-between border p-2"
                  >
                    <div>
                      <h3 className="font-bold">{experience.title}</h3>
                      <h4>{experience.subtitle}</h4>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          const updatedExperinces =
                            professionalExperiences.filter(
                              (prev) => prev.id !== experience.id
                            );
                        }}
                      >
                        X
                      </Button>
                    </div>
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </aside>
  );
};

export default InputForm;
