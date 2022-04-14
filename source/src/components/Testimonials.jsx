import "./Testimonials.css";
import { Helmet } from "react-helmet";
import {
  testimonial_category_student,
  testimonial_category_organization,
} from "../logic/testimonialCategories";
import useFetch from "../hooks/useFetch";



const Testimonials = () => {
  const array = useFetch("./data/testemonials.json") ?? [];

  const items = array.map((item, index) => {
    let elem;

    if (item.testimonial_category === testimonial_category_student) {
      elem = (
        <>
          <div className="Testimonials-inner-container-img">
            <a href={item.href}>
              <img
                src={item.img_src}
                alt="imgTest"
                className="Testimonials-inner-img"
              />
            </a>
            <h4 className="Testimonials-inner-name">{item.name}</h4>
            <small className="Testimonials-inner-job">{item.job}</small>
          </div>

          <p className="Testimonials-inner-desc">{item.desc}</p>
        </>
      );
    } else if (item.testimonial_category === testimonial_category_organization) {
      elem = (
        <>
          <h4 className="Testimonials-inner-name">{item.name}</h4>
          <img style={{ width: "100%" }} src={item.img_src} alt="" />
        </>
      );
    }
    return (
      <div key={index} className="Testimonials-container">
        <div className="Testimonials-inner-container">{elem}</div>
      </div>
    );
  });

  return (
    <div className="Testimonials">
      <Helmet>
        <title>Nathan Krasney | Web Development Courses & Mentoring</title>
        <meta
          name="description"
          content="Check what web developers think about Nathan Krasney. Contact me for any question"
        />
      </Helmet>
      <h1 className="Testimonials-title">
        Success stories from students and organizations
      </h1>
      {items}
    </div>
  );
};

export default Testimonials;
