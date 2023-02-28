import React from 'react'

import './Backdrop.css'

interface backdropProps {
  show: boolean
  clicked: any
}

const backdrop = ({ show, clicked }: backdropProps): JSX.Element | null => (
  show ? <div className='backdrop' onClick={clicked}></div> : null
)

export default backdrop
