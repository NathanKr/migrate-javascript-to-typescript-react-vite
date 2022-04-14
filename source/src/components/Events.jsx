import Event from "./Event";
import { Helmet } from "react-helmet";
import "./Events.css";
import useFetch from "../hooks/useFetch";

const Events = () => {
  const events = useFetch("./data/eventSlide.json") ?? [];

  const elements = events.map((item, index) => (
    <Event
      key={index}
      startDt={item.startDt}
      type={item.type}
      title={item.title}
      desc={item.desc}
      location={item.location}
    />
  ));

  return (
    <div className="Events">
      <Helmet>
        <title>Nathan Krasney | Web Development Courses & Mentoring</title>
        <meta
          name="description"
          content="Web developer , register to these web development events. Number of sits is limited. Contact me for more info"
        />
      </Helmet>
      <h1 className="Events-title">Upcoming Events</h1>
      <div className="Events-container">{elements}</div>
    </div>
  );
};

export default Events;
