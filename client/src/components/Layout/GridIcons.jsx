import React from 'react'
import "../../../public/customCss/GridIcons.css"



const GridIcons = () => {
  return (
    <>
     {/* fress support price */}
     <div className="fress">
          <div>
            <img src="../../../public/images/Home/shipping-fast-black.png" alt="" />
            <div>
              <span>Free Shipping</span>
              <br />
              <span>enjoy free and fast delivery</span>
            </div>
          </div>{" "}
          <div>
            <img src="../../../public/images/Home/shipping-fast-black.png" alt="" />
            <div>
              <span>Support 24/7</span>
              <br />
              <span>contact us 24 hours a day</span>
            </div>
          </div>{" "}
          <div>
            <img src="../../../public/images/Home/shipping-fast-black.png" alt="" />
            <div>
              <span>Low Price Commitment</span>
              <br />
              <span>daily sales mean you always save</span>
            </div>
          </div>{" "}
          <div>
            <img src="../../../public/images/Home/shipping-fast-black.png" alt="" />
            <div>
              <span>100% Payment Secure</span>
              <br />
              <span>we ensure secure payment</span>
            </div>
          </div>
        </div>

        {/*end fress support price */}
    </>
  )
}

export default GridIcons