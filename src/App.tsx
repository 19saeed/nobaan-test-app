import React, { useState, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useKeyPress } from './components/UseKeyPress/UseKeyPress'
import './App.css'
import Modal from './components/Modal/Modal'
const Verification = lazy(async () => await import('./containers/Verification/Verification'))
const Users = lazy(async () => await import('./containers/Users/Users'))
const Products = lazy(async () => await import('./containers/Products/Products'))

const App = (): JSX.Element => {
  // state of showing modal
  const [modalState, setModalState] = useState({ show: false })

  // opens modal by set modal's show state to true
  const openModalHandler = (): void => {
    setModalState({ show: true })
  }

  // closes modal by set modal's state to false
  const closeModalHandler = (): void => {
    setModalState({ show: false })
  }

  // when user hit ctrl + shift + F2 key, opens modal
  useKeyPress('F2', openModalHandler)

  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/verification' data-cy="verification-nav-button">Verification</Link></li>
              <li><Link to='/products' data-cy="products-nav-button">Products</Link></li>
              <li><Link to='/users' data-cy="users-nav-button">Users</Link></li>
            </ul>
          </nav>
        </header>
        <Modal show={modalState.show} modalClosed={closeModalHandler} />
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route path='/' element={
              <div><h1>Nobaan, Front-end developer evaluation project</h1></div>
            }
            />
            <Route path='/verification' element={<Verification />} />
            <Route path='/products' element={<Products />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App
