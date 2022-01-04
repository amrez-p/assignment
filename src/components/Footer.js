import React from "react";
import Main from "./Main.json";
function Footer() {
  return (
    <>
      {Main.map((data, i) => {
        return (
          <div key={i} className="footer">
            <p className="footerParagraph">{data.Footer.praragraph}</p>
            <div className="footerWrapper">
              <ul className="footerLinks">
                {data.Footer.Link.map((item, i) => {
                  return (
                    <li key={i}>
                      <a href="/" className="Link">
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <span className="copyright">{data.Footer.copyright}</span>
          </div>
        );
      })}
    </>
  );
}

export default Footer;
