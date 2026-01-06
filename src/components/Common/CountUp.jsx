import React from 'react'

const CountUp = ({ end, suffix = '' }) => {
  return <span>{end}{suffix}</span>
}

export default CountUp
