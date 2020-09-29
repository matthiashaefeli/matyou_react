import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

export default function Back() {
  return (
    <a href='/' className='backLink'><FontAwesomeIcon icon={faBackward} /></a>
  )
}
