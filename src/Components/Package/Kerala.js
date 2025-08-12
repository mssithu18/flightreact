import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

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
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(require.context('/public/images', false, /\.(png|jpe?g|svg|webp)$/));

const Kerala = () => {
  return (
    <>
      <div>
        {/* Header Section */}
        <header>
          <img
            src={images['Main.png']}
            alt="Kerala"
            style={{ width: "100%", height: "auto" }}
          />
        </header>

        {/* Packages Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">
            <span className="text-danger">Explore</span> Kerala
          </h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: '480px' }}>
                <img
                  src={images['K-img2.png']}
                  className="card-img-top"
                  alt="Munnar"
                  style={{ height: '235px' }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Munnar</h5>
                  <p className="card-text">
                    Explore the lush green tea gardens and breathtaking hills of Munnar.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} /> 15,000
                  </p>
                  <p className="d-flex flex-row gap-4">
                    <span className="text-primary"><FontAwesomeIcon icon={faPlane} /></span>
                    <span className="text-primary"><FontAwesomeIcon icon={faBuilding} /></span>
                    <span className="text-primary"><FontAwesomeIcon icon={faTaxi} /></span>
                    <span className="text-primary"><FontAwesomeIcon icon={faBowlFood} /></span>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: '480px' }}>
                <img
                  src={images['K-img3.png']}
                  className="card-img-top"
                  alt="Alleppey"
                  style={{ height: '236px' }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Alleppey</h5>
                  <p className="card-text">
                    Relax on the tranquil backwaters of Alleppey in luxurious houseboats.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} /> 18,000
                  </p>
                  <p className="d-flex flex-row gap-4">
                    <span className="text-primary"><FontAwesomeIcon icon={faPlane} /></span>
                    <span className="text-primary"><FontAwesomeIcon icon={faBuilding} /></span>
                    <span className="text-primary"><FontAwesomeIcon icon={faTaxi} /></span>
                    <span className="text-primary"><FontAwesomeIcon icon={faBowlFood} /></span>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: '480px' }}>
                <img
                  src={images['Ka-img2.png']}
                  className="card-img-top"
                  alt="Kochi"
                  style={{ height: '236px' }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Kochi</h5>
                  <p className="card-text">
                    Discover the historical charm of Kochi and its serene beaches.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} /> 12,000
                  </p>
                  <p className="d-flex flex-row gap-4">
                    <span className="text-primary"><FontAwesomeIcon icon={faPlane} /></span>
                    <span className="text-primary"><FontAwesomeIcon icon={faBuilding} /></span>
                    <span className="text-primary"><FontAwesomeIcon icon={faTaxi} /></span>
                    <span className="text-primary"><FontAwesomeIcon icon={faBowlFood} /></span>
                  </p>
                </div>
              </div>
            </div>

            {/* Back Button */}
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

export default Kerala;
