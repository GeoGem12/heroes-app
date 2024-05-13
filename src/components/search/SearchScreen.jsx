import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../form/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { useMemo } from 'react';

export const SearchScreen = () => {

    const { search } = useLocation();
    const { q = '' } = (queryString.parse(search));

    const [values, handleInputChange] = useForm({ hero: q });

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const navigate = useNavigate();
    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`?q=${values.hero}`, { push: true });
    };

    return (
        <div>
            <h1> Search Screen </h1>
            <hr />

            <div className='row'>

                <div className='col-5'>
                    <h4> Seach Form </h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            name='hero'
                            autoComplete='off'
                            value={values.hero}
                            placeholder='Find your hero'
                            className='form-control'
                            onChange={handleInputChange}
                        />

                        <button
                            type='submit'
                            className='btn m-1 btn-block btn-outline-primary my-3'
                        >
                            Search...
                        </button>
                    </form>

                </div>

                <div className='col-7'>
                    <h4> Results </h4>
                    <hr />

                    {
                        (q === '')
                        &&
                        <div className='alert alert-info'>
                            Search a hero
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className='alert alert-danger'>
                            There is no a hero with "{q}"
                        </div>
                    }


                    <div className='row'>
                        {
                            heroesFiltered.map(hero => (
                                < HeroCard
                                    key={hero.id}
                                    {...hero} />

                            ))
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}
