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

const Dubai = () => {
  return (
    <>
      <div>
        {/* Header Section */}
        <header>
          <img
            src={images["Main.png"]} // Update with the Dubai header image
            alt="Dubai"
            style={{ width: "100%", height: "auto" }}
          />
        </header>

        {/* Packages Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">
            <span className="text-danger">Explore</span> Dubai
          </h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: "480px" }}>
                <img
                  src={images["D-img2.png"]} // Update with Burj Khalifa image
                  className="card-img-top"
                  alt="Burj Khalifa"
                  style={{ height: "240px" }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Burj Khalifa</h5>
                  <p className="card-text">
                    Visit the tallest building in the world and enjoy breathtaking views of Dubai.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} />50,000
                  </p>
                  <p className="d-flex flex-row gap-4">
                    <p className="text-primary">
                      <FontAwesomeIcon icon={faPlane} />
                    </p>
                    <p className="text-primary">
                      <FontAwesomeIcon icon={faBuilding} />
                    </p>
                    <p className="text-primary">
                      <FontAwesomeIcon icon={faTaxi} />
                    </p>
                    <p className="text-primary">
                      <FontAwesomeIcon icon={faBowlFood} />
                    </p>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: "480px" }}>
                <img
                  src={images["D-img3.png"]} // Update with Desert Safari image
                  className="card-img-top"
                  alt="Desert Safari"
                  style={{ height: "236px" }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Desert Safari</h5>
                  <p className="card-text">
                    Experience the thrill of desert adventures and traditional Emirati culture.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} />30,000
                  </p>
                  <p className="d-flex flex-row gap-4">
                    <p className="text-primary">
                      <FontAwesomeIcon icon={faPlane} />
                    </p>
                    <p className="text-primary">
                      <FontAwesomeIcon icon={faBuilding} />
                    </p>
                    <p className="text-primary">
                      <FontAwesomeIcon icon={faTaxi} />
                    </p>
                    <p className="text-primary">
                      <FontAwesomeIcon icon={faBowlFood} />
                    </p>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: "480px" }}>
                <img
                  src={images["D-img4.png"]} // Update with Palm Jumeirah image
                  className="card-img-top"
                  alt="Palm Jumeirah"
                  style={{ height: "236px" }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Palm Jumeirah</h5>
                  <p className="card-text">
                    Explore the iconic man-made island and enjoy luxury resorts.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} />45,000
                  </p>
                  <p className="d-flex flex-row gap-4">
                    <p className="text-primary">
                      <FontAwesomeIcon icon={faPlane} />
                    </p>
                    <p className="text-primary">
                      <FontAwesomeIcon icon={faBuilding} />
                    </p>
                    <p className="text-primary">
                      <FontAwesomeIcon icon={faTaxi} />
                    </p>
                    <p className="text-primary">
                      <FontAwesomeIcon icon={faBowlFood} />
                    </p>
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

export default Dubai;
