import React from 'react'
import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
function CreditCardMenu() {


  return (
    <DropdownButton
      id="credit-card-menu"
      title={selectedCard ? selectedCard.name : 'Select a Credit Card'}
      variant="secondary"
    >
      {creditCards.map((card) => (
        <Dropdown.Item
          key={card.id}
          onClick={() => setSelectedCard(card)}
        >
          <img src={card.imageUrl} alt={card.name} style={{ width: '64px', height: '40px' }} />
          {card.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  )
}

export default CreditCardMenu