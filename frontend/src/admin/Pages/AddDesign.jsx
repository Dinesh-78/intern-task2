import React, { useEffect, useState } from 'react'
import axios from "axios";
const AddDesign = () => {
  const [design , setdesign]=useState([]);
  useEffect(() =>{
    axios.post('')
  })
  return (
    <div>
        <form>
            <input type='image' name='thumbnail' required />
            <input type="text" name='proname' required />
            <input type="" name='description' required />
            <button>SUBMIT</button>
        </form>
    </div>
  )
}

export default AddDesign