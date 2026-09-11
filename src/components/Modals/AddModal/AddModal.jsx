import styles from "./AddModal.module.css";
import { useContext } from "react";
import { ValueContext } from "../../Context";


function AddModal({ modalRef, closeAddModal }) {

    const {linkArray, setLinkArray} = useContext(ValueContext)

    function handleSubmit(e){
        e.preventDefault();

        let formValues = e.target.elements;
        let nameVal = formValues.name.value.trim();
        let linkVal = formValues.link.value.trim();

        const sameName = linkArray.some((item) => item?.name?.toLowerCase() === nameVal.toLowerCase());
        const sameLink = linkArray.some((item) => item?.link?.toLowerCase() === linkVal.toLowerCase());

        if(!sameName && !sameLink){
            setLinkArray(p => [...p, {name: nameVal, link: linkVal}]);
            e.target.reset()
            closeAddModal()
        }else{
            window.alert('Values alredy existing');
        }
        
    }

  return (
    <dialog ref={modalRef} className={styles.modal}>
        <form onSubmit={handleSubmit}>
            <span>Name:</span>
            <input name="name" required minLength={3}></input>

            <span>Link:</span>
            <input name="link" required minLength={5}></input>

            <button className={styles.submit_btn} type="submit">Submit</button>
        </form>
            <button className={styles.close_btn} onClick={closeAddModal}>X</button>
        
            
    </dialog>
  )
}


export default AddModal