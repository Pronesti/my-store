import React, {Fragment} from 'react';
import {Divider ,Header, Segment, Accordion, Icon, Image} from 'semantic-ui-react';
import './Home.css';


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {activeIndex: null};
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
      }

    whereToFindUs(){
        return (<Fragment>
            <Divider horizontal>
            <Header as='h3'>
              <Icon name='map outline' />
              Find Us
            </Header>
          </Divider>
          <Segment className="borderless">

    
      <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIMZReuy7NqOvmeHX61OBwaw-s5msAKSib-U8fb8ah3lR3of_AQ' alt="map" centered/>
      <Header as='h4'> Your Adress here</Header>
          </Segment>
        </Fragment>);
        }

    aboutUs(){
return (<Fragment>
    <Divider horizontal>
    <Header as='h3'>
      <Icon name='copyright outline' />
      About Us
    </Header>
  </Divider>
  <Segment className="borderless">
  <p>Lorem ipsum</p>
  </Segment>
</Fragment>);
} 
    faq(activeIndex){
    return (<Fragment>
         <Divider horizontal>
      <Header as='h3'>
        <Icon name='question circle outline' />
        F.A.Q
      </Header>
    </Divider>
    <Segment className="borderless">
    <Accordion>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          What is a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
            be found as a welcome guest in many households across the world.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          What kinds of dogs are there?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and temperament. Owners often
            select a breed of dog that they find to be compatible with their own lifestyle and
            desires from a companion.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          How do you acquire a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from pet shops, private
            owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
            owner allows you to assess the pedigree and upbringing of your dog before choosing to
            take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog
            who may not find one so readily.
          </p>
        </Accordion.Content>
      </Accordion>
    </Segment>
    </Fragment>);
    } 


  render () {
      const {activeIndex} = this.state;
    return <div className='Home'>
    <Segment className="HomeHeader">
    <Header as='h1'>Your Company    Name</Header>
    </Segment>
    {this.aboutUs()}
    {this.whereToFindUs()}
    {this.faq(activeIndex)}
   

    </div>
  }
}

export default Home;