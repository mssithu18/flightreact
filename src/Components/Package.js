import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(
  require.context("/public/images", false, /\.(png|jpe?g|svg|webp)$/)
);

const Package = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const destinations = [
    { name: "Malaysia", price: "₹25,000", img: "malaysia.jpg", link: "/malaysia" },
    { name: "Kashmir", price: "₹7,499", img: "kashmir.jpg", link: "/kashmir" },
    { name: "Thailand", price: "₹19,999", img: "thailand.jpg", link: "/thailand" },
    { name: "Kerala", price: "₹8,999", img: "kerala.jpg", link: "/kerala" },
    { name: "Dubai", price: "₹22,222", img: "dubai.jpg", link: "/dubai" },
    { name: "London", price: "₹24,999", img: "london.jpg", link: "/london" },
    { name: "Paris", price: "₹20,000", img: "paris.jpg", link: "/paris" },
    { name: "South Korea", price: "₹23,000", img: "korea.jpg", link: "/southkorea" },
  ];

  // Filter destinations based on the search query
  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <div className="position-relative">
        <img
          src={images["tr.jpg"]}
          alt=""
          className="img-fluid w-100"
          style={{
            height: "300px",
            objectFit: "cover",
            filter: "brightness(70%)",
          }}
        />
        <div
          className="position-absolute top-50 start-50 translate-middle text-center"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <h1 className="text-white fw-bold mb-3">Find Your Perfect Destination</h1>
          <input
            type="text"
            className="form-control shadow"
            placeholder="Enter your destination"
            style={{
              height: "45px",
              border: "none",
              borderRadius: "10px",
              background: "#f8f9fa",
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4 mt-5" style={{ color: "deepskyblue" }}>
          𝐖𝐡𝐲 𝐂𝐡𝐨𝐨𝐬𝐞 𝐔𝐬?
        </h2>
        <div
          className={`row justify-content-center text-center g-4 ${
            searchQuery ? "d-none" : ""
          }`}
        >
          {/* Feature Cards */}
          {[
            { img: images["airoplan.png"], title: "All Inclusive Rates", delay: "0s" },
            { img: images["24.png"], title: "24/7 Support", delay: "2s" },
            { img: images["package.png"], title: "Custom Packages", delay: "4s" },
            { img: images["luxury.png"], title: "Luxury Travel", delay: "6s" },
            { img: images["dependable.png"], title: "Trusted Partners", delay: "8s" },
          ].map((feature, index) => (
            <div
              key={index}
              className="col-sm-6 col-md-2 d-flex justify-content-center"
              style={{
                animation: "slideIn 10s infinite",
                animationDelay: feature.delay,
                opacity: 0,
              }}
            >
              <div className="p-4" style={{ borderColor: "#e0e0e0" }}>
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="img-fluid mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#e3f2fd",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                />
                <h5 className="fw-bold">{feature.title}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Keyframes */}
        <style>
          {`
            @keyframes slideIn {
              0% {
                opacity: 0;
                transform: translateY(50px);
              }
              20% {
                opacity: 1;
                transform: translateY(0);
              }
              80% {
                opacity: 1;
                transform: translateY(0);
              }
              100% {
                opacity: 0;
                transform: translateY(-50px);
              }
            }
          `}
        </style>
      </div>

      {/* Destination Cards */}
      <div className="container my-5">
        <h2
          className="text-center mb-4"
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <span className="text-danger m-2">Top Selling</span>
          <span className="mt-2">Destinations</span>
        </h2>

        {/* Responsive Card Grid */}
        <div className="row g-4 mt-4">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
              >
                <Link className="text-decoration-none" to={destination.link}>
                  <div className="card border-0 shadow-sm">
                    <img
                      src={images[destination.img]}
                      className="card-img-top"
                      alt={destination.name}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{destination.name}</h5>
                      <p className="card-text text-primary">
                        {destination.price}{" "}
                        <small className="text-muted">Starting Price</small>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h5 className="text-muted">No destinations found for "{searchQuery}"</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Package;
