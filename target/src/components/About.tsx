import "./About.css";
const nathanProfile = "/images/nathan-profile.jpg";
import { Helmet } from "react-helmet";

const nathanStandPic = "/images/nathan-stand-pic.png";
const nathanStandPic2 = "/images/nathan-stand-peoples.png";
const present = "/images/present.jpeg";
const nathanProfile2 = "/images/nathan-profile-wall.jpg";

const About = () => {
  return (
    <div className="About">
      <Helmet>
        <title>Nathan Krasney | Web Development Courses & Mentoring</title>
        <meta
          name="description"
          content="Let professional teach you web development and mentor you in the way to your first job as a junior web developer. Contact me for more info"
        />
      </Helmet>

      <div className="About-img">
        <img src={nathanProfile} alt="img" />
      </div>

      <div className="About-description">
        <h1 className="About-description-title">Nathan Krasney</h1>
        <h4 className="About-description-subtitle">
        Lead React Instructor | Mentor for Junior Web Developers
        </h4>

        <p className="About-description-details">
          I am doing software development for 25+ years.
          I have my own business for mentoring junior web developers and teaching
          courses for the last 10 years.
          I have led 5 successful web full-stack bootcamps with many graduates working as web developers.
          I have 3 online courses on udemy using my unique way of teaching.
          All of this gives me the experience and capabilities required to
          mentor junior web developer in the way to your first programming job
        </p>

        <div className="About-description-images">
          <div className="About-description-img-1 img">
            <img src={nathanStandPic} alt="img" />
          </div>
          <div className="About-description-img-1 img">
            <img src={present} alt="img" />
          </div>
          <div className="About-description-img-1 img">
            <img src={nathanStandPic2} alt="img" />
          </div>
          <div className="About-description-img-1 img">
            <img src={nathanProfile2} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
