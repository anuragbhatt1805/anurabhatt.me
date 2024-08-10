import { PageTitle } from "../../components/PageTitle";
import { Certificate } from "./Certificate";
import { University } from "./University";

export type EducationProp = {
  logo: string;
  university: string;
  degree: string;
  major: string;
  passingYear: string;
  location: string | "Remote" | "Hybrid";
  grading: "CGPA" | "%";
  grade: number;
  softskills?: string[];
  hardskills?: string[];
  coordinates?: [number, number];
  website?: string;
};

export type CertificateProp = {
  credentialId?: string;
  title: string;
  issuedBy: string;
  issueDate: Date;
  expiryDate?: Date;
  link: string;
};

const data: EducationProp[] = [
  {
    logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1720903507/HKBK-College-Logo_gxdzp3.png",
    university: "HKBK College of Engineering",
    degree: "Bachelor of Engineering",
    major: "Computer Science and Engineering",
    passingYear: "2024",
    location: "Bengaluru, Karnataka, India",
    grading: "CGPA",
    grade: 8.3,
    website: "https://hkbk.edu.in/",
    coordinates: [13.036, 77.6199],
    hardskills: [
      "Python",
      "JAVA",
      "C",
      "Javascript",
      "MySQL",
      "MongoDB",
      "Android Studio",
      "Data Structures & Algorithm",
      "Raspberry Pi",
    ],
    softskills: [
      "Teamwork",
      "Time Management",
      "Leadership",
      "Adaptability",
      "Problem-Solving",
    ],
  },
  {
    logo: "",
    university: "Tomar Children School",
    degree: "Intermediate (10+2)",
    major: "PCM + Computer Science",
    passingYear: "2020",
    location: "Varanasi, Uttar Pradesh, India",
    grading: "%",
    grade: 80,
    coordinates: [25.360168922136772, 82.95606388928671],
    website: "https://www.tomarchildrenschool.in/",
    hardskills: ["Python", "MySQL", "Mathematics"],
    softskills: ["Analytical Thinking", "Time Management", "Communication"],
  },
  {
    logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723292610/sara_cppyjx.png",
    university: "Sant Atulanand Residential Academy",
    degree: "High School (10)",
    major: "Science + IT",
    passingYear: "2018",
    location: "Varanasi, Uttar Pradesh, India",
    grading: "%",
    grade: 89,
    coordinates: [25.372009565559623, 82.95586204167955],
    website: "https://saravns.ac.in/",
    hardskills: ["HTML", "CSS", "JavaScript", "Mathematics"],
    softskills: ["Teamwork", "Communication"],
  },
];

const certificates: CertificateProp[] = [
    {
        credentialId: "UC-0f91497d-453e-4cb8-a729-06c8aeeef7f0",
        title: "Build a Backend REST API with Python & Django - Advanced",
        issuedBy: "Udemy",
        issueDate: new Date("08-10-2023"),
        link: "https://www.ude.my/UC-0f91497d-453e-4cb8-a729-06c8aeeef7f0/",
    },
    {
        credentialId: "32507737f46D",
        title: "Rest API (Intermediate)",
        issuedBy: "HackerRank",
        issueDate: new Date("07-10-2023"),
        link: "https://www.hackerrank.com/certificates/32507737f46d",
    },
    {
        credentialId: "N/A",
        title: "Docker Essential Training",
        issuedBy: "LinkedIn Learning",
        issueDate: new Date("06-10-2023"),
        link: "https://www.linkedin.com/learning/certificates/7c31081eec0a3e204b1d678c4d8fe6f60c900159b4dd4ec8fd11bf336d8872b8",
    },
    {
        credentialId: "N/A",
        title: "Git Essential Training",
        issuedBy: "LinkedIn Learning",
        issueDate: new Date("06-10-2023"),
        link: "https://www.linkedin.com/learning/certificates/7fc2aef04a0f3af7c8ff8fc6330d5ae973fc2908d1f6f8c3efe3e6be7282b408",
    },
    {
        credentialId: "U803012021ptc093214-#00016699",
        title: "Android App Development",
        issuedBy: "Perfect eLearning",
        issueDate: new Date("05-10-2023"),
        link: "https://perfectelearning.com/certificate/a4f382916e",
    },
    {
        credentialId: "119854-24128217-1016",
        title: "Career Edge - Young Professional",
        issuedBy: "TCS iON",
        issueDate: new Date("04-10-2023"),
        link: "https://www.linkedin.com/posts/anurag-bhatt-846a241b8_tcs-ion-certificate-of-achievement-activity-7053441738618634240-iywZ",
    },
    {
        credentialId: "JAB5104110B",
        title: "Microsoft Excel Masterclass",
        issuedBy: "LearnMall.in",
        issueDate: new Date("11-10-2022"),
        link: "https://learnmall.in/cert/JAB5104110B",
    },
    {
        credentialId: "N/A",
        title: "National Intellectual Property Awareness Mission Co-ordinator",
        issuedBy: "Ministry of Commerce and Industry, Government of India",
        issueDate: new Date("07-10-2022"),
        link: "https://ipindiaservices.gov.in/RQStatus/IPR_EVENT.aspx?FileName=TXIuQW51cmFnQmhhdHQxNjQyMi5wZGY=",
    },
    {
        credentialId: "5AB9CFAAFC68",
        title: " SQL(Basic)",
        issuedBy: "HackerRank",
        issueDate: new Date("02-10-2022"),
        link: "https://www.hackerrank.com/certificates/5ab9cfaafc68",
    },
    {
        credentialId: "CT-YYOKYXTY",
        title: "HTML",
        issuedBy: "SoloLearn",
        issueDate: new Date("10-10-2020"),
        link: "https://www.sololearn.com/certificates/CT-YYOKYXTY",
    },
    {
        credentialId: "53F1DB160C08",
        title: "HackerRank Certified Python(Basics)",
        issuedBy: "HackerRank",
        issueDate: new Date("10-10-2020"),
        link: "https://www.hackerrank.com/certificates/53f1db160c08",
    },
    {
        credentialId: "ECA9850038B4",
        title: "Java (Basic)",
        issuedBy: "HackerRank",
        issueDate: new Date("10-10-2020"),
        link: "https://www.hackerrank.com/certificates/eca9850038b4",
    },
];

export const Education = () => {
  return (
    <>
      <PageTitle title="Education" />
      <div className="flex flex-col w-full px-5 items-center">
        {data.map((item, index) => (
          <University key={index} {...item} />
        ))}
      </div>
      {certificates.length > 0 && (
        <>
          <PageTitle title="Certificates" />
          <div className="flex max-md:flex-col flex-row w-full px-5 md:mb-10 mb-4">
            <div className="flex max-md:flex-col flex-row md:mx-16 md:flex-wrap max-md:items-center md:justify-center">
                {certificates.map((item, index) => (
                <Certificate key={index} {...item} />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
