import React from 'react'
import PropTypes from 'prop-types'

const Owner = (props) => {
  const avatarStyle = { width: '50px' };
  const { data, onClick } = props;

  return (
    <div>
      <h2>
        <img style={avatarStyle} src={data.avatar_url} alt={data.name} />
        {data.name}
      </h2>
      <a target='_blank' href={data.html_url}>Link to profile</a>
      <br />
      <a onClick={onClick} href='#'>Load Repos</a>
    </div>
  )
}

Owner.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Owner;