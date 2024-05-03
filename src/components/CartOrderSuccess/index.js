import {Link} from 'react-router-dom'

import FoodContext from '../../Context/FoodContext'

import './index.css'

const CartOrderSuccess = () => (
  <FoodContext.Consumer>
    {value => {
      const {removeAllCartItems} = value

      const clearCart = () => {
        removeAllCartItems()
      }

      return (
        <>
          <div className="success-container">
            <img
              src="https://res.cloudinary.com/dkwefqjnn/image/upload/v1660802118/Vector_ibjrdd.png"
              alt="success"
              className="success-image"
            />
            <h1 className="success-heading">Payment Successful</h1>
            <p className="success-text">
              Thank you for ordering Your payment is successfully completed.
            </p>
            <Link to="/" className="success-link">
              <button
                type="button"
                className="success-home"
                onClick={clearCart}
              >
                Go To Home Page
              </button>
            </Link>
          </div>
        </>
      )
    }}
  </FoodContext.Consumer>
)

export default CartOrderSuccess