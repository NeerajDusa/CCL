import React from 'react';
import ReactDOM from 'react-dom/client';

import { useState } from 'react';
import Viewform from './viewform';
import './form.css';

import Dropdown from 'react-bootstrap/Dropdown';

// import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [animal, setAnimal] = useState("");
  const [education, setEducation] = useState("");
  const [exp, setExp] = useState("");
  const [lastdate, setLastdate] = useState("");
  const [tearange, setTearange] = useState("");
  const [prev, setPrev] = useState("");
  const [discount, setDiscount] = useState("");
  const [suggestions, setSuggestions] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log();
    const formData = {name, about, education, exp, lastdate, tearange, prev, discount, animal, suggestions};
    console.log(formData)
    localStorage.setItem("formData", JSON.stringify(formData));

    // alert(`The name you entered was: ${name} ${about} ${discount} ${education} ${lastdate} ${tearange}`)
  }

  const educhange = (event) => {
    setEducation(event.target.value);
  }

  const textarea = (event) => {
    setEducation(event.target.value);
  }

  const teaqtychange = (event) => {
    setTearange(event.target.value);
  }

  const prevchange = (event) => {
    setPrev(event.target.value);
  }

  return (

    <form onSubmit={handleSubmit}>
        <div className = "inputfield">
            <h1>CCL</h1>
            CCL Products Limited, a listed public company limited by shares, was established in the year 1994 with the objective of producing the finest and most exquisite coffee in the world.
        </div>

        <div className = "inputfield">
            <label>
                Full Name
            </label>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
        </div>

        <div className = "inputfield">
            <label>About
            {/* <input 
                type="text" 
                value={about}
                onChange={(e) => setAbout(e.target.value)}
            /> */}
            </label>
            <textarea value={about} onChange={(e) => setAbout(e.target.value)} />

        </div>

        <div className = "inputfield">
            <label>Previous Experience</label>
            <input 
                type="text" 
                value={exp}
                onChange={(e) => setExp(e.target.value)}
                />
        </div>

        <div className = "inputfield">
            <label>Last visited date to buy the Tea
                
            </label>
            <input type="datetime-local" id="lastdate" name="birthdaytime"
                value={lastdate}
                onChange={(e) => setLastdate(e.target.value)}/>
        </div>

        <div className = "inputfield">
            <label>
                Highest education level
                
            </label>
            <select value={education} onChange={educhange} required>

                    <option value="btech">BTech</option>
                    <option value="mtech">MTech</option>
                    <option value="phd">PHD</option>
                    <option value="bba">BBA</option>
                    <option value="mba">MBA</option>
                    <option value="mbbs">MBBS</option>
                    
                </select>
        </div>

        <div className = "inputfield">
            <label>
                Tea Quantity Range

                
            </label>
            <select value={tearange} onChange={teaqtychange} required>

                    <option value="0-10">0 - 10 kg</option>
                    <option value="10-50">10 - 50 kg</option>
                    <option value="50-250">50 - 250 kg</option>
                    <option value="250-1000">250 - 1000 kg</option>
                    <option value="1000-5000">1000 - 5000 kg</option>
                    {/* <option value="mbbs">MBBS</option> */}

                </select>
        </div>

        <div className = "inputfield">
            <label>
                Previous used Tea products

                
            </label>
            <select value={prev} onChange={prevchange} required>
                    <option value="freezedried">Freeze dried coffee powder</option>
                    <option value="">Other</option>
                    {/* <option value="mbbs">MBBS</option> */}

                </select>
        </div>

        <div className = "inputfield">
            <label>Discount Coupon
                
            </label>
            <input 
                type="text" 
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                />
        </div>
        <div className = "inputfield">
            <label>Favourite Animal
                
            </label>
            <input 
                type="text" 
                value={animal}
                onChange={(e) => setAnimal(e.target.value)}
                />
        </div>
        <div className = "inputfield">
            <label>Suggestions
            </label>
                <textarea value={suggestions} onChange={(e) => setSuggestions(e.target.value)} />

        </div>

      <input type="submit" />
      <Viewform/>
    </form>
    
  )
}


export default MyForm;