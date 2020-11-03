import React from 'react'

const QuickView = ({ itemData, onClose }) => {


  return (
    <div>
      <button type="button" onClick={onClose}>x</button>
      <p>Name: {itemData.name}</p>
      <p>Amount: {itemData.amount}</p>
      <p>Get By: {itemData.date}</p>
      <p>Location: {itemData.location}</p>
      <p>Description: {itemData.description}</p>
    </div>
  )
}

export default QuickView