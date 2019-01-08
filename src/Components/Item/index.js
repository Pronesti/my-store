import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Item.css';
import { Button, Icon, Label, Divider } from 'semantic-ui-react';

class Item extends Component {
  render() {
    return (
      <div className='Item'>
        <h3>{this.props.title}</h3>

        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          width={300}>
          <img
            src='http://www.111ideas.com/wp-content/uploads/2018/07/nature-images-download-for-free.jpg'
            alt={1}
          />

          <img
            src='http://www.uniwallpaper.com/static/images/nature-poems-57a2fb41dfd3f.jpg'
            alt={2}
          />

          <img
            src='http://www.111ideas.com/wp-content/uploads/2018/07/nature-images.jpg'
            alt={3}
          />
        </Carousel>
        <div className="extraInfo">
          <Label color='green' pointing size='large'>
            {'$' + this.props.price}
          </Label>
          <Divider />

          <Button.Group>
            <Button positive>Buy Now</Button>
            <Button.Or />
            <Button>
              <Icon name='shopping basket' />
            </Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

export default Item;
