import React from 'react'
import { Link } from 'react-router-dom';

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
};

const images = importAll(require.context('/public/images', false, /\.(png|jpe?g|svg|webp)$/));

export const Home = () => {
    return (
        <>
            <div id='header' class="container my-md-5 my-0">
                <div class="row g-lg-5">
                    {/* <!-- First Column: Booking Form --> */}
                    <div id='booking-form' class="col-md-6 pt-4 rounded-3 shadow">
                        <h3 class="mb-4">Book Your Flight</h3>
                        <form>
                            {/* <!-- From and To (same row) --> */}
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="from" class="form-label">From</label>
                                    <input type="text" class="form-control" id="from" placeholder="Enter departure city" required />
                                </div>
                                <div class="col-md-6">
                                    <label for="to" class="form-label">To</label>
                                    <input type="text" class="form-control" id="to" placeholder="Enter destination city" required />
                                </div>
                            </div>
                            {/* <!-- Depart and Return Dates (same row) --> */}
                            <div class="row g-3 mt-3">
                                <div class="col">
                                    <label for="departDate" class="form-label">Depart Date</label>
                                    <input type="date" class="form-control" id="departDate" required />
                                </div>
                                {/* <div class="col-md-6">
                                    <label for="returnDate" class="form-label">Return Date</label>
                                    <input type="date" class="form-control" id="returnDate" />
                                </div> */}
                            </div>
                            {/* <!-- Travellers and Cabin --> */}
                            <div class="mb-3 mt-3">
                                <label for="travellersCabin" class="form-label">Travellers and Cabin</label>
                                <input type="text" class="form-control" id="travellersCabin" placeholder="E.g., 2 Adults, Business Class" required />
                            </div>
                            {/* <!-- Submit Button --> */}
                            <div>
                                <Link to='/seatbook'><button type="submit" class="btn btn-primary w-100 mt-md-4 my-3">Search Flights</button></Link>
                            </div>
                        </form>
                    </div>

                    {/* <!-- Second Column: Bootstrap Carousel --> */}
                    <div class="col-md-6 mt-5">
                        <h3 class="mb-4 text-decoration-underline text-primary">Popular Destinations</h3>
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                            {/* <!-- Indicators --> */}
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            {/* <!-- Carousel Items --> */}
                            <div class="carousel-inner rounded">
                                <div class="carousel-item active">
                                    <img src={images['paris.jpg']} class="d-block w-100" style={{ height: '400px' }} alt="Slide 1" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5 className='display-6'>Paris</h5>
                                        <p className='fs-5'>Experience the City of Light.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={images['newyork.jpg']} class="d-block w-100" style={{ height: '400px' }} alt="Slide 2" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5 className='display-6'>New York</h5>
                                        <p className='fs-5'>The city that never sleeps.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={images['tokyo.jpg']} class="d-block w-100" style={{ height: '400px' }} alt="Slide 3" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5 className='display-6'>Tokyo</h5>
                                        <p className='fs-5'>Discover the heart of Japan.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={images['dubai.jpg']} class="d-block w-100" style={{ height: '400px' }} alt="Slide 4" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5 className='display-6'>Dubai</h5>
                                        <p className='fs-5'>Luxury and modern architecture.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Controls --> */}
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div id="reasons" className="row my-5 px-3 gap-2">
                    <h5 className="text-center mb-3 pb-2 text-primary">Reasons to book with us?</h5>

                    <div className="col-12 col-md rounded-2 p-4 border shadow text-primary">
                        <h6>FAST BOOKING</h6>
                        <p className='text-dark'>We offer fast booking, fantastic products, competitive pricing & amazing experience.</p>
                    </div>

                    <div className="col-12 col-md rounded-2 p-4 border shadow text-primary">
                        <h6>EXCITING DEALS</h6>
                        <p className='text-dark'>Book exciting deals on with published & exclusive flights.</p>
                    </div>

                    <div className="col-12 col-md rounded-2 p-4 border shadow text-primary">
                        <h6>24/7 SUPPORT</h6>
                        <p className='text-dark'>Get assistance 24/7 on any kind of travel-related query. We are happy to assist you.</p>
                    </div>
                </div>

                <div id="offers" className="row gap-2 px-3">
                    <h4 className="text-center mb-3 pb-2 text-primary">Exciting Offers</h4>

                    <div className="col-12 col-md">
                        <img
                            alt=""
                            src={images['offer1.jpg']}
                            className="d-block w-100 rounded-2"
                            
                        />
                    </div>

                    <div className="col-12 col-md">
                        <img
                            alt=""
                            src={images['offer2.jpg']}
                            className="d-block w-100 rounded-2"
                            style={{ height: '230px' }}
                        />
                    </div>

                    <div className="col-12 col-md">
                        <img
                            alt=""
                            src={images['offer3.jpg']}
                            className="d-block w-100 rounded-2"
                            style={{ height: '230px' }}
                        />
                    </div>
                </div>
            </div>


            {/* <div className="my-5">
                <img
                    alt="Flight Banner"
                    src={images['flight-banner.jpeg']}
                    style={{ width: '95rem', height: '500px' }}
                />
            </div> */}


            <div id="reviews" className="text-secondary my-4">
                <h4 className="text-center mb-4 pb-2">Customer Reviews</h4>
                <div
                    id="carouselReviews"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                            <div className="p-4">
                                <p>"Amazing service! The booking process was seamless and stress-free."</p>
                                <div>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-half text-warning"></i>
                                </div>
                                <p className="text-muted">- John Doe</p>
                            </div>
                        </div>
                        <div className="carousel-item text-center">
                            <div className="p-4">
                                <p>"Great deals and fantastic customer support. Highly recommend!"</p>
                                <div>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                </div>
                                <p className="text-muted">- Jane Smith</p>
                            </div>
                        </div>
                        <div className="carousel-item text-center">
                            <div className="p-4">
                                <p>"24/7 support made our trip stress-free. Thanks for the amazing experience!"</p>
                                <div>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>
                                </div>
                                <p className="text-muted">- Alex Johnson</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselReviews"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselReviews"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


        </>
    )
}
