import React from 'react';
import PropTypes from 'prop-types';

const Content = props => {
  const { nickname } = props;

  return (
    <p>
      Hi
      {nickname}
    </p>
  );
};

Content.propTypes = {
  nickname: PropTypes.string,
};

Content.defaultProps = {
  nickname: 'idk',
};

export default Content;
