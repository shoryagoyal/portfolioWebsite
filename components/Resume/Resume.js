import WorkExperience from "./WorkExperience";
import Certification from "./Certification";
import Skills from "./Skills";
import Education from "./Education";

function Resume() {
  const workExperience = [
    {
      companyName: "Philips",
      title: "SDE Intern",
      startDate: new Date(2023, 3, 2),
      endDate: new Date(2023, 7, 31),
      location: "Banglore",
      workDone: [
        "Created 2 static code analyzers with 100% uniit test coverage",
        "Created a script that optimised the night build time of the application",
        "Added static code analyzers in 30+ projects and solved the error using OOPs concepts",
      ],
      skills: ["c#", "APIs"],
    },
  ];
  const skills = [
    "Java",
    "Data structures and algorithms",
    "Object oriented programming",
    "Node.js",
    "React.js",
  ];
  const certification = [
    {
      title: "The Web Developer Bootcamp",
      issuingAuthority: "Udemy",
      link: "https://drive.google.com/file/d/1h-lhYs1E2C5UmK86s7ftdCl_vi7ST67O/view?usp=sharing",
    },
    {
      title: " ProblemSolving(Intermediate)",
      issuingAuthority: "HackerRank",
      link: "https://drive.google.com/file/d/1h-lhYs1E2C5UmK86s7ftdCl_vi7ST67O/view?usp=sharing",
    },
  ];
  const eduction = [
    {
      instituteName: "Malaviya National Institute of Technology Jaipur",
      startYear: "2019",
      endYear: "2023",
      degreeName: "B.tech",
      branch: "Electronics and communication engineering",
      cgpa: "7.41",
    },
  ];
  return (
    <>
      <div>Resume</div>
      <WorkExperience />
      <Education />
      <Skills />
      <Certification />
    </>
  );
}

export default Resume;
