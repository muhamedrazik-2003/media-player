import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div style={{ backgroundColor: '#000', color: '#fff' }}>
        <div className="container py-3">
          <div className="row align-items-center mt-2 py-5">
            <div className="col-md-5 ps-5 my-5 text-center text-md-start">
              <h1 className="display-4 fw-bold" style={{ color: '#3f51b5' }}>Play it. Save it. Relive it.</h1>
              <p className="mt-3" style={{ textAlign: 'justify' }}>
                Your modern solution for playing, saving, and managing your favorite YouTube content. Enjoy a seamless experience with our secure and fast platform.
              </p>
              <Link className="btn btn-outline-light mt-4 px-4 py-2 rounded-pill shadow" to={'/log'}>
                Click For More
              </Link>
            </div>
            <div className="col-md-7 my-5">
              <img className='img-fluid rounded-4 shadow-lg' src="https://img.pikbest.com/wp/202347/close-up-photo-background-view-of-headphones-in-neon-light-against-black-3d-illustration_9756660.jpg!w700wp" alt="media" />
            </div>
          </div>
        </div>

        <div className='container py-5'>
          <div className='row g-4 m-1'>
            <div className='col-md-4'>
              <Card className='text-light p-2 rounded-4 shadow-lg h-100' style={{ background: 'linear-gradient(135deg,rgb(43, 33, 98),rgb(9, 0, 35),rgb(9, 9, 59))' }}>
                <Card.Img variant="top" className='rounded-4 ' src="https://i.pinimg.com/originals/ab/a5/ce/aba5cecb4705a2a018c5446d6c7a315f.gif" height={'250px'} style={{ objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title className='text-primary'>Play Saved Videos</Card.Title>
                  <Card.Text>
                    Experience fast and easy access to your favorite video content with a clean, minimal UI.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='col-md-4'>
              <Card className='text-light p-2 rounded-4 shadow-lg h-100' style={{ background: 'linear-gradient(135deg,rgb(43, 33, 98),rgb(9, 0, 35),rgb(9, 9, 59))' }}>
                <Card.Img variant="top" className='rounded-4 ' src="https://i.pinimg.com/originals/bd/a3/2f/bda32f6f3581b5f4402d2718132f5ce6.gif" height={'250px'} style={{ objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title className='text-primary'>Play Saved Videos</Card.Title>
                  <Card.Text>
                    Experience fast and easy access to your favorite video content with a clean, minimal UI.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='col-md-4'>
              <Card className='text-light p-2 rounded-4 shadow-lg h-100' style={{ background: 'linear-gradient(135deg,rgb(43, 33, 98),rgb(9, 0, 35),rgb(9, 9, 59))' }}>
                <Card.Img variant="top" className='rounded-4 ' src="https://i.pinimg.com/originals/2b/c0/4c/2bc04cb8e0d0965efff6017dc0f8a996.gif" height={'250px'} style={{ objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title className='text-primary'>Play Saved Videos</Card.Title>
                  <Card.Text>
                    Experience fast and easy access to your favorite video content with a clean, minimal UI.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="container my-5 p-5 rounded-4 shadow-lg" style={{ backgroundColor: '#101316' }}>
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img
                src="https://i.pinimg.com/236x/33/36/8f/33368f175a42bf70b942d7135de58497.jpg"
                className="img-fluid"
                alt="Secure Media Icon"
                style={{ maxWidth: '250px' }}
              />
            </div>
            <div className="col-md-7 pe-3 text-white">
              <h1 className="display-5 fw-bold" style={{ color: '#3f51b5' }}>
                Secure. Powerful. Instant.
              </h1>
              <p className="fs-5 mt-3" style={{ lineHeight: '1.7', textAlign: 'justify' }}>
                Your entertainment, safeguarded by cutting-edge technology. Our platform delivers lightning-fast access,
                seamless experience, and top-tier protection — so you can stream and explore worry-free.
              </p>
            </div>
          </div>
        </div>

        <div className="container my-5 py-5 px-4 rounded-4 w-75" >
          <div className="row align-items-center g-5 mb-3 mt-2">
            <div className="col-md-6 text-white">
              <h1 className="display-5 fw-bold" style={{ color: '#3f51b5' }}>
                Watch Instantly. Save Forever.
              </h1>
              <p className="fs-5 mt-4" style={{ textAlign: 'justify', lineHeight: '1.7' }}>
                Dive into your favorite YouTube content with zero interruptions. Whether streaming or saving for later,
                our platform ensures high-speed performance, offline access, and uninterrupted entertainment.
              </p>
            </div>
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/7rfErspLQPg?si=cc9sq4W5egE8nrfp"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

      </div >
    </>
  )
}

export default Landing