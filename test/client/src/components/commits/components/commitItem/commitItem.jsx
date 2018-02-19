import React from 'react';
import PropTypes from 'prop-types';

function RepositoryListItem(props) {
  const { commit } = props;
  return (
    <li className="podcasts-list__item">
      <h1 className="podcast-header__title">
        {commit.title}
      </h1>
    </li>
  );
}

RepositoryListItem.propTypes = {
  commit: PropTypes.object.isRequired,
};

export default RepositoryListItem;
