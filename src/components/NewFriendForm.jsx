import React, {Component, PropTypes} from 'react';

import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

import Toggle from 'material-ui/lib/toggle';

import styles from '../styles/rootStyles';

class NewFriendForm extends Component {
  static propTypes = {
    onCreateNewFriend: PropTypes.func.isRequired
  }

  initialState = {
    firstName: '',
    lastName: '',
    twitter: '',
    isBFF: false
  };

  constructor(props) {
    super(props);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleTwitterChange = this.handleTwitterChange.bind(this);
    this.handleBFFChange = this.handleBFFChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }

  /*Add a Last Name Change Handler below*/
	handleLastNameChange(event) {
  this.setState({lastName: event.target.value});
	}

  /*Add a Twitter Handle Toggle Handler below*/
	handleTwitterChange(event) {
  this.setState({twitter: event.target.value});
	}

	handleBFFChange(event) {
  this.setState({isBFF: event.target.value});
	}

  handleSaveClick() {
    /*Cache friend from this component's state below*/
    // ???????

    /*Trigger this component's prop: onCreateNewFriend and pass in our new friend*/
    this.props.onCreateNewFriend(this.state)

    /*Reset the form fields by setting this component's state to the initial state*/
    this.setState(this.initialState);
  }

  componentWillMount() {
    this.setState(this.initialState);
  }

  render() {
    /**
    * ES6 Alert - Object Destructuring
    *
    * This is a more terse way of defining variables from an object.
    * Defines variables for all vars on the left from corresponding keyed values
    * in the object on the right.
    *
    * The line below is similar to:
    *
    * let firstName = this.state.firstName;
    * let lastName = this.state.LastName;
    * etc.
    */
    let {firstName, lastName, twitter} = this.state;

    return (
      <div style={styles.friendFormContainer}>
        <h1 style={styles.formHeading}>Add a Friend</h1>
        <div style={styles.inputContainerBase}>
          <TextField
            hintText="Rick"
            floatingLabelText="First Name"
            value={firstName}
            onChange={this.handleFirstNameChange}/>
        </div>

        {/*Add a Last Name TextField below*/}
        {/*be sure to create an onChange handler*/}
				<div style={styles.inputContainerBase}>
          <TextField
            hintText="Ross"
            floatingLabelText="Last Name"
            value={lastName}
            onChange={this.handleLastNameChange}/>
        </div>

        {/*Add a Twitter Handle TextField below*/}
        {/*be sure to create an onChange handler*/}
				<div style={styles.inputContainerBase}>
          <TextField
            hintText="Tweet Tweet"
            floatingLabelText="Twitter"
            value={twitter}
            onChange={this.handleTwitterChange}/>
        </div>

        {/*Add a Twitter Handle Toggle below*/}
        {/*be sure to create an onToggle handler*/}
        {/*Check the Material UI Docs for Toggle http://www.material-ui.com/#/components/toggle*/}
				<div style={styles.inputContainerBase}>
					<Toggle
						label="BFF??"
						style={styles.toggle}
						onToggle={this.handleBFFChange}
					/>
				</div>

        {/*Add a Submit FlatButton below*/}
        {/*be sure to create an onClick handler*/}
        {/*Check the Material UI Docs for Toggle http://www.material-ui.com/#/components/flat-button*/}
				<div style={styles.inputContainerBase}>
					<FlatButton label="Submt" 
						onClick={this.handleSaveClick} />
				</div>

      </div>
    );
  }
}

export default NewFriendForm;
