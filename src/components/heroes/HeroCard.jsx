import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className='col-md-4 mb-3'>
            <div className='card h-100'>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img src={`src/assets/heroes/${id}.jpg`} className='img-fluid rounded-start' alt='{superhero}' />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body d-flex flex-column h-100'>
                            <h5 className='card-title'> {superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>

                            {
                                (alter_ego !== characters)
                                && <p className='card-text'> {characters}</p>
                            }

                            <p className='card-text mt-auto'>
                                <small className='text-body-secondary'>{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
