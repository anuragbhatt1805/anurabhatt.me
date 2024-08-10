import { PageTitle } from "../../components/PageTitle";
import { UpdatingSoon } from "../../components/UpdatingSoon";
import { Skill } from "./Skill";

export type ProjectProp = {
  name: string;
  description: string;
  technology: string[];
  date?: string;
  image?: string[];
  link?: string;
  github?: string;
  docker?: string;
  status: string | "Completed";
};

export type SkillProp = {
  color: string;
  name?: string;
  percentage: number;
  logo: string;
};

const skills: SkillProp[] = [
    {
        color: "#E44C20",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723318596/HTML5_logo_and_wordmark.svg_zos1px.png",
        percentage: 70,
    },
    {
        color: "#2865F0",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723319800/62b221ef038aad4d3ed7ca2e_wxghuv.png",
        percentage: 40,
    },
    {
        color: "#D7BA33",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723322111/png-javascript-badge-picture-8_hq2jaw.png",
        percentage: 80,
    },
    {
        color: "#0179B1",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723322829/Python-Logo-Free-Download-PNG_fystvn.png",
        percentage: 70,
    },
    {
        color: "#CA2D2F",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723323049/java-logo-1_fztpkb.png",
        percentage: 50,
    },
    {
        color: "#007ACC",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723323237/typescript_plain_logo_icon_146316_s3ewcx.png",
        percentage: 75,
    },
    {
        color: "#649BD3",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723322978/C_Logo_sgtqho.png",
        percentage: 85,
    },
    {
        color: "#222C35",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723323121/Bash_Logo_Colored.svg_jhyb5x.png",
        percentage: 40,
    },
    {
        color: "#5FDAFA",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723323396/1175110_xnyewd.webp",
        percentage: 65,
    },
    {
        color: "#2B2F3B",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723323478/electron-icon_gtzaof.webp",
        percentage: 50,
    },
    {
        color: "#5D4081",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723323993/1175203_ietgom.webp",
        percentage: 75,
    },
    {
        color: "#2D7A7A",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723323897/Microsoft.VisualStudio.Services.Icons_kuvbfr.png",
        percentage: 75,
    },
    {
        color: "#539E41",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723323606/node-js-icon-454x512-nztofx17_ngwlsh.png",
        percentage: 80,
    },
    {
        color: "#012A18",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723323690/django-python-logo_f0sp3e.png",
        percentage: 70,
    },
    {
        color: "#019C5F",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723323761/1_1RDFnS8FgAOQFegtuynxWw_qn8nvw.png",
        percentage: 90,
    },
    {
        color: "#90C452",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723325497/Android_Studio_logo_icon.png",
        percentage: 45,
    },
    {
        color: "#E6892E",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723324068/pngimg.com_-_mysql_PNG9_hb8eeo.png",
        percentage: 65,
    },
    {
        color: "#326790",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723324141/postgresql_original_wordmark_logo_icon_146392_ktbu5z.png",
        percentage: 60,
    },
    {
        color: "#003957",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723324224/Sqlite-square-icon.svg_cxant9.png",
        percentage: 70,
    },
    {
        color: "#499C4B",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723324260/Mongodb-PNG-Image-HD_vad86l.png",
        percentage: 80,
    },
    {
        color: "#FECB2A",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723324893/firebase_logo_yoiile.png",
        percentage: 70,
    },
    {
        color: "#F15135",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723324403/62a6360f03a870b920cbfd41_xjgnue.png",
        percentage: 90,
    },
    {
        color: "#0f0f0f",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723324467/github-logo-7880D80B8D-seeklogo.com_bz9toj.png",
        percentage: 90,
    },
    {
        color: "#2497EF",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723324543/62a9c7c08ff6441a2952dad3_madmdp.png",
        percentage: 40,
    },
    {
        color: "#219636",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723324621/nginx-icon-444x512-0meva297_ziedgc.png",
        percentage: 50,
    },
    {
        color: "#DE470D",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723324690/ubuntu-logo_mguqv8.png",
        percentage: 95,
    },
    {
        color: "#0072C9",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723324760/azure_qar1sw.png",
        percentage: 45,
    },
    {
        color: "#242E3E",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723324815/Aws-Logo-PNG_zeevector.com__wb8fhy.png",
        percentage: 45,
    },
    {
        color: "#016FC4",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723325091/visual-studio-code-logo-284BC24C39-seeklogo.com_mjqtdf.png",
        percentage: 100,
    },
    {
        color: "#525A69",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723325347/9831953.webp",
        percentage: 655
    },
    {
        color: "#FF8F6B",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723325192/Microsoft_PowerPoint-Logo.wine_iqno3y.svg",
        percentage: 75,
    },
    {
        color: "#217345",
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723325264/1bdb8ac897512116cbac58ffe7560d82.png",
        percentage: 60,
    },
];

export const Project = () => {
  return (
    <>
      <PageTitle title="Projects" />
      <UpdatingSoon />
      {skills.length > 0 && (
        <>
          <PageTitle title="Skills" />
          <div className="flex max-md:flex-col flex-row w-full px-5 md:mb-10 mb-4">
            <div className="flex flex-row md:mx-16 flex-wrap items-center justify-center">
              {skills.map((item, index) => (
                <Skill key={index} {...item} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
