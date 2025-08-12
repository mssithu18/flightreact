import React from 'react'

export const Seatbook = () => {
  return (
    <>
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow-lg p-3" style={{ width: '350px', borderRadius: '10px' }}>
        <div className="card-body text-center">
          <h3 className="card-title mb-4" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#007bff' }}>
            Flight Details
          </h3>
          <div className="flight-info text-start">
            {/* Flight No */}
            <div className="mb-3">
              <strong>Flight No:</strong> <span>AB123</span>
            </div>

            {/* Origin and Destination */}
            <div className="d-flex justify-content-between mb-3">
              <div>
                <strong>Origin:</strong>
                <p className="mb-0">New York</p>
              </div>
              <div>
                <strong>Destination:</strong>
                <p className="mb-0">London</p>
              </div>
            </div>

            {/* Departure and Arrival */}
            <div className="d-flex justify-content-between mb-3">
              <div>
                <strong>Departure:</strong>
                <p className="mb-0">10:00 AM</p>
              </div>
              <div>
                <strong>Arrival:</strong>
                <p className="mb-0">2:00 PM</p>
              </div>
            </div>

            {/* Seat and Rate */}
            <div className="d-flex justify-content-between mb-3">
              <div>
                <strong>Seat:</strong>
                <p className="mb-0">A1</p>
              </div>
              <div>
                <strong>Rate:</strong>
                <p className="mb-0">$500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
