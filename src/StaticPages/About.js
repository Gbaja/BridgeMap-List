import React from "react";

import Header from "./Header/Header";
import "./StaticPages.css";

const About = () => (
  <div className="about__container">
    <Header />
    <p className="about__text">
      BridgeMap List is an online directory for young people (10 - 25 years old)
      to use when searching for organisations that can support/advise them on
      different aspects of their life.
    </p>
    <p className="about__text">
      If you are an organisation and you provide a service for young people, you
      can make sure they know about it by joining this platform!
    </p>
    <p className="about__text">
      If you are a young person seeking support, advise or information on
      anything, you can look through our dirctory for an organisation that can
      support you!
    </p>
  </div>
);

export default About;
