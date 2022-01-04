import React from "react";
import Main from "./Main.json";

export const SVGSection = () => {
  return (
    <div className="SVGSection">
      <h2>
        Save Up to $695 and create Quick{" "}
        <span className="SVGSectionTint">Sugar Balance </span> Order Today
      </h2>
      <button>
        <i class="fas fa-shopping-cart"></i> Order Now
      </button>
      <h2>
        <span className="SVGSectionTint">Sugar Balance </span>Offical Site -%100
        Orignal
      </h2>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
    </div>
  );
};

export const TextSection = () => {
  return (
    <div className="TextSection">
      {Main.map((data) => {
        return (
          <>
            <h2 className="TextSectionTitle">
              <span className="TextSectionTint">Sugar Balance </span>How It
              Works?
            </h2>
            <p> {data.TextSection.paragraph} </p>

            <h2 className="TextSectionTitle">
              Why <span className="TextSectionTint"> Sugar Balance?</span>
            </h2>
            <p> {data.TextSection.paragraphTwo} </p>
            <h2 className="TextSectionTitle">
              How{" "}
              <span className="TextSectionTint">Do I take Sugar Balance?</span>
            </h2>
            <p> {data.TextSection.paragraphThree} </p>
            <div className="TextSectionSVG_Container">
              {data.TextSection.SVG.map((item, index) => {
                return (
                  <div key={index} style={{ padding: "50px" }}>
                    <img
                      className="TextSectionSVG"
                      src={require("../images/SVG/" + item.img)}
                      alt={item.alt}
                    />
                  </div>
                );
              })}
            </div>
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
