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


const Malaysia = () => {
  return (
    <>
     <div>
      {/* Header Section */}
      <header>
        <img
          src={images['Main.png']}
          alt="Malaysia"
          style= {{ width: "100%", height: "auto" }}
        />
      </header>

      {/* Packages Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4"><span  className="text-danger">Explore</span> Malaysia</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 my-3">
            <div className="card" style={{height:'480px'}}>
              <img
                src={images['M-img2.png']}
                className="card-img-top"
                alt="Kuala Lumpur"
                style={{height:'235px'}}
              />
              <label  className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
              <div className="card-body">
                <h5 className="card-title">Kuala Lumpur</h5>
                <p className="card-text">
                  Discover the vibrant capital of Malaysia with its iconic
                  skyline.
                </p>
                <p className="text-primary fs-5 fw-bold"><FontAwesomeIcon icon={ faInr}  />20,000</p>
                <p  className="d-flex flex-row  gap-4">
                <p  className="text-primary"> <FontAwesomeIcon icon={ faPlane}  /></p>
                <p  className="text-primary"> <FontAwesomeIcon icon={ faBuilding}  /></p>
                <p  className="text-primary"> <FontAwesomeIcon icon={ faTaxi}  /></p>
                <p  className="text-primary"> <FontAwesomeIcon icon={ faBowlFood}  /></p>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 my-3">
            <div className="card" style={{height:'480px'}}>
              <img
                src={images['M-img3.png']}
                className="card-img-top"
                alt="Langkawi"
                style={{height:'236px'}}
              />
               <label  className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
              <div className="card-body">
                <h5 className="card-title">Langkawi</h5>
                <p className="card-text">
                  Relax on the pristine beaches of Langkawi and enjoy duty-free
                  shopping.
                </p>
                <p className="text-primary fs-5 fw-bold"><FontAwesomeIcon icon={ faInr}  />22,000</p>
                <p  className="d-flex flex-row  gap-4">
                <p  className="text-primary"> <FontAwesomeIcon icon={ faPlane}  /></p>
                <p  className="text-primary"> <FontAwesomeIcon icon={ faBuilding}  /></p>
                <p  className="text-primary"> <FontAwesomeIcon icon={ faTaxi}  /></p>
                <p  className="text-primary"> <FontAwesomeIcon icon={ faBowlFood}  /></p>
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 my-3">
            <div className="card" style={{height:'480px'}}>
              <img
                src={images['M-img4.png']}
                className="card-img-top"
                alt="Penang"
                style={{height:'236px'}}
              />
               <label  className="h6 bg-primary text-white p-1 ps-2">Special Deal</label>
              <div className="card-body">
                <h5 className="card-title">Penang</h5>
                <p className="card-text">
                  Experience the cultural heritage and cuisine of Penang.
                </p>
                <p className="text-primary fs-5 fw-bold"><FontAwesomeIcon icon={ faInr}  />19,000</p>
                <p  className="d-flex flex-row  gap-4">
                <p  className="text-primary"> <FontAwesomeIcon icon={ faPlane}  /></p>
                <p  className="text-primary"> <FontAwesomeIcon icon={ faBuilding}  /></p>
                <p  className="text-primary"> <FontAwesomeIcon icon={ faTaxi}  /></p>
                <p  className="text-primary"> <FontAwesomeIcon icon={ faBowlFood}  /></p>
                </p>
              </div>
            </div>
          </div>
          <Link to="/package" ><div className="container mt-5  d-flex  justify-content-center">
      <button className="btn btn-primary px-3 py-1 fs-5">Back</button>
      </div></Link>
        </div>
      </section>
    </div>     </>
  );
};

export default Malaysia;
