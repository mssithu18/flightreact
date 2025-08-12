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

const London = () => {
  return (
    <>
      <div>
        {/* Header Section */}
        <header>
          <img
            src={images["Main.png"]} // Update with the London header image
            alt="London"
            style={{ width: "100%", height: "auto" }}
          />
        </header>

        {/* Packages Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">
            <span className="text-danger">Explore</span> London
          </h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: "480px" }}>
                <img
                  src={images["L-img4.png"]} // Update with Big Ben image
                  className="card-img-top"
                  alt="Big Ben"
                  style={{ height: "240px" }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Big Ben</h5>
                  <p className="card-text">
                    Visit the iconic clock tower and take in the history and charm of London.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} />70,000
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
                  src={images["L-img3.png"]} // Update with Tower Bridge image
                  className="card-img-top"
                  alt="Tower Bridge"
                  style={{ height: "236px" }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Tower Bridge</h5>
                  <p className="card-text">
                    Walk across the famous bridge and enjoy stunning views of the Thames River.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} />50,000
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
                  src={images["L-img2.png"]} // Update with Buckingham Palace image
                  className="card-img-top"
                  alt="Buckingham Palace"
                  style={{ height: "236px" }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Buckingham Palace</h5>
                  <p className="card-text">
                    Witness the grandeur of the royal residence and watch the Changing of the Guard.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} />60,000
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

            <Link to="/package">
              <div className="container mt-5 d-flex justify-content-center">
                <button className="btn btn-primary px-3 py-1 fs-5">Back</button>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default London;
