import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Item.css';
import { Button, Icon, Label, Divider } from 'semantic-ui-react';

class Item extends Component {
  constructor( props ){
    super( props );
    this.buyNow = this.buyNow.bind(this, this.props.dbkey);
    this.toBasket = this.toBasket.bind(this, this.props.dbkey);
  }

    listIMG(){
    if(this.props.imgs){
      return this.props.imgs.map((img, index) => (<img className="shrink" src={img} alt={index} key={index} />))
    }   
  }
  
  loadImages(){
    const elements = this.listIMG();
    return <Carousel
    showThumbs={false}
    showStatus={false}
    showIndicators={false}>
    {elements}
  </Carousel>
  }

  buyNow(key){
    alert('you want to buy ' + key);
  }

  toBasket(key){
    alert('you added to the basket ' + key);
  }

  render() {
    return (
      <div className='Item'>
        <h3>{this.props.title}</h3>

        {this.loadImages()}

        <div className="extraInfo">
          <Label color='green' pointing size='large'>
            {'$' + this.props.price}
          </Label>
          <Divider />
          <Button.Group>
            <Button positive onClick={this.buyNow}>Buy Now</Button>
            <Button.Or />
            <Button onClick={this.toBasket}>
              <Icon name='shopping basket' />
            </Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

export default Item;
