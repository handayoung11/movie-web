import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ title, coverImg, summary, genres }) {
  return (
    <div>
      <Link to="/movie">
        <h2>{title}</h2>
      </Link>
      <img alt={title} src={coverImg} />
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
