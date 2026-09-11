import EditModal from '../Modals/EditModal/EditModal';
import styles from './MainPage.module.css';
import { useEffect, useRef, useState } from 'react';

function MainPage({ linkArray, setLinkArray }) {
  
  
  const [selectedLink, setSelectedLink] = useState()
  const [inputValue, setInputValue] = useState('')
  const modalRef = useRef(null)

  const closeEditModal = () => {
    modalRef.current?.close()
  }

  function handleEdit(item){
    setSelectedLink(item)
    modalRef.current?.showModal()
  }

  function HandleLink(item, e){
    if(!item.link || item.link === "#" || item.link.trim() === ""){
      e.preventDefault()
      window.alert('The link is currently invalid')
    }
  }

  function handleCopy(item){
    try{
      navigator.clipboard.writeText(item.link)
      window.alert('Coppied to clipboard')
    }catch(error){
      window.alert('Could not copy link', error)
    }
  }

  function handleDelete(item){
      window.alert(`${item.name} was deleted`)
      setLinkArray(prev => prev.filter((i) => i.name.toLowerCase() !== item.name.toLowerCase()))
  }

  return (
    <div className={styles.container}>
        <div className={styles.main}>

          <div className={styles.search}>
            <input placeholder='Enter link name...' onChange={(e) => setInputValue(e.target.value)}></input>
          </div>

          <div className={styles.links}>
            <div className={styles.top_info}>
              <p>Name</p>
              <p>Link</p>
              <p>Tools</p>
            </div>

            <div className={styles.link_display}>

            {linkArray?.filter((e) => {
              return inputValue?.toLowerCase() === "" ? e : e.name.toLowerCase().includes(inputValue.toLowerCase())
            }).map((item, index) => (
              <div key={index} className={styles.link}>
                  <span >{item.name}</span>
                  <a href={item.link} onClick={(e) => HandleLink(item, e)}>{item.link}</a>
                  <div className={styles.tools}>
                    <span onClick={() => handleCopy(item)}>📜</span>
                    <span onClick={() => handleEdit(item)}>✏️</span>
                    <span onClick={() => handleDelete(item)}>🗑️</span>
                  </div>
              </div>
            ))}
            
            </div>
          </div> 

        </div>
        <EditModal modalRef={modalRef} closeEditModal={closeEditModal} selectedLink={selectedLink}/>
    </div>
  );
}

export default MainPage