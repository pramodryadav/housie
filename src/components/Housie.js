import React, { useState } from 'react'

function Housie() {
  const [arr] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [selectedBtn, setSelectedBtn] = useState([]);
  const handleClick = () => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random() * i);
        let swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
      }
      setSelectedBtn([...selectedBtn, arr.pop()]);


      console.log(selectedBtn);
      console.log(arr);
    }
    else {
      alert("Please stop! there is no circle left to color. Please refresh the page and try again");
    }



  }

  return (
    <>

      <div class="container">
        <div className='circleContainer'>
          {[...Array(10).keys()].map((i) =>
            <div className='cirle' style={{ backgroundColor: selectedBtn.includes(i) ? 'red' : 'white' }}>{i}</div>
          )}
          
        </div>
        <div style={{ textAlign: 'center' }}>
            <button className='Btn' onClick={handleClick}>Generate</button>
          </div>

      </div>


    </>

  )
}

export default Housie