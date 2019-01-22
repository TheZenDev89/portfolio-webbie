import React from "react";
import Particles from "react-particles-js";

import Nav from "./components/Nav.js";
import MyName from "./components/MyName.js";
import AboutMe from "./components/AboutMe.js";
import Education from "./components/EduPage/Education";
import Work from "./components/WorkPage/Work";
import ComponentToRender from "./components/ComponentToRender";
import SocialBar from "./components/SocialBar";

import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 125
      }
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ""
    };
  }

  triggerHome = () => {
    this.setState({ route: "home" });
  };

  triggerAboutMe = () => {
    this.setState({ route: "aboutMe" });
  };

  triggerEducation = () => {
    this.setState({ route: "edu" });
  };

  triggerWork = () => {
    this.setState({ route: "work" });
  };

  renderComponent = () => {
    if (this.state.route === "home") {
      return <MyName />;
    } else if (this.state.route === "aboutMe") {
      return <AboutMe />;
    } else if (this.state.route === "edu") {
      return <Education />;
    } else if (this.state.route === "work") {
      return <Work />;
    } else {
      return <MyName />;
    }
  };

  render() {
    return (
      <div className="app">
        <Particles className="particles" params={particlesOptions} />
        <Nav
          triggerHome={this.triggerHome}
          triggerAboutMe={this.triggerAboutMe}
          triggerEducation={this.triggerEducation}
          triggerWork={this.triggerWork}
        />
        <ComponentToRender renderComponent={this.renderComponent} />
        <SocialBar />
      </div>
    );
  }
}

export default App;
