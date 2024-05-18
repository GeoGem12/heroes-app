import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const navigate = useNavigate();

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

    if (!hero) {
        return <Navigate to="/" replace={true} />
    }

    const handleReturn = () => {
        if (navigate.length <= 2) {
            navigate("/", { push: true });
        } else {
            navigate(-1)
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className='row mt-5' style={{ maxWidth: 850 }}>
            <div className='col-md-4'>
                <img src={`/assets/HeroesWeb/${heroeId}.jpg`}
                    alt={superhero}
                    className='img-fluid rounded-start animate__animated animate__fadeInLeft'
                />
            </div>

            <div className='col-8'>
                <h3> {superhero} </h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b> Alter ego: </b> {alter_ego} </li>
                    <li className='list-group-item'> <b> Publisher: </b> {publisher} </li>
                    <li className='list-group-item'> <b> Firs Appearance: </b> {first_appearance} </li>
                </ul>

                <h4> Characters </h4>
                <p> {characters} </p>

                <button
                    className='btn btn-outline-info'
                    onClick={handleReturn}
                >
                    Return

                </button>
            </div>
        </div >
    )
}
