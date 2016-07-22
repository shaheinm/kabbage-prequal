import React from 'react';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

const BusinessSelect = React.createClass({
  getInitialState: function(){
      return{};
  },

  handleChange: function(e, index, value) { this.setState({value}); },

  render: function () {
    return (
      <SelectField
          required={true}
          floatingLabelText="Type of Business"
          value={this.state.value}
          onChange={this.handleChange}
          style={{overflow: 'hidden', width: 280}}>
          <MenuItem value="Accounting" primaryText="Accounting" />
          <MenuItem value="Amusement" primaryText="Amusement" />
          <MenuItem value="AutoRepair" primaryText="Auto Repair" />
          <MenuItem value="BusinessServices" primaryText="Business Services" />
          <MenuItem value="Catering" primaryText="Catering" />
          <MenuItem value="ChildCare" primaryText="Child Care" />
          <MenuItem value="ComputerServices" primaryText="Computer Services" />
          <MenuItem value="ConsumerGoodsRetailStore" primaryText="Consumer Goods Retail Store" />
          <MenuItem value="ConsumerGoodsOnlineStore" primaryText="Consumer Goods Online Store" />
          <MenuItem value="ConsumerGoodsOnlineAndOffline" primaryText="Consumer Goods Online and Offline" />
          <MenuItem value="Construction" primaryText="Construction" />
          <MenuItem value="Dentists" primaryText="Dentists" />
          <MenuItem value="DryCleaning" primaryText="Dry Cleaning" />
          <MenuItem value="Equipment" primaryText="Equipment" />
          <MenuItem value="FoodService" primaryText="Food Service" />
          <MenuItem value="Grocery" primaryText="Grocery" />
          <MenuItem value="Health" primaryText="Health" />
          <MenuItem value="HomeRepair" primaryText="Home Repair" />
          <MenuItem value="Hotels" primaryText="Hotels" />
          <MenuItem value="Insurance" primaryText="Insurance" />
          <MenuItem value="Janitorial" primaryText="Janitorial" />
          <MenuItem value="Landscape" primaryText="Landscape" />
          <MenuItem value="Optometrists" primaryText="Optometrists" />
          <MenuItem value="Physicians" primaryText="Physicians" />
          <MenuItem value="Restaurants" primaryText="Restaurants" />
          <MenuItem value="Salons" primaryText="Salons" />
          <MenuItem value="Taxis" primaryText="Taxis" />
          <MenuItem value="Trucking" primaryText="Trucking" />
          <MenuItem value="Veterinarians" primaryText="Veterinarians" />
      </SelectField>
      );
    },
});

export default BusinessSelect;
