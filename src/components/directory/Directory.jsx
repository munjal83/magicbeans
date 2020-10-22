import React from 'react';
import MenuItem from '../menuitem/MenuItem';
import './Directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'beverages',
          imageUrl: 'https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          id: 1,
          linkUrl: 'beverages',
        },
        {
          title: 'merchandise',
          imageUrl: 'https://images.pexels.com/photos/373888/pexels-photo-373888.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          id: 2,
          linkUrl: 'shop/merchandise',
        },
        {
          title: 'food',
          imageUrl: 'https://images.pexels.com/photos/6194/bread-food-baking-homemade.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          id: 3,
          linkUrl: 'shop/food',
        },
        {
          title: 'coffee',
          imageUrl: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          size: 'large',
          id: 4,
          linkUrl: 'shop/coffee',
        },
        {
          title: 'tea',
          imageUrl: 'https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          size: 'large',
          id: 5,
          linkUrl: 'shop/tea',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}

export default Directory;
