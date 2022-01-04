import React from "react";
import Main from "./Main.json";

export const TextSection = () => {
  return (
    <div className="TextSection">
      {Main.map((data) => {
        return (
          <>
            <h2 className="TextSectionTitle">
              <span className="TextTint">Sugar Balance </span>How It Works?
            </h2>
            <p> {data.Section.paragraph} </p>

            <h2 className="TextSectionTitle">
              Why <span className="TextTint"> Sugar Balance?</span>
            </h2>
            <p> {data.Section.paragraphTwo} </p>
            <h2 className="TextSectionTitle">
              How <span className="TextTint">Do I take Sugar Balance?</span>
            </h2>
            <p> {data.Section.paragraphThree} </p>
          </>
        );
      })}
    </div>
  );
};

export function LinkSection() {
  return (
    <>
      {Main.map((data, i) => {
        return (
          <div key={i} className="LinkSection">
            <h2 className="LinkSectionTitle">{data.LinkSection.MainTitle}</h2>
            <div className="SectionPages">
              {data.LinkSection.Pages.map((page, index) => {
                return (
                  <Page
                    key={index}
                    title={page.title}
                    img={page.img}
                    alt={page.alt}
                    btn={page.button}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
const Page = ({ title, img, alt, btn }) => {
  return (
    <div className="PageContainer">
      <img className="PageImg" src={require("../images/" + img)} alt={alt} />
      <h3 className="PageHeading">{title}</h3>
      <button className="PageBtn">{btn}</button>
    </div>
  );
};
