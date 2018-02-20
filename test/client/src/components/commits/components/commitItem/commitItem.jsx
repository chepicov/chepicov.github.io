import React from 'react';
import PropTypes from 'prop-types';

const RepoListItem = (props) => {
  const { commit } = props;
  return (
    <li className="podcasts-list__item">
      <h1 className="podcast-header__title">
        {commit.title}
      </h1>
    </li>
  );
};

RepoListItem.propTypes = {
  commit: PropTypes.object.isRequired,
};

export default RepoListItem;
