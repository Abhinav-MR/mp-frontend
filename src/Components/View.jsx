// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getAllVideoCategoryAPI, getAlluploadedVideosAPI, updateCategoryAPI } from '../../services/allAPI'


// eslint-disable-next-line react/prop-types
function View({uploadVideoResponse}) {

  const [deleteVideoResponse,setDeleteVideoResponse]=useState(false) 
  
const[allVideos,setAllVideos]=useState([])


useEffect(()=>{
  getAlluploadedVideos()
  setDeleteVideoResponse(false)
},[uploadVideoResponse,deleteVideoResponse])

const getAlluploadedVideos = async ()=>{
  const result = await getAlluploadedVideosAPI()
  if(result.status===200){
    console.log(result);
    setAllVideos(result.data)
  }else{
    console.log("API Failed");
    setAllVideos([])
  }

}

const dragOver = (e) =>{
  e.preventDefault()
}

const videoDropped = async (e)=>{
  const{videoId,categoryId} = JSON.parse(e.dataTransfer.getData("data"))
  console.log(videoId,categoryId);
  const {data} = await getAllVideoCategoryAPI()
  const selectedCategory = data.find(item=>item.id==categoryId)
  let result = selectedCategory.allVideos.filter(video=>video.id!==videoId)
  console.log(result);
  let {id,categoryName} = selectedCategory
  let newCategory = {id,categoryName,allVideos:result}
  console.log(newCategory);
  const res = await updateCategoryAPI(categoryId,newCategory)
  console.log(res);
}



  return (
    <>
     <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDropped(e)}>
      {
        allVideos?.length>0?allVideos.map(video=>(
        // eslint-disable-next-line react/jsx-key
        <Col sm={12} md={4} lg={4} xl={3}>
           <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
        )):<p className='text-danger fw-bolder'>nothing to display</p>
        }
     </Row>
     
    </>
  )
}

export default View