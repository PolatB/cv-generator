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
                  type="number"
                  value={formData.age !== 0 ? formData.age : ""}
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
                          const updatedExperiences =
                            professionalExperiences.filter(
                              (prev) => prev.id !== experience.id
                            );
                          setProfessionalExperiences(updatedExperiences);
                          updateFormData({
                            ...formData,
                            professionalExperiences: [...updatedExperiences],
                          });
                        }}
                      >
                        X
                      </Button>
                    </div>
                  </div>
                );
              })}
              <Dialog>
                <DialogTrigger className="bg-black text-white p-2 rounded-sm">
                  Add
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Experience</DialogTitle>
                    <Input
                      id="title"
                      placeholder="Company Name"
                      type="text"
                      value={newExperience.title}
                      onChange={(e) =>
                        setNewExperience({
                          ...newExperience,
                          title: e.target.value,
                        })
                      }
                    />
                    <Input
                      id="subtitle"
                      placeholder="Position"
                      type="text"
                      value={newExperience.subtitle}
                      onChange={(e) =>
                        setNewExperience({
                          ...newExperience,
                          subtitle: e.target.value,
                        })
                      }
                    />
                    <Button onClick={addNewExperience}>Add</Button>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="education">
            <AccordionTrigger>Education</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              {education.map((education, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-2 justify-between border p-2"
                  >
                    <div>
                      <h3 className="font-bold">{education.title}</h3>
                      <h4>{education.subtitle}</h4>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          const updatedEducation = education.filter(
                            (prev) => prev.id !== education.id
                          );
                          setEducation(updatedEducation);
                          updateFormData({
                            ...formData,
                            education: [...updatedEducation],
                          });
                        }}
                      >
                        X
                      </Button>
                    </div>
                  </div>
                );
              })}
              <Dialog>
                <DialogTrigger className="bg-black text-white p-2 rounded-sm">
                  Add
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Education</DialogTitle>
                    <Input
                      id="title"
                      placeholder="Education Name"
                      type="text"
                      value={newEducation.title}
                      onChange={(e) =>
                        setNewEducation({
                          ...newEducation,
                          title: e.target.value,
                        })
                      }
                    />
                    <Input
                      id="subtitle"
                      placeholder="Subject"
                      type="text"
                      value={newEducation.subtitle}
                      onChange={(e) =>
                        setNewEducation({
                          ...newEducation,
                          subtitle: e.target.value,
                        })
                      }
                    />
                    <Button onClick={addNewEducation}>Add</Button>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="languages">
            <AccordionTrigger>Languages</AccordionTrigger>
            <AccordionContent>
              <Textarea
                className="min-h-[100px]"
                id="languages-known"
                placeholder="Languages"
                value={formData.languages}
                onChange={(e) =>
                  updateFormData({
                    ...formData,
                    languages: e.target.value,
                  })
                }
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="skills">
            <AccordionTrigger>Skills</AccordionTrigger>
            <AccordionContent>
              <Textarea
                className="min-h-[100px]"
                id="skills"
                placeholder="Skills"
                value={formData.skills}
                onChange={(e) =>
                  updateFormData({
                    ...formData,
                    skills: e.target.value,
                  })
                }
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="hobbies">
            <AccordionTrigger>Hobbies</AccordionTrigger>
            <AccordionContent>
              <Textarea
                className="min-h-[100px]"
                id="hobbies"
                placeholder="Hobbies"
                value={formData.hobbies}
                onChange={(e) =>
                  updateFormData({
                    ...formData,
                    hobbies: e.target.value,
                  })
                }
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="accordion" value="note">
            <AccordionTrigger>Note</AccordionTrigger>
            <AccordionContent>
              <Textarea
                className="min-h-[100px]"
                id="additional-notes"
                placeholder="Additional notes or comments"
                value={formData.note}
                onChange={(e) =>
                  updateFormData({
                    ...formData,
                    note: e.target.value,
                  })
                }
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </aside>
  );
};

export default InputForm;
