import styles from './home.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useReducer } from 'react'
import rootReducer from '../../redux/root-reducer'
import { deletAddress, fetchUsers, userSlice } from '../../redux/user/slice'

export function Home() {
  const dispatch = useDispatch()
  const {user} = useSelector((rootReducer) => rootReducer.user)
  console.log(user)

  function handleDeleteAddress(){
    alert("Endereço deletado com sucesso!")

    dispatch(deletAddress())
  }

  function handleFetchUsers(){
    dispatch(fetchUsers())
  }

  return (
    <>
    <Header/>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              {user ? `Olá ${user.name}, bem vindo!` : "Olá visitante, bem vindo!"}
            </h1>

            <span>Email: {user && user.email}</span>

            {user && user.address && (
              <>
                <strong className={styles.addressLabel}>Endereço atual:</strong>
                <div className={styles.address}>
                  <p>{user.address.location}, n {user.address.number}</p>
                  
                  <button onClick={handleDeleteAddress}>Deletar endereço</button>
                </div>
              </>
            )}
          </div>

          <h2>Lista de usuarios</h2>
          <br></br>
          <button onClick={handleFetchUsers}>Buscar usuários</button>
          <br/>

        </main>
      </div>
    </>
  )
}
