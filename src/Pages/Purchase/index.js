import React, { Fragment } from 'react';
import { Step, Button, Icon,Container } from 'semantic-ui-react';
import './Purchase.css';

class Purchase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step0:  {
        key: 'shipping',
        active: true,
        icon: 'truck',
        title: 'Shipping',
        description: 'Choose your shipping options',
        completed: false
      },
      step1: {
        key: 'billing',
        active: false,
        icon: 'payment',
        title: 'Billing',
        description: 'Enter billing information',
        completed: false
      },
      step2: {
        key: 'confirm',
        active: false,
        icon: 'info',
        title: 'Confirm Order',
        completed: false
      },
      progress: 1
    };
  }

  nextStep() {
    this.setState({ progress: this.state.progress + 1 });
    switch (this.state.progress) {
      case 0: {
        return <Fragment />;
      }
      case 1: {
        this.setState(prevState => ({
          step0: {
              ...prevState.step0,
              completed: true,
              active: false,
          },
          step1:{
            ...prevState.step1,
            active: true,
          }
      }))
        return <Fragment />;
      }
      case 2: {
        this.setState(prevState => ({
          step1: {
            ...prevState.step0,
            completed: true,
            active: false,
        },
        step2:{
          ...prevState.step1,
          active: true,
        }
    }))
        return <Fragment />;
      }
      default:
        break;
    }
  }

  display(number) {
    switch (number) {
      case 0: {
        return <Fragment />;
      }
      case 1: {
        return <Fragment />;
      }
      case 2: {
        return <Fragment />;
      }
      default:
        break;
    }
  }

  render() {
    const { step1,step2,step0, progress } = this.state;
    return (
      <div className='Purchase'>
      <Container className="purchaseForm">
        <Step.Group items={[step0,step1,step2]} />
       
       <Container> {this.display(progress)} </Container>

        <Button animated onClick={() => this.nextStep()}>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
        </Container>
      </div>
    );
  }
}

export default Purchase;
