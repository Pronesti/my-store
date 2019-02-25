import React from 'react';
import {Form, Button, Card, Input, Label} from 'semantic-ui-react';
import './index.css';

class AddItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {disabled:true, files: []};
  }
  handleUpload(e){
    console.log(e.target.files);
    this.setState({files: this.state.files.push(e.target)})
  }


  render() {
    console.log(this.pond);
    const {disabled} = this.state;
    return (
      <div className='AddItem'>
    <Card centered className="centerForm">
    <Card.Content header='Add Product' />
    <Card.Content extra>
      <input type="file" multiple onChange={(e)=>this.handleUpload(e)}></input>
    </Card.Content>
    <Card.Content extra>
    <Form>
    <Form.Field>
      <label>Product Title</label>
      <input placeholder='Product Title' />
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      <input placeholder='Description' />
    </Form.Field>
    <Form.Field>
    <label>Price</label>
    <Input labelPosition='right' type='text' placeholder='Amount'>
    <Label basic>$</Label>
    <input />
  </Input>
    </Form.Field>
    <Button type='submit' disabled={disabled}>Submit</Button>
    <Button type='submit' onClick={()=> console.log(this.pond.getFiles())}>State</Button>
  </Form>
    </Card.Content>
  </Card>
        
      </div>
    );
  }
}

export default AddItem;
