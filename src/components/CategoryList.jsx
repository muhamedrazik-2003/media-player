import React, { useState, useEffect } from 'react'
import { getAllCategory, deleteCategory, addVideoToCategory } from '../services/allAPIs'
import VideoCard from './VideoCard'


function CategoryList(updateCategoryData) {
  const [categoryData, setCategoryData] = useState([])
  const [itemId, setItemId] = useState('')
  useEffect(() => {

    handleData()

  }, [updateCategoryData, itemId])

  const handleData = async () => {
    const categoryResponse = await getAllCategory()
    setCategoryData(categoryResponse.data)
  }

  const handleDelete = async (itemId) => {
    const deleteResponse = await deleteCategory(itemId)
    setItemId(deleteResponse)
    if (deleteResponse.status === 200) {
      alert('category Deleted')
    }
    else {
      alert('Category Deletion Failed')
    }
    // console.log(deleteResponse)

  }

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log('dragging')
  }

  const handleDrop = async (e, categoryListData) => {
    console.log('dropping')
    e.preventDefault()
    const videoData = JSON.parse(e.dataTransfer.getData("video"));
    console.log(videoData)
    console.log(categoryListData)
    const existing = categoryListData.videos.find(item => item.id === videoData.id)
    if (existing) {
      alert("Video already added")
    }
    else {
      categoryListData.videos.push(videoData)
      const response = await addVideoToCategory(categoryListData.id, categoryListData)
      if (response.status === 200) {
        handleData()
      }
      else {
        alert('video adding to category failed')
      }
    }

  }
  return (
    <>
      <div className="">
        {
          categoryData.length === 0 ?
            <h5 className='m-2 py-2 text-center'>Category Not Added Yet</h5>
            :
            categoryData.map(item => (
              <div
                onDrop={(e) => handleDrop(e, item)}
                onDragOver={(e) => handleDragOver(e)}
                className='border border-2 border-secondary my-2 rounded-2 pt-1 pb-3 px-2 mx-2'
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className='m-0 ps-2'>{item.name}</h5>
                  <button className="btn" onClick={() => handleDelete(item.id)}>
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </div>
                <div className='row g-3 mx-2 justify-content-center'>
                  {
                    item.videos.length > 0 &&
                    (item.videos.map(videoData => (
                      <div className="col-6 col-md-4">
                        <VideoCard video={videoData} delStatus={true} />
                      </div>
                    )))
                  }
                </div>
              </div>

            ))}
      </div>
    </>
  )
}

export default CategoryList
