import { useState, useEffect } from 'react'
import styles from './Handler.module.css'
import MainPage from './MainPage/MainPage'
import Sidebar from './Navbar/Sidebar'
import { ValueContext } from './Context'


function Handler() {

    const [linkArray, setLinkArray] = useState(() => {
        const saved = localStorage.getItem('linkArray')
        return saved ? JSON.parse(saved) : []
      })

    useEffect(() => {

        localStorage.setItem('linkArray', JSON.stringify(linkArray));
    }, [linkArray])


    return (
        <div className={styles.container}>
            <ValueContext.Provider value={{linkArray, setLinkArray}}>
            <Sidebar />
            <MainPage linkArray={linkArray} setLinkArray={setLinkArray}/>
            </ValueContext.Provider>
        </div>
    )
}

export default Handler