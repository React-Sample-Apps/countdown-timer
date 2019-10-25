import React, {Component} from 'react'

class CountDown extends Component {

    state = {
        days: 0, 
        hours: 0, 
        min: 0, 
        sec: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const date = this.calculateCountdown(this.props.date);
            date ? this.setState(date) : clearInterval(this.interval);
          }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    calculateCountdown (endDate) {
        let difference = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
    
        if (difference <= 0) return false
    
        const timeLeft = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0
        }
    
        if (difference >= 86400) { // 24 * 60 * 60
            timeLeft.days = Math.floor(difference / 86400);
            difference -= timeLeft.days * 86400;
          }
          if (difference >= 3600) { // 60 * 60
            timeLeft.hours = Math.floor(difference / 3600);
            difference -= timeLeft.hours * 3600;
          }
          if (difference >= 60) {
            timeLeft.min = Math.floor(difference / 60);
            difference -= timeLeft.min * 60;
          }
          timeLeft.sec = difference;
      
          return timeLeft;
    }

    addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
          value = '0' + value;
        }
        return value;
      }

    render () {
        const { days, hours, min, sec} = this.state
        
        return (
            <div className="content">
                <div className="el">
                    {this.addLeadingZeros(days)} <span>days</span>
                </div>                
                <div className="el">
                    {this.addLeadingZeros(hours)} <span>hours</span>
                </div>                
                <div className="el">
                    {this.addLeadingZeros(min)} <span>min</span>
                </div>                
                <div className="el">
                    {this.addLeadingZeros(sec)} <span>sec</span>
                </div>
            </div>
        )
    }
}

CountDown.defaultProps = {
    date: new Date()
  };

export default CountDown