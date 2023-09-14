import { useState } from 'react'
import styles from './address.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {addAddress} from '../../redux/user/slice'

export function Address() {
  const dispatch = useDispatch()
  const {user} = useSelector((rootReducer) => rootReducer.user)

  const [addressName, setAddressName] = useState(user?.address?.location ?? "")
  const [addressNumber, setAddressNumber] = useState(user?.address?.number ?? "")


  function handleRegisterAddress(){
    console.log(addressName, addressNumber)
    dispatch(addAddress({
      location: addressName,
      number: addressNumber,
    }))
  }

  return (
    <>
    <Header/>
      <div className={styles.container}>

        <main className={styles.content}>
          <div>
            <Link to="/painel">
              Voltar para o painel
            </Link>
          </div>

          <section className={styles.address}>
           <h2>Meu endereço:</h2>

          <input 
            type="text" 
            className={styles.input}
            placeholder="Ex: Rua centro, x"
            value={addressName}
            onChange={ (e) => setAddressName(e.target.value) }
          />
          <input 
            type="text" 
            className={styles.input}
            placeholder="Numero"
            value={addressNumber}
            onChange={ (e) => setAddressNumber(e.target.value) }
          />

          <button className={styles.button} onClick={handleRegisterAddress}>
            Salvar Alteração
          </button>

          </section>
        </main>
      </div>
    </>
  )
}
