import AddModal from '../Modals/AddModal/AddModal';
import styles from './Sidebar.module.css';
import { useRef } from 'react';


function Sidebar() {

  const modalRef = useRef(null)
  const openAddModal = () => {
    modalRef.current?.showModal()
  }
  const closeAddModal = () => {
    modalRef.current?.close()
  }


  return (
    <div className={styles.container}>
      <h4>Link Saver 🪢</h4>

      <div onClick={openAddModal} className={styles.link_add}>
        <span>+ Add Link</span>
      </div>

      <AddModal modalRef={modalRef} closeAddModal={closeAddModal} />
      
    </div>
  )
}

export default Sidebar