import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from '../carasoul/Item';


function CarasoulComp() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [items, ] = useState([
    {
      id: 1,
      title: '1',
      imgUrl:
        'https://images.unsplash.com/photo-1597046835715-16f81ac132c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 2,
      title: '2',
      imgUrl:
        'https://images.unsplash.com/photo-1518882174711-1de40238921b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1252&q=80',
    },
    {
      id: 3,
      title: '3',
      imgUrl:
        'https://images.unsplash.com/photo-1601980760775-07ce3c710bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80',
    },
    {
      id: 4,
      title: '4',
      imgUrl:
        'https://images.unsplash.com/photo-1610573501131-a9766c02001a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 5,
      title: '5',
      imgUrl:
        'https://images.unsplash.com/photo-1594064142712-e84e63f95a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    },
    {
      id: 6,
      title: '6',
      imgUrl:
        'https://images.unsplash.com/photo-1619333774340-3a878585c2e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    },
    {
      id: 7,
      title: '7',
      imgUrl:
        'https://images.unsplash.com/photo-1619885874281-328580f33494?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80',
    },
  ]);

  return (
    <div className="carasoulComp">
      <hr />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item
              key={item.id}
              style={{
                backgroundImage: `url(${item.imgUrl})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                marginTop: '3.5rem',
              }}
            ></Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CarasoulComp;
