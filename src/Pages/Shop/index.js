import React from 'react';
import Item from '../../Components/Item';
import {Loader} from 'semantic-ui-react';

class Shop extends React.Component {
  constructor(props){
    super(props);
    this.state = {itemList: null};
  }

  componenDidMount(){
    this.fetchInfo();
  }

  fetchInfo(){

  }

  renderItems(){
    this.state.itemList.map((item, index) => {
      return <Item title={item.title} price={item.price} imgs={item.imgs} key={index} />
    });
  }
  
  render () {
    console.log(this.state.itemList);
    if(!this.state.itemList){
      return (<Loader active size='massive'/>)
    };

    return (<div className='Shop'>
      <Item title="Painting" price={50} />
      <Item title="Other" price={100} />
      <Item title="Other" price={100} />
      <Item title="Other" price={100} />
      <Item title="Other" price={100} />
      <Item title="Other" price={100} />
      <Item title="Other" price={100} />
      <Item title="Other" price={100} />
      <Item title="Other" price={100} />
      <Item title="Other" price={100} />
      <Item title="Other" price={100} />
      <Item title="Other" price={100} />
      <Item title="Other" price={100} />
      <Item title="Other" price={100} />
    </div>);
  }
}

export default Shop;