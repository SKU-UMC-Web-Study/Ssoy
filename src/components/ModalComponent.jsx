import React, { useState } from 'react';
import './Modal.css'

const ModalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const ModalOpen =()=>{
    setModalIsOpen(true);
    console.log("모달이 켜짐");
  };

  const ModalClose=()=>{
    setModalIsOpen(false);
    console.log("모달이 꺼짐");
  }

 
  return (
  
    <div>
       <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button className="open" onClick={ModalOpen}>모달 열기</button>
      
      {modalIsOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>안녕하세요</h2>
            <p>모달 내용은 어쩌고 저쩌고..</p>
            <button className="close" onClick={ModalClose}>닫기</button>
          </div>
        </div>
      )}
      
    </div>
    
  );
};

export default ModalComponent;