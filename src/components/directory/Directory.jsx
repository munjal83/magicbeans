import React from 'react';
import { MenuItem } from '../menuitem/MenuItem';
import './Directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'beverages',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/beverages',
        },
        {
          title: 'merchandise',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/merchandise',
        },
        {
          title: 'food',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/food',
        },
        {
          title: 'coffee',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/coffee',
        },
        {
          title: 'tea',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
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
        {this.state.sections.map(({ title, id, imageUrl, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
        ))}
      </div>
    );
  }
}

export default Directory;
