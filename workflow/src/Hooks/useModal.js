import {useState} from 'react'

const useModal = (initialModal = false) => {
    const [isOpenModal, setIsOpenModal] = useState(initialModal);

    const openModal = () => {
        setIsOpenModal(true);
    }

    const closeModal = () => {
        setIsOpenModal(false);
    }
    return [isOpenModal, openModal, closeModal]
}

export default useModal