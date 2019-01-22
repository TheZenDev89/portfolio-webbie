import React from "react";

const AboutMeCard = () => {
  return (
    <div id="about-me-card" className="br1 pa3 ma2 bw2 shadow-5 w-75">
      <h3>Who am I?</h3>
      <hr />
      <p>I am a Physiologist. I am a Web Developer. I am a Teacher.</p>
      <p>
        I am also a sports & exercise fanatic, who is mildly obsessed with
        personal health.
      </p>
      <p>
        My personality assessment suggests that I am heavily concerned with
        'people mastery'.
      </p>
      <p>
        I love everything about the natural world and I'm fascinated by the
        world that we've built, too.
      </p>
      <hr />
      <p>
        I made this website with newly acquired React Native skills, and lots of
        patience.
      </p>
      <p>Please have a look at my education and work experience pages.</p>
      <p>I hope you enjoy!</p>
    </div>
  );
};

class AboutMe extends React.Component {
  render() {
    return (
      <div className="flex flex-column items-center">
        <AboutMeCard />
      </div>
    );
  }
}

export default AboutMe;
