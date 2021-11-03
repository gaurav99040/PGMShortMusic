import { useState, useEffect } from 'react'

// import axios from 'axios'
import './App.css';

function App() {
  const [data1, setdata] = useState([])

  //  const respons=await fetch('http://localhost:5000/getdata').then()
  const getuser = async () => {
    const respons = await fetch('https://pgmshortmusic.herokuapp.com/getdata', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
    const json = await respons.json();
    console.log(json)
    setdata(json)
  }

  useEffect(() => {
    getuser();
    // axios('https://api.deezer.com/radio/30661/tracks').then(res=>setdata(res.data)).catch(err=>{console.log(err)})
  }, [])


  return (
    <>
      
      
      {
        data1.map((current, ind) => {

          return (
            <div className="d-flex justify-content-center" key={ind}>
              <div className="row row-cols-2 ">
                <div className="col">
                  <div className="card mb-3" style={{ maxWidth: "540px" }} >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={current.img} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{current.title}</h5>
                          <p className="card-text"><div>
        <audio  src={current.mp3} controls />
      </div></p>
      
                        </div>
                      </div>
                      <p className="card-text">By {current.name}</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>

          )
        })
      }
    
    </>
  );
}

export default App;
