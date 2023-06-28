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
  const skills = [];
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
