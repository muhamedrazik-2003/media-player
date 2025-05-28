import React, { useEffect, useState } from 'react';
import { getHistory, deleteHistory } from '../services/allAPIs';

function History() {
  const [historyData, setHistoryData] = useState([]);
    const [itemId, setItemId] = useState('')

  useEffect(() => {
    const getData = async () => {
      const responseData = await getHistory();
      const videoData = responseData.data;
      setHistoryData(videoData);
    };
    getData();
  }, [itemId]);

  const handleDelete = async (itemId) => {
      const deleteResponse = await deleteHistory(itemId)
      setItemId(deleteResponse)
      if (deleteResponse.status === 200) {
        alert('History Deleted')
      }
      else {
        alert('Hsitory Deletion Failed')
      }
      // console.log(deleteResponse)
         
    }

  return (
    <div style={{ background: 'linear-gradient(135deg,rgb(0, 0, 0),rgb(24, 0, 96),rgb(0, 0, 83))' }}>
      <div
        className="container py-5"
        style={{
          minHeight: '100vh',
          color: 'white',
        }}
      >
        <h2 className="text-center mb-4">Watch History</h2>

        {historyData.length === 0 ? (
          <p className="text-center">No history found.</p>
        ) : (
          <div className="row gy-4">
            {historyData.map((item) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
                <div className="card h-100 shadow bg-dark text-white border-0">
                  <img
                    src={item.imgUrl}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: '140px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text small text-secondary mt-auto">
                      {item.timeNow}
                    </p>
                    <div className='row gap-2 px-2 align-items-center'>
                      <a
                        onClick={() => handleDelete(item.id)}
                        className="btn btn-sm  mt-2 col "
                        style={{backgroundColor:'red',color:"white"}}
                      >
                        Remove
                      </a>
                      <a
                        href={item.watchUrl}
                        className="btn btn-outline-light btn-sm mt-2 col text-nowrap"
                      >
                        Watch Again
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default History;
