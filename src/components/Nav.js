import React from "react";

const Nav = ({
  triggerHome,
  triggerAboutMe,
  triggerEducation,
  triggerWork
}) => {
  return (
    <nav id="nav-bar" className="flex justify-end">
      <h3
        onClick={() => triggerHome()}
        className="f4 dim link white underline pa3 pointer"
      >
        Home
      </h3>
      <h3
        onClick={() => triggerAboutMe()}
        className="f4 dim link white underline pa3 pointer"
      >
        About Me
      </h3>
      <h3
        onClick={() => triggerEducation()}
        className="f4 dim link white underline pa3 pointer"
      >
        Education
      </h3>
      <h3
        onClick={() => triggerWork()}
        className="f4 dim link white underline pa3 pointer"
      >
        Work
      </h3>
    </nav>
  );
};

export default Nav;
