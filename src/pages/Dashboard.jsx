import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import AddVideo from '../components/AddVideo'
import VideoList from '../components/VideoList'
import Category from '../components/Category'
import { Link } from 'react-router-dom'

function Dashboard() {
  const [addResponse, setAddResponse] = useState("")

  return (
    <Container fluid className='py-5 px-md-5 px-3' style={{ background: 'linear-gradient(135deg,rgb(36, 16, 149), #090023,rgb(0, 0, 83))' }}>
      <Row className='gx-4 gy-4'>
        <Col xs={12} lg={8}>
          <div className='p-3 rounded shadow d-flex flex-wrap gap-3 justify-content-center' style={{ backgroundColor: 'black' }} >
            <VideoList responseUpdate={addResponse} />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className='p-3 mb-3 rounded shadow-sm' style={{ backgroundColor: 'black' }}>
            <AddVideo addResponseData={setAddResponse} />
            <Link to='/his' className='btn text-center shadow-sm d-block m-2 fw-bold' style={{ backgroundColor: 'blue', color: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              Watch History
            </Link>
          </div>

          <div className='p-3 rounded shadow-sm ' style={{ backgroundColor: 'black' }}>
            <Category />
          </div>
        </Col>
      </Row>

    </Container>
  )
}

export default Dashboard
