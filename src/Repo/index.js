import React from 'react'
import PropTypes from 'prop-types'

const Repo = (props) => {
  const avatarStyle = { width: '50px' };
  const { data, onClick } = props;

  return (
    <div>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <a href={data.html_url} target='_blank'>View</a>
    </div>
  )
}

Repo.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    html_url: PropTypes.string.isRequired
  }).isRequired
}

export default Repo;