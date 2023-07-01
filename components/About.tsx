import type { NextPage } from "next";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import instagram from "../assets/instagram.webp";
import gmail from "../assets/gmail.webp";

export const About: NextPage = () => {
  return (
    <>
      <div className="about_left">
        <h1 className="about_left_head">Hi, I&apos;m Jayanika</h1>
        <p className="about_left_text">
          Jayanika Chandrapriya is a Software Developer with five years of experience providing solutions for diverse industries such as tourism, digital marketing, software as a solution and financial services. He is skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies.
        </p>
        <div className="about_left_socialMedia">
          <img
            src={github.src}
            alt=""
            onClick={() => window.open("https://github.com/jayc971", "_blank")}
          />
          <img
            src={linkedin.src}
            alt=""
            onClick={() => window.open("https://www.linkedin.com/in/jayanika", "_blank")}
          />
          <img
            src={instagram.src}
            alt=""
            onClick={() => window.open("https://www.instagram.com/iminstajc/", "_blank")}
          />
          <img
            src={gmail.src}
            alt=""
            onClick={() => window.open("mailto:contact@jayanika.com", "_blank")}
          />
        </div>
        <div
          className="about_left_starme"
          onClick={() => window.open("https://github.com/jayc971", "_blank")}
        >
          ⭐ Star Me On Github
        </div>
      </div>
      <div className="about_right">
        <div className="about_right_profilePic" />
      </div>
    </>
  );
};
