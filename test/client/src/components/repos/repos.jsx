import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRepo } from 'resources/repo/repo.actions';
import fromStore from 'resources/index.selectors';
import Spinner from 'components/common/spinner';
import RepoListItem from './components/repoItem/repoItem';

import './repos.styles';

class ReposList extends React.PureComponent {
  state = {
    isLoading: true,
  };

  componentDidMount = () => {
    this.props.fetchRepo();
    this.setState({ isLoading: false });
  }

  render() {
    const reposItems = this.props.reposList;
    const reposListItems = reposItems
      .map(repoItem => (
        <RepoListItem repo={repoItem} key={repoItem.id || 0} />
      ));

    return !this.state.isLoading ? (
      <div className="repo">
        <h1 className="repo__header">Facebook Repositories</h1>
        <ul className="repo__list">
          {reposListItems}
        </ul>
      </div>
    ) : (
      <Spinner />
    );
  }
}

ReposList.propTypes = {
  fetchRepo: PropTypes.func.isRequired,
  reposList: PropTypes.any.isRequired,
};

export default connect((state, props) => {
  const reposList = fromStore.getRepos(state);
  return {
    reposList,
  };
}, {
  fetchRepo,
})(ReposList);
