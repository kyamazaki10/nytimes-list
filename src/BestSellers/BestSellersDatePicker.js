import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import './BestSellersDatePicker.css';

class BestSellersDatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <Paper square={true} className="date-paper">
        <Typography variant="subtitle1">
          <span>The New York Times Best Sellers as published on</span>
          <form noValidate onChange={this.handleDateChange} className="date-picker">
            <TextField id="date" label="Date" type="date" defaultValue={this.props.date} />
          </form>
        </Typography>
      </Paper>
    );
  }
}

export default BestSellersDatePicker;
