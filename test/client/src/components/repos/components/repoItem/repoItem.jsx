import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RepoListItem = (props) => {
  const { repo } = props;
  return (
    <li className="list-item">
      <Link to={`/${repo.name}/commits`}>
        <span className="list-item__title">
          {repo.name}
        </span>
      </Link>
    </li>
  );
};

RepoListItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoListItem;
