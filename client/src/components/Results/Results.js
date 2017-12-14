import React from 'react';
import Event from '../Event'

const Results = props =>

    <div className= 'container'>
        <div className='row'>
        {props.venues.map((venue, index) =>(
          <Event 
            venueId = {venue.id}
            name = {venue.name}
            type = {venue.categories[0].name}
            address = {venue.formattedAddress}
            url = {venue.url}
            checkins = {venue.stats.checkinsCount}
            users = {venue.stats.usersCount}
            busy = {venue.hereNow.count}
            key = {index}
            saved = {false}
          />
          ))
        }
        </div>
    </div>

export default Results;