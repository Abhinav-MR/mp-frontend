/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()
   
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
    <Col></Col>
    <Col lg={5}>
      <h1 style={{fontSize:'40px'}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque aperiam placeat sit explicabo porro saepe hic commodi illo dicta voluptatibus similique rem et culpa, dolore officiis, ad error doloremque?</p>
      <button onClick={()=>navigateByUrl('./home')} className='btn btn-info mt-4'>Get Started</button>
    </Col>
    <Col lg={5}>
      <img src='https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif' alt=''></img>
    </Col>
    <Col></Col>


    </Row>
    <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'></div>
    <h3>Features</h3>
    <div className='container mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
    <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.gifer.com/Up2T.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>

   
    <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.gifer.com/Up2T.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>



    <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.gifer.com/Up2T.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>

    <div className='container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100'>
      <div className='col-lg-5'>
        <h4 className='text-warning'>Simple,powerful & Fast</h4>
        <h6 className='mb-5 mt-3'><span className='text-warning fw-border'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iusto! Fugit dolorem rem nam consequatur alias nesciunt, ab ut voluptate. Tempora numquam debitis possimus id, aut veniam quibusdam dolor voluptatum?</h6>
        <h6 className='mb-5 mt-3'><span className='text-warning fw-border'>Categorize Videos</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iusto! Fugit dolorem rem nam consequatur alias nesciunt, ab ut voluptate. Tempora numquam debitis possimus id, aut veniam quibusdam dolor voluptatum?</h6>
        <h6 className='mb-5 mt-3'><span className='text-warning fw-border'>Managing Videos</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iusto! Fugit dolorem rem nam consequatur alias nesciunt, ab ut voluptate. Tempora numquam debitis possimus id, aut veniam quibusdam dolor voluptatum?</h6>
      </div>
<div className='video col-lg-5'>
<iframe width="100%" height="400" src="https://www.youtube.com/embed/9AizchSQURA?si=Z8m6zPSGa0wFJFLU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
    </div>
    </>
  )
}

export default LandingPage