import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { captureValue } from '../../features/capture/captureSlice'
import Backdrop from '../Backdrop/Backdrop'
import { useKeyPress } from '../UseKeyPress/UseKeyPress'
import './Modal.css'

interface ModalProps {
  show: boolean
  modalClosed: any
}

const modal = ({ show, modalClosed }: ModalProps): JSX.Element => {
  // get stored value from redux store
  const storedString = useSelector((state: any) => state.capture.storedString)
  // define dispatch
  const dispatch = useDispatch()
  // define input refrence
  const inputRef = useRef<HTMLInputElement>(null)
  // focusing on input
  const setInputFocus = (): void => {
    inputRef.current?.focus()
  }
  // when user hit ctrl + shift + F3 key, focus on input
  useKeyPress('F3', setInputFocus)

  return (
    <div>
      <Backdrop show={show} clicked={modalClosed} />
      <div className='modal'
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}>
        <h1 className='header'>This is a Dialog</h1>
        <input type='text' className='input'
          placeholder='Type something here'
          ref={inputRef}
          onChange={(event) => { dispatch(captureValue(event.target.value)) }} />
        {storedString !== ''
          ? <p>Captured value is: <strong>{storedString}</strong></p>
          : <p>No value captured</p>
        }
      </div>
    </div>
  )
}

export default modal
