import { useEffect, useState } from "react";
import Carosol from "./elements/Carosol";

const Home = () => {
  const [toggleHeading, setToggleHeading] = useState(true);
  const [headingData, setHeadingData] = useState({
    title: "Demo Heading",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
    inventore repellendus facere cupiditate provident quia non
    beatae corporis quae corrupti, magnam eligendi sit dicta soluta
    nostrum dolorum, aspernatur obcaecati? Asperiores.`,
  });

  const setInputData = (e) => {
    setHeadingData({ ...headingData, [e.target.name]: e.target.value });
  };
  const saveInputData = () => {
    setToggleHeading(true);
  };
  return (
    <div className="container mt-3">
      {/* For Carasol */}
      <div className="row bg-dark p-5 rounded">
        <div className="col-md-8">
          <Carosol />
        </div>
        {/* Heading Column */}
        <div className="col-md-4 myFirstHeading">
          {toggleHeading ? (
            <div className="d-flex justify-content-end flex-column">
              <h2 className="mt-3 ">{headingData.title}</h2>
              <p className="mt-4">{headingData.desc}</p>
            </div>
          ) : (
            <form>
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="form-control mt-2"
                onChange={(e) => setInputData(e)}
              />
              <textarea
                name="desc"
                id=""
                cols="30"
                rows="10"
                className="form-control mt-3"
                placeholder="Description"
                onChange={(e) => setInputData(e)}
              ></textarea>
            </form>
          )}
          {toggleHeading ? (
            <button
              className="btn btn-warning"
              onClick={() => setToggleHeading(false)}
            >
              Edit Heading and Text
            </button>
          ) : (
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setToggleHeading(true)}
              >
                Back
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => saveInputData()}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
