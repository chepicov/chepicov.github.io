import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Link } from 'react-router-dom';

function RepositoryListItem(props) {
  const { repository, key } = props;
  return (
    <li className="podcasts-list__item" key={key || ''}>
      <Link href={`/${repository.id}/commits`}>
        <h1 className="podcast-header__title">
          {repository.title}
        </h1>
      </Link>
    </li>
  );
}

RepositoryListItem.propTypes = {
  repository: PropTypes.object.isRequired,
  key: PropTypes.string.isRequired,
};

export default RepositoryListItem;
