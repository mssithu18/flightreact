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


const Paris = () => {
  return (
    <>
      <div>
        {/* Header Section */}
        <header>
          <img
            src={images['Main.png']}
            alt="Paris"
            style={{ width: "100%", height: "auto" }}
          />
        </header>

        {/* Packages Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">
            <span className="text-danger">Discover</span> Paris
          </h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: '480px' }}>
                <img
                  src={images['P-img2.png']}
                  className="card-img-top"
                  alt="Eiffel Tower"
                  style={{ height: '235px' }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Eiffel Tower</h5>
                  <p className="card-text">
                    Experience the iconic Eiffel Tower and breathtaking views of Paris.
                  </p>
                  <p className="text-primary fs-5 fw-bold"><FontAwesomeIcon icon={faInr} />50,000</p>
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
                  src={images['P-img3.png']}
                  className="card-img-top"
                  alt="Louvre Museum"
                  style={{ height: '236px' }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Louvre Museum</h5>
                  <p className="card-text">
                    Explore the world-famous art collections at the Louvre.
                  </p>
                  <p className="text-primary fs-5 fw-bold"><FontAwesomeIcon icon={faInr} />45,000</p>
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
                  src={images['P-img4.png']}
                  className="card-img-top"
                  alt="Notre Dame"
                  style={{ height: '236px' }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Notre Dame Cathedral</h5>
                  <p className="card-text">
                    Marvel at the Gothic architecture of Notre Dame.
                  </p>
                  <p className="text-primary fs-5 fw-bold"><FontAwesomeIcon icon={faInr} />40,000</p>
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

export default Paris;
