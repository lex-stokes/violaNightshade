import React, { Component } from 'react';

//formatting 
const Events = () => {
    return (
        <>
        <h1 className='mainHeader'>Upcoming Events</h1>
        <div className='allEvents'>
        <div className='eventBox'>
        <h3>Title</h3>
        <h6>Date</h6>
        <p>With some words</p>
        </div>
        <div className='eventBox'>
        <h3>Title</h3>
        <h6>Date</h6>
        <p>With some words</p>
        </div>
        <div className='eventBox'>
        <h3>Title</h3>
        <h6>Date</h6>
        <p>With some words</p>
        </div>
        </div>
        </>
    )
}

export default Events