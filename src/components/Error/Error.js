import React from 'react';
import './error.scss';
import Back from '../Back/Back';

export default function Error() {
  return (
    <div className='errorHome'>
      <Back />
      <h1 className='errorHeader'>Sorry wrong path!</h1>
    </div>
  )
}
