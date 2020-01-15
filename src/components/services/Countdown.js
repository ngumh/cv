import React from 'react'
//Moments Js
import moment from 'moment';
import './Countdown.css'
//

export default class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    }
    componentDidMount(){
        this.interval = setInterval(() => {
            const then = moment("01 23 2020, 16:00 ", "M DD YYYY, h:mm a")
            const now = moment()
            const countdown = moment(then - now)
            const days = countdown.format('D')
            const hours = countdown.format('HH')
            const minutes = countdown.format('mm')
            const seconds = countdown.format('ss')
            this.setState({ days, hours, minutes, seconds })
        },1000)
    }
    componentWillMount(){
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    render(){
        const { days, hours, minutes, seconds } = this.state;
        return(
            <div className="has-background-dark section">
                <h1 className="has-text-white has-text-centered is-uppercase">Sắp Đến Tết Rồi</h1>
                <div className="countdown-wrapper">
                    <div className="countdown-item">
                        {days}
                        <span className="has-text-white">Days</span>
                    </div>
                    <div className="countdown-item">
                        {hours}
                        <span className="has-text-white">Hours</span>
                    </div>
                    <div className="countdown-item">
                        {minutes}
                        <span className="has-text-white">Minutes</span>
                    </div>
                    <div className="countdown-item">
                        {seconds}
                        <span className="has-text-white">Seconds</span>
                    </div>
                </div>
            </div>
        )
    }
}