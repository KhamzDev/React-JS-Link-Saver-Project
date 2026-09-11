import styles from './EditModal.module.css';
import { useContext } from "react";
import { ValueContext } from "../../Context";


function EditModal({ modalRef, closeEditModal, selectedLink }) {

    const {linkArray, setLinkArray} = useContext(ValueContext)

    function handleSubmit(e){
        e.preventDefault();

        let formValues = e.target.elements;
        let nameVal = formValues.name.value.trim();
        let linkVal = formValues.link.value.trim();

        const sameName = linkArray.some((item) => item?.name?.toLowerCase() === nameVal.toLowerCase());

        if(!sameName){
            setLinkArray(prev => prev.map((p) => p.name.toLowerCase() === selectedLink?.name.toLowerCase() ? {...p, name: nameVal, link: linkVal} : p));
            e.target.reset()
            closeEditModal()
        }else{
            window.alert('Name alredy existing');
        }
        
    }

  return (
    <dialog ref={modalRef} className={styles.modal}>
        <form onSubmit={handleSubmit}>
            <span>Name:</span>
            <input name="name" required minLength={3} defaultValue={selectedLink?.name}></input>

            <span>Link:</span>
            <input name="link" required minLength={5} defaultValue={selectedLink?.link}></input>

            <button className={styles.submit_btn} type="submit">Edit</button>
        </form>
            <button className={styles.close_btn} onClick={closeEditModal}>X</button>
        
            
    </dialog>
  )
}

export default EditModal