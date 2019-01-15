import React from 'react';
import Item from '../../Components/Item';
import {Loader} from 'semantic-ui-react';
import firebase from 'firebase';

class Shop extends React.Component {
  constructor(props){
    super(props);
    this.state = {itemList: null};
  }

  componentDidMount(){
    this.fetchInfo();
  }

  fetchInfo(){
    const that = this;
    firebase.database().ref('/products/').once('value').then(function(snapshot) {
      that.copyToState(snapshot.val());
    });
  }

  addKey(data){
    const values = Object.values(data);
    const keys = Object.keys(data);
    for (var i=0; i < keys.length; i++){
      values[i] = Object.assign(values[i], {dbkey: keys[i]});
    }
    return values;
  }

  copyToState(data){
    const ready = this.addKey(data);
    this.setState({itemList: ready});
  }

  renderItems(){
    if(this.state.itemList){
     return this.state.itemList.map((item, index) => (
        <Item title={item.title} price={item.price} imgs={item.imgs} key={index} dbkey={item.dbkey} />
        ));
    }
  }
  
  render () {
          console.log(this.state);
   if(!this.state.itemList){
    return (<Loader active size='massive'/>)
  };
    return (<div className='Shop'>
      {this.renderItems()}
    </div>);
  }
}

export default Shop;