import React from 'react';
import ReactDOM from 'react-dom/client';

import { useState } from 'react';

const Viewform = () => {
  const [formd, setFormd] = useState(JSON.parse(localStorage.getItem("formData")));

    return (
        <div>
            <div>
                Full Name: {formd.name}
            </div>
            <div>
                About: {formd.about}
            </div>
            <div>
                Highest education level: {formd.education}
            </div>
            <div>
                Previous Experience: {formd.exp}
            </div>
            <div>
                Last visited date to buy the Tea: {formd.lastdate}
            </div>
            <div>
                Tea Quantity Range: {formd.tearange}
            </div>
            
            <div>
                Previous used Tea products: {formd.prev}
            </div>
            <div>
                Discount Coupon ID: {formd.discount}
            </div>
            <div>
                Favourite Animal: {formd.animal}
            </div>
            <div>
                Suggestions: {formd.suggestions}
            </div>

        </div>
    )
}

export default Viewform;