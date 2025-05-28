import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import CategoryList from './CategoryList';
import { addCategory } from '../services/allAPIs';
import { data } from 'react-router-dom';

function Category() {
    const [show, setShow] = useState(false);
    const [categoryData, setCategoryData] = useState({ 
        name:"", videos:[]
    })

    const handleSubmit = async() => {
        const {name} = categoryData;
        if(!name) {
            alert("enter Valid Input")
        }
        else {
        const responseData = await addCategory(categoryData);
            if(responseData.status === 201) {
                alert(`${categoryData.name} Category Added`)
                handleClose()
                setCategoryData({...categoryData, name:"", videos:[]})
            }
            else {
                alert(`${categoryData.name} Category Adding Failed`)
            }
        }
    }
    // console.log(categoryData.name)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="d-grid">
                <button
                    className="btn m-2"
                    onClick={handleShow}
                    style={{
                        backgroundColor: 'white',
                        color: 'black',
                        fontWeight: 'bolder',
                        border: 'none',
                    }}
                >
                    Add Category +</button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                dialogClassName="dark-modal"
            >
                <Modal.Header closeButton style={{ backgroundColor: '#230b75', borderBottom: '1px solid #333' }}>
                    <Modal.Title style={{ color: 'white' }}>Add Catogory</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#230b75' }}>
                    <FloatingLabel
                        controlId="title"
                        label="Category Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Category Name" onChange={(e) => setCategoryData({...categoryData, name :e.target.value})} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#230b75', borderTop: '1px solid #333' }}>
                    <Button variant="outline-light" style={{ borderColor: 'black', color: 'black' }} onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleSubmit} style={{ backgroundColor: 'black', border: 'none', color: '#5314fc', fontWeight: 'bold' }}>Add</Button>
                </Modal.Footer>
            </Modal>

            <CategoryList  updateCategoryData = {categoryData}/>

        </>
    )
}

export default Category
