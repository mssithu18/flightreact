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

const Kashmir = () => {
  return (
    <>
      <div>
        {/* Header Section */}
        <header>
          <img
            src={images["Main.png"]}
            alt="Kashmir"
            style={{ width: "100%", height: "auto" }}
          />
        </header>

        {/* Packages Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">
            <span className="text-danger">Explore</span> Kashmir
          </h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: "480px" }}>
                <img
                  src={images["Ka-img2.png"]}
                  className="card-img-top"
                  alt="Srinagar"
                  style={{ height: "267px" }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Srinagar</h5>
                  <p className="card-text">
                    Discover the beauty of Dal Lake and the iconic Shikara rides in Srinagar.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} /> 25,000
                  </p>
                  <p className="d-flex flex-row gap-4">
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
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: "480px" }}>
                <img
                  src={images["Ka-img3.png"]}
                  className="card-img-top"
                  alt="Gulmarg"
                  style={{ height: "236px" }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Gulmarg</h5>
                  <p className="card-text">
                    Enjoy the snow-clad mountains and skiing adventures in Gulmarg.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} /> 28,000
                  </p>
                  <p className="d-flex flex-row gap-4">
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
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: "480px" }}>
                <img
                  src={images["Ka-img4.png"]}
                  className="card-img-top"
                  alt="Pahalgam"
                  style={{ height: "236px" }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Pahalgam</h5>
                  <p className="card-text">
                    Experience serene valleys and the beauty of Betaab Valley in Pahalgam.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} /> 22,000
                  </p>
                  <p className="d-flex flex-row gap-4">
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
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/package">
            <div className="container mt-5 d-flex justify-content-center">
              <button className="btn btn-primary px-3 py-1 fs-5">Back</button>
            </div>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Kashmir;
