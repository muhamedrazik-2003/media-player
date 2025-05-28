import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPIs'

function VideoList({responseUpdate}) {
    const [videos, setVideos] = useState([])
    const [deleteResponse,setDeleteResponse] = useState('')

    useEffect(() => {
        getData()
    }, [responseUpdate,deleteResponse])

    const getData = async () => {
        const responseVideo = await getAllVideos()
        if (responseVideo.status === 200) {
            setVideos(responseVideo.data)
        }
    }
    return (
        <>
            {
                videos.length > 0
                    ? <>
                        {
                            videos.map(item => (
                                <VideoCard video={item} deleteResponseData={setDeleteResponse} />
                            ))
                        }
                    </>

                    : <h3>no Videos Found</h3>
            }
            <div>

            </div>

        </>
    )
}

export default VideoList
