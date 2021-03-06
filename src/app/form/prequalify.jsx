import React from 'react';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import SelectField from 'material-ui/lib/SelectField';
import MenuItem from 'material-ui/lib/menus/menu-item';
import BusinessSelect from './BusinessSelect';
import Dialog from 'material-ui/lib/Dialog';
import FlatButton from 'material-ui/lib/flat-button';
import $ from 'jquery';

let Config = require('Config');

const KabbageForm = React.createClass({
  getInitialState: function() {
    let qualifyAmount;
    return {
      firstName: '',
      lastName: '',
      emailAddress: '',
      businessName: '',
      phoneNumber: '',
      yearStarted: '',
      estimatedFICO: '',
      estimatedAnnualRevenue: '',
      grossPercentageFromCards: '',
      typeOfBusiness: '',
    },
    {
      open: false,
      denied: false,
    }
  },

  handleNameChange: function(e) {
    this.setState({firstName: e.target.value});
  },
  handleLNameChange: function(e) {
    this.setState({lastName: e.target.value});
  },

  handleEmailChange: function(e) {
    this.setState({emailAddress: e.target.value});
  },
  handleBNameChange: function(e) {
    this.setState({businessName: e.target.value});
  },
  handlePhoneChange: function(e) {
    this.setState({phoneNumber: e.target.value});
  },
  handleYearChange: function(e) {
    this.setState({yearStarted: e.target.value});
  },
  handleFicoChange: function(e) {
    this.setState({estimatedFICO: e.target.value});
  },
  handleRevenueChange: function(e) {
    this.setState({estimatedAnnualRevenue: e.target.value});
  },
  handleCardsChange: function(e) {
    this.setState({grossPercentageFromCards: e.target.value});
  },
  handleBusinessTypeChange: function(e, index, value) {
    this.setState({typeOfBusiness: e.target.value});
  },
  handleOpen: function() {
    this.setState({open: true});
  },
  handleApply: function() {
    window.location = this.state.data.RedirectUrl;
  },
  handleDenied: function() {
    this.setState({denied: true});
  },
  handleClose: function() {
    this.setState({denied: false});
  },

  submit: function(e) {
    let self = this;

    e.preventDefault()

    const data = {
      firstName: self.state.firstName,
      lastName: self.state.lastName,
      emailAddress: self.state.emailAddress,
      businessName: self.state.businessName,
      phoneNumber: self.state.phoneNumber,
      yearStarted: self.state.yearStarted,
      estimatedFICO: self.state.estimatedFICO,
      estimatedAnnualRevenue: self.state.estimatedAnnualRevenue,
      grossPercentageFromCards: self.state.grossPercentageFromCards,
      typeOfBusiness: self.refs.typeOfBusiness.state.value,
      api_key: 'vauwg9sbqkrdnzdmr7eyk92t',
    }

    let formBody = [];
    for (let property in data) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    $.ajax({
      url: Config.serverUrl,
      type: 'POST',
      data: formBody,
      success: function(data) {
        self.setState({data: data});
        if (data.Qualified) {
          this.state.qualifyAmount = data.QualifyAmount;
          this.handleOpen();
        }
        else {
          this.handleDenied();
        }
      }.bind(self),
      error: function(xhr, status, err) {
        console.error(Config.serverUrl, status, err.toString());
      }.bind(self),
    });

    //console.log(self.state.data);



    /*self.setState({
      firstName: '',
      lastName: '',
      emailAddress: '',
      businessName: '',
      phoneNumber: '',
      yearStarted: '',
      estimatedFICO: '',
      estimatedAnnualRevenue: '',
      grossPercentageFromCards: '',
      typeOfBusiness: '',
    });*/
  },

  render: function () {
    const actions = [
      <FlatButton
        label="Apply Now!"
        primary={true}
        onTouchTap={this.handleApply}
      />,
    ];

    const denialActions = [
      <FlatButton
        label="Acknowledge"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return(
      <div>
      <Paper style={{ position: 'relative', top: 15, width: 500, display: 'inline-flex'}} zDepth={3}>
        <form style={{ textAlign: 'center', margin: '0 auto', width: 270 }} onSubmit={this.submit}>
          <h2>Kabbage Prequalification Form</h2>
          <p>*All fields are required</p>
          <TextField
              hintText="What is your first name?"
              required={true}
              floatingLabelText="First Name"
              value={this.state.firstName}
              onChange={this.handleNameChange}
          /><br />
          <TextField
            hintText="What is your last name?"
            required={true}
            floatingLabelText="Last Name"
            value={this.state.lastName}
            onChange={this.handleLNameChange}
          /><br />
          <TextField
            hintText="What is your email address?"
            required={true}
            floatingLabelText="Email"
            value={this.state.emailAddress}
            onChange={this.handleEmailChange}
          /><br />
          <TextField
            hintText="What is the name of your business?"
            required={true}
            floatingLabelText="Business Name"
            value={this.state.businessName}
            onChange={this.handleBNameChange}
           /><br />
           <TextField
             hintText="What is your phone number?"
             required={true}
             floatingLabelText="Phone Number"
             value={this.state.phoneNumber}
             onChange={this.handlePhoneChange}
            /><br />
            <TextField
              hintText="When did you start your business?"
              required={true}
              floatingLabelText="Year Started"
              value={this.state.yearStarted}
              onChange={this.handleYearChange}
             /><br />
             <TextField
               hintText="What is your estimated FICO score?"
               required={true}
               floatingLabelText="Estimated FICO Score"
               value={this.state.estimatedFICO}
               onChange={this.handleFicoChange}
              /><br />
              <TextField
                hintText="What is your annual revenue?"
                required={true}
                floatingLabelText="Annual Revenue"
                value={this.state.estimatedAnnualRevenue}
                onChange={this.handleRevenueChange}
               /><br />
               <TextField
                 hintText="What percentage of your annual revenue is from credit card transactions?"
                 required={true}
                 floatingLabelText="Annual Revenue from Credit Cards"
                 value={this.state.grossPercentageFromCards}
                 onChange={this.handleCardsChange}
                /><br />
              <BusinessSelect ref="typeOfBusiness"/>
              <br /><br />
         <RaisedButton primary={true} label="Submit" type="submit" value="Post"/>
         <br /><br />
        </form>
    </Paper>
      <Dialog
        title="You Are Pre-Qualified!"
        actions={actions}
        modal={true}
        open={this.state.open}
      >
        You are pre-qualified for ${this.state.qualifyAmount}.
      </Dialog>
      <Dialog
        title="You Did Not Pre-Qualify"
        actions={denialActions}
        modal={true}
        open={this.state.denied}
      >
        Unfortunately, you do not qualify for a Kabbage loan at this time.
      </Dialog>
    </div>
    );
  },
});

export default KabbageForm;
