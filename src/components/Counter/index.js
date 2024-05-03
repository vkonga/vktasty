import './index.css'

const Counter = props => {
  const {foodId, quantity, increaseQuantity, decreaseQuantity} = props

  const onDecrement = () => {
    decreaseQuantity(foodId)
  }

  const onIncrement = () => {
    increaseQuantity(foodId)
  }

  return (
    <div className="cart-quantity-container">
      <button
        type="button"
        testid="decrement-quantity"
        className="quantity-button"
        onClick={onDecrement}
      >
        -
      </button>
      <p testid="item-quantity" className="food-quantity">
        {quantity}
      </p>
      <button
        type="button"
        testid="increment-quantity"
        className="quantityy-button"
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  )
}

export default Counter