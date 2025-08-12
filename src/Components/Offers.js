import React from 'react';

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const images = importAll(require.context('/public/images', false, /\.(png|jpe?g|svg|webp)$/));

export const Offers = () => {
  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">Exclusive First-Class Flight Offers</h1>
        <p className="lead text-muted">Fly in luxury with the best deals on first-class flights.</p>
      </header>

      <section className="row g-4">
        {[
          { city: 'Paris', price: '₹28,500', image: 'img0.jpg', description: 'Experience comfort and luxury as you fly Paris in first class.' },
          { city: 'Bangkok', price: '₹30,000', image: 'img1.jpg', description: 'Enjoy world-class amenities and service during your flight to Bangkok.' },
          { city: 'Dubai', price: '₹22,000', image: 'img2.jpg', description: 'Travel in style with full reclining seats and gourmet dining from Dubai to Los Angeles.' },
          { city: 'London', price: '₹22,000', image: 'london.jpg', description: 'Travel in style with full reclining seats and gourmet dining in London.' },
          { city: 'Hong Kong', price: '₹22,000', image: 'img3.jpg', description: 'Experience luxurious flights to Hong Kong and Enjoy with our package for Hong Kong.' },
          { city: 'Malaysia', price: '₹25,000', image: 'img5.jpg', description: 'Travel in luxury flights to Malaysia with top-notch services in our package.' },
          { city: 'Singapore', price: '₹25,000', image: 'img6.jpg', description: 'Fly to Singapore with premium first-class amenities.' },
          { city: 'Canada', price: '₹30,000', image: 'img7.jpg', description: 'Enjoy a luxurious flight to Canada in first class.' },
          { city: 'South Korea', price: '₹20,000', image: 'korea.jpg', description: 'Experience first-class travel to South Korea.' },
        ].map((offer, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card shadow-sm">
              <img src={images[offer.image]} className="card-img-top" alt={offer.city} />
              <div className="card-body">
                <h5 className="card-title">{offer.city}</h5>
                <p className="card-text">{offer.description}</p>
                <p className="card-text fw-bold text-primary">{offer.price}</p>
               
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
