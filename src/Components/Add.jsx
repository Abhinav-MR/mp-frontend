/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../../services/allAPI';

// eslint-disable-next-line react/prop-types
function Add({setUploadVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [UploadVideo,setUploadVideo] = useState({
    id: "",caption: "",url: "",link: ""
  })

console.log(UploadVideo);



const getYoutubeEmbedLink = (e)=>{
  const {value} = e.target
  if(value.includes("v=")){
    let vID = value.split("v=")[1].slice(0,11)
    console.log(`https://www.youtube.com/embed/${vID}`);
    setUploadVideo({...UploadVideo,link:`https://www.youtube.com/embed/${vID}`})
  }else{
    setUploadVideo({...UploadVideo,link:""})
  }
}


//https://youtu.be/xnzA2TnOMIU?si=XnchEpxxfBDOAkUB
//https://www.youtube.com/watch?v=xnzA2TnOMIU



const handleAdd= async ()=>{
  const {id, caption, url, link }= UploadVideo

  if( !id|| !caption || !url || !link){
    alert("please fill the missing fields")
  }else{
    //store uploaded video to json server
    const result = await uploadVideoAPI(UploadVideo)
    console.log(result);
    if(result.status >=200 && result.status<300){
      //success
      handleClose();
      //empty fields 
      setUploadVideo({
        id: "",caption: "",url: "",link: ""
      })
      //after getting success response
    // eslint-disable-next-line no-undef
    setUploadVideoResponse(result.data)
    }else{
      alert(result.message)
    }

  }
}




  return (
    <>
    <div className='d-flex align items center'>
      <h5>Upload-Videos</h5>
      <button className='bn' onClick={handleShow}><i className="fa-solid fa-arrow-up-from-bracket fa-bounce fa-2x mb-2"></i></button>
    </div>


<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form>
      <FloatingLabel  controlId="formBasicEmail" label="video Id" className='mb-3'>
       
        <Form.Control type="email" placeholder="Video Id" onChange={(e)=>setUploadVideo({...UploadVideo,id:e.target.value})}/>
        </FloatingLabel>
        <FloatingLabel  controlId="floatingName" label="video Name">
       
       <Form.Control type="text" placeholder="Video Name" onChange={(e)=>setUploadVideo({...UploadVideo,caption:e.target.value})}/>
       </FloatingLabel>
       <br></br>
       <FloatingLabel  controlId="floatingInputImage" label="Image URL" className='mb-3'>
       <Form.Control type="email" placeholder="Image URL" onChange={(e)=>setUploadVideo({...UploadVideo,url:e.target.value})}/>
       </FloatingLabel>
       <FloatingLabel  controlId="floatingVideo" label="Video URL">
       <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeEmbedLink}/>
       </FloatingLabel>
       </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default Add