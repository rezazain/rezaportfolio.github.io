import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="Experience">
      <h5>What Skills I Have </h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-alight">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-alight">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-alight">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                {" "}
                <h4>Bootstrap</h4>
                <small className="text-alight">basic </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-alight">basic</small>
              </div>
            </article>
          </div>
        </div>

        {/* ==================== END ==================== */}
        <div className="experience__multimedia">
          <h3>Multimedia</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Corel</h4>
                <small className="text-alight">basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Photoshop</h4>
                <small className="text-alight">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                {" "}
                <h4>Adobe Ilustrator</h4>
                <small className="text-alight">basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Adobe After Effect</h4>
                <small className="text-alight">basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Adobe Priemiere</h4>
                <small className="text-alight">experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
