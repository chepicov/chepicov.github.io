import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRepository } from '../../resources/repository/repository.actions.js';
import fromStore from '../../resources/index.selectors.js';
import RepositoryListItem from './components/repositoryItem/repositoryItem.jsx';

class RepositoriesList extends React.PureComponent {
  componentDidMount = () => {
    this.props.fetchRepository();
  }

  render() {
    const repositoriesItems = this.props.repositoriesList;
    const repositoriesListItems = repositoriesItems
      .map(repositoryItem => (
        <RepositoryListItem repository={repositoryItem} key={repositoryItem.id} />
      ));

    return (
      <div className="podcast-list-wrapper">
        <div className="main-view">
          <ul className="podcasts-list">
            {repositoriesListItems}
          </ul>
        </div>
      </div>
    );
  }
}

RepositoriesList.propTypes = {
  fetchRepository: PropTypes.func.isRequired,
  repositoriesList: PropTypes.any.isRequired,
};

export default connect((state, props) => {
  const repositoriesList = fromStore.getRepositories(state);
  return {
    repositoriesList,
  };
}, {
  fetchRepository,
})(RepositoriesList);
