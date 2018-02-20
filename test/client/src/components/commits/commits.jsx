import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCommit } from 'resources/commit/commit.actions';
import fromStore from 'resources/index.selectors';
import CommitListItem from './components/commitItem/commitItem';

class CommitsList extends React.PureComponent {
  componentDidMount = () => {
    this.props.fetchCommit();
  }

  render() {
    const commitsItems = this.props.commitsList;
    const commitsListItems = commitsItems
      .map(commitItem => (
        <CommitListItem commit={commitItem} />
      ));

    return (
      <div className="podcast-list-wrapper">
        <div className="main-view">
          <ul className="podcasts-list">
            {commitsListItems}
          </ul>
        </div>
      </div>
    );
  }
}

CommitsList.propTypes = {
  fetchCommit: PropTypes.func.isRequired,
  commitsList: PropTypes.any.isRequired,
};

export default connect((state, props) => {
  const commitsList = fromStore.getCommits(state, props.match.params.name);
  return {
    commitsList,
  };
}, {
  fetchCommit,
})(CommitsList);
