import React, { Component } from 'react'

import './Verification.css'

class Verification extends Component {
  // state of otp input values
  state = {
    inputValues: ['', '', '', '']
  }

  /**
   * Checking whether the entered value is numeric
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} event
   * @memberof Verification
   */
  inputKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>): any => {
    const enteredValue = event.key
    // if enteredValue isnt number, ignore it
    enteredValue.match(/^\d+$/) != null
      ? false && event.preventDefault()
      : true && event.preventDefault()
  }

  /**
   * Manage the values entered in each input
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event
   * @param {number} index
   * @memberof Verification
   */
  inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, index: number): void => {
    const target = event.target
    // prepare value to set state
    const updatedInputValues = {
      ...this.state.inputValues
    }
    updatedInputValues[index] = target.value
    this.setState({
      inputValues: updatedInputValues
    })
    // set focus on sibiling element if its exist
    const nextElementSibling = target.nextElementSibling as HTMLInputElement | null
    if (nextElementSibling != null) {
      nextElementSibling.focus()
    }
  }

  /**
   * clear input values
   * @memberof Verification
   */
  clearHandler = (): void => {
    this.setState({
      inputValues: ['', '', '', '']
    })
  }

  render (): any {
    return (
            <div className="verification-section">
                <div className="otp-group">
                    {[1, 2, 3, 4].map((id, index) => (
                        <input
                            key={id}
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            pattern="\d{1}"
                            maxLength={1}
                            className="otp-input"
                            value={this.state.inputValues[index]}
                            autoFocus={id === 1}
                            onKeyDown={(e) => { this.inputKeyDownHandler(e) }}
                            onChange={(e) => { this.inputChangeHandler(e, index) }}
                        />
                    ))}
                </div>
                <button className="clear-button" onClick={this.clearHandler}>CLEAR</button>
            </div>
    )
  }
}

export default Verification
