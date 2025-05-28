import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { videoUpload } from '../services/allAPIs';


function AddVideo({addResponseData}) {
    const [show, setShow] = useState(false);
    const [newVideo, setNewVideo] = useState({
        title: "", imgUrl: "", watchUrl: ""
    })

    const handleSubmit = async () => {
        const { title, imgUrl, watchUrl } = newVideo
        if (!title || !imgUrl || !watchUrl) {
            alert("Enter a valid Inputs")
        }
        else {
            const videoId = watchUrl.split("v=")[1]
            const embedUrl = `https://www.youtube.com/embed/${videoId}?si=zP2QhIhuwBXZtOnB`

            newVideo.watchUrl = embedUrl
            const uploadResult = await videoUpload(newVideo);
            console.log(uploadResult)

            if(uploadResult.status === 201) {
                alert(`${newVideo.title} Video added successfully`)
                addResponseData(uploadResult)
                setNewVideo({
                    title:"",imgUrl:"",watchUrl:""
                })
                handleClose()
            }
            else {
                alert("Video upload Failed")
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="d-grid">
        <button
          className="btn m-2"
          onClick={handleShow}
          style={{
            backgroundColor: '#5314fc',
            color: 'black',
            fontWeight: 'bold',
            border: 'none',
          }}
        >
          + Upload Video
        </button>
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
          <Modal.Title style={{ color: 'white' }}>Upload Video</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ backgroundColor: '#230b75' }}>
          <FloatingLabel controlId="title" label="Video Title" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={newVideo.title}
              onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="imgUrl" label="Thumbnail URL" className="mb-3 text-light">
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              value={newVideo.imgUrl}
              onChange={(e) => setNewVideo({ ...newVideo, imgUrl: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="watchUrl" label="YouTube Video URL" className="mb-3 text-light">
            <Form.Control
              type="text"
              placeholder="Enter YouTube URL"
              value={newVideo.watchUrl}
              onChange={(e) => setNewVideo({ ...newVideo, watchUrl: e.target.value })}
            />
          </FloatingLabel>
        </Modal.Body>

        <Modal.Footer style={{ backgroundColor: '#230b75', borderTop: '1px solid #333' }}>
          <Button
            variant="outline-light"
            onClick={handleClose}
            style={{ borderColor: 'black', color: 'black' }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            style={{ backgroundColor: 'black', border: 'none', color: '#5314fc', fontWeight: 'bold' }}
          >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default AddVideo
