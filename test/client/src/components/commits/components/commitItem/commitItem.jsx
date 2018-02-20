import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

const RepoListItem = (props) => {
  const { commit, count } = props;
  const { author } = commit;
  return (
    <li className={`commit ${Number(commit.sha.slice(-1)[0]) ? 'commit--blue' : ''}`}>
      <span className="commit__number">{count}</span>
      <span className="commit__message">
        {commit.commit.message}
      </span>
      <span className="commit__sha">{commit.sha}</span>
      <span className="commit__date">{dateFormat(commit.commit.author.date, 'ddd mmm dd yyyy HH:MM:ss')}</span>
      <span className="commit__author">{commit.commit.author.name}</span>
      <a href={author ? author.html_url : ''}>
        <img
          className="commit__photo"
          src={author ? author.avatar_url : 'https://camo.githubusercontent.com/fdb62ad69977c4bbc9ac24e528b4bfead7f49c0d/68747470733a2f2f322e67726176617461722e636f6d2f6176617461722f63346136386366653532363063313630353238393139663535633762333532353f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d3430'}
          alt=""
        />
      </a>
    </li>
  );
};

RepoListItem.propTypes = {
  commit: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};

export default RepoListItem;
