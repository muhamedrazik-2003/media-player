import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, addHistory } from '../services/allAPIs';



function VideoCard({ video, deleteResponseData, delStatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)

    const { id, title, imgUrl, watchUrl } = video;
    const timeNow = new Date().toLocaleString()
    const historyData = { id, title, imgUrl, watchUrl, timeNow }
    const response = await addHistory(historyData)
    console.log(response)
  };

  const handleDelete = async () => {
    const responseData = await deleteVideo(video.id)
    if (responseData.status === 200) {
      alert("Video Deleted!")
      deleteResponseData(responseData)

    }
    else {
      alert("Video Deletion Failed!")
    }
  }


  const handleDrag = (e) => {
    console.log('drag start')
    e.dataTransfer.setData("video", JSON.stringify(video));
    // console.log(video)
  }

  return (
    <>
      <Card
        onDragStart={(e) => handleDrag(e)}

        style={{
          maxWidth: '15.9rem',
          backgroundColor: '#1f1f1f',
          color: 'white'
        }}
        draggable
        className="rounded shadow-sm"
        id={video.id}
      >
        <Card.Img
          variant="top"
          onClick={handleShow}
          src={video.imgUrl}
          style={{
            cursor: 'pointer'
          }}
          className='rounded-top img-fluid'
        />
        <Card.Body className="d-flex justify-content-between align-items-center py-2 px-2">
          <Card.Title className="fs-6 text-truncate" title={video.title}>
            {video.title}
          </Card.Title>
          {delStatus ?
            <>
            </>

            : <button className="btn p-1" onClick={handleDelete}>
              <i className="fa-solid fa-trash fa-sm" style={{ color: '#FF6B6B' }}></i>
            </button>
          }

        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: '#230b75', borderBottom: '1px solid black' }}
          className='py-2'
        >
          <Modal.Title style={{ color: 'white' }}>{video.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#230b75', padding: '5px 5px 0 5px' }}>
          <iframe
            width="100%"
            height="430"
            src={`${video.watchUrl}&autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              borderRadius: '15px',
            }}
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard
