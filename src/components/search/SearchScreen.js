import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import useForm from '../../hooks/useForm';
import HeroCard from '../hero/HeroCard';
import { useMemo } from 'react';

const SearchScreen = () => {
  const navigate = useNavigate(),
    location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({ searchText: q });

  const { searchText } = formValues;

  const heroesFilted = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <div className='animate__animated animate__fadeIn'>
      <h2>Busquedas</h2>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe..."
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-outline-primary btn-block mt-3"
              >
                buscar
              </button>
            </div>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {q === '' ? (
            <div className="alert alert-info animate__animated animate__fadeIn">
              Buscar un heroe
            </div>
          ) : (
            heroesFilted.length === 0 && (
              <div className="alert alert-danger animate__animated animate__fadeIn">
                No hay resultados {q}
              </div>
            )
          )}

          {heroesFilted.map((hero) => (
            <HeroCard
              key={hero.id}
              {...hero}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
