import React from 'react'
import styles from './navbar.module.css'
import NavLink from './link/navLink'

const Navbar = () => {

  const session = true
  const isAdmin = true

  return (
   <main className={styles.main}>
    <div>LOGO</div>
    <div className={styles.container}>
      {
        session? (
          <>
          {isAdmin && <NavLink title='Admin' path='/admin'/>}
          <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink title='Login' path='/login'/>
         )
      }
    </div>
   </main>
  )
}

export default Navbar