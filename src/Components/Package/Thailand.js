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
};

const images = importAll(require.context('/public/images', false, /\.(png|jpe?g|svg|webp)$/));

const Thailand = () => {
  return (
    <>
      <div>
        {/* Header Section */}
        <header>
          <img
            src={images['Main.png']} // Replace with Thailand-specific image
            alt="Thailand"
            style={{ width: "100%", height: "auto" }}
          />
        </header>

        {/* Packages Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">
            <span className="text-danger">Explore</span> Thailand
          </h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 my-3">
              <div className="card" style={{ height: '480px' }}>
                <img
                  src={images['T-img2.png']} // Replace with a Bangkok image
                  className="card-img-top"
                  alt="Bangkok"
                  style={{ height: '235px' }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Bangkok</h5>
                  <p className="card-text">
                    Experience the vibrant nightlife and cultural landmarks of Thailand's capital.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} /> 25,000
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
              <div className="card" style={{ height: '480px' }}>
                <img
                  src={images['T-img3.png']} // Replace with a Phuket image
                  className="card-img-top"
                  alt="Phuket"
                  style={{ height: '236px' }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Phuket</h5>
                  <p className="card-text">
                    Relax on the stunning beaches of Phuket and explore its vibrant markets.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} /> 28,000
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
              <div className="card" style={{ height: '480px' }}>
                <img
                  src={images['T-img4.png']} // Replace with a Chiang Mai image
                  className="card-img-top"
                  alt="Chiang Mai"
                  style={{ height: '236px' }}
                />
                <label className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
                <div className="card-body">
                  <h5 className="card-title">Chiang Mai</h5>
                  <p className="card-text">
                    Discover ancient temples and the scenic mountains of Chiang Mai.
                  </p>
                  <p className="text-primary fs-5 fw-bold">
                    <FontAwesomeIcon icon={faInr} /> 22,000
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
                <button className="btn btn-primary px-3 py-0 fs-4">Back</button>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Thailand;
