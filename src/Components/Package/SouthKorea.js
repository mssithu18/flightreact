import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faBuilding,
  faTaxi,
  faBowlFood,
  faInr,
} from "@fortawesome/free-solid-svg-icons";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(require.context("/public/images", false, /\.(png|jpe?g|svg|webp)$/));

const SouthKorea = () => {
  return (
    <>
      <div>
        {/* Header Section */}
        <header>
          <img
            src={images["Main.png"]}
            alt="South Korea"
            style={{ width: "100%", height: "auto" }}
          />
        </header>

        {/* Packages Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">
            <span className="text-danger">Explore</span> South Korea
          </h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: "480px" }}>
                <img
                  src={images["Sk-img2.png"]}
                  className="card-img-top"
                  alt="Seoul"
                  style={{ height: "235px" }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Seoul</h5>
                  <p className="card-text">
                    Experience the bustling city life, rich history, and iconic landmarks of Seoul.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} /> 35,000
                  </p>
                  <div className="d-flex flex-row gap-4">
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faPlane} />
                    </span>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faBuilding} />
                    </span>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faTaxi} />
                    </span>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faBowlFood} />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: "480px" }}>
                <img
                  src={images["Sk-img3.png"]}
                  className="card-img-top"
                  alt="Busan"
                  style={{ height: "236px" }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Busan</h5>
                  <p className="card-text">
                    Enjoy the serene beaches, traditional markets, and scenic coastal views of Busan.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} /> 28,000
                  </p>
                  <div className="d-flex flex-row gap-4">
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faPlane} />
                    </span>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faBuilding} />
                    </span>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faTaxi} />
                    </span>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faBowlFood} />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: "480px" }}>
                <img
                  src={images["Sk-img4.png"]}
                  className="card-img-top"
                  alt="Jeju Island"
                  style={{ height: "236px" }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Jeju Island</h5>
                  <p className="card-text">
                    Explore the volcanic landscapes, waterfalls, and unique culture of Jeju Island.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} /> 40,000
                  </p>
                  <div className="d-flex flex-row gap-4">
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faPlane} />
                    </span>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faBuilding} />
                    </span>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faTaxi} />
                    </span>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faBowlFood} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/package">
            <div className="container mt-5 d-flex justify-content-center">
              <button className="btn btn-primary px-3 py-0 fs-5">Back</button>
            </div>
          </Link>
        </section>
      </div>
    </>
  );
};

export default SouthKorea;
