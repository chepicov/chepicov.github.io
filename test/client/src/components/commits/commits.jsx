import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCommit } from 'resources/commit/commit.actions';
import fromStore from 'resources/index.selectors';
import Spinner from 'components/common/spinner';
import CommitListItem from './components/commitItem/commitItem';

import './commits.styles';

class CommitsList extends React.PureComponent {
  state = {
    isLoading: true,
  };

  componentDidMount = async () => {
    await this.props.fetchCommit(this.props.name);
    this.setState({ isLoading: false });
  }

  render() {
    let count = 0;
    const commitsItems = this.props.commitsList;
    console.log(commitsItems.slice(-1)[0]);
    const commitsListItems = commitsItems.length ? commitsItems
      .map((commitItem) => {
        count += 1;
        return (
          <CommitListItem commit={commitItem} count={count} key={commitItem.sha} />
        );
      }) : [];

    return !this.state.isLoading ? (
      <div className="commit-list">
        <h1 className="commit-list__name">
          <Link to="/" className="commit-list__link">
            {this.props.name}
          </Link>
        </h1>
        <ul className="commit-list__body">
          {commitsListItems}
        </ul>
      </div>
    ) : (
      <Spinner />
    );
  }
}

CommitsList.propTypes = {
  fetchCommit: PropTypes.func.isRequired,
  commitsList: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect((state, props) => {
  const { name } = props.match.params;
  const commitsList = fromStore.getCommits(state, props.match.params.name);
  return {
    name,
    commitsList,
  };
}, {
  fetchCommit,
})(CommitsList);
