import React, { Component } from 'react'
import data from './data/fast-rewards.json'
import './Main.css'
import DropdownWrapper from './DropdownWrapper'
import banner from '../images/afkbanner.jpg'
import diamond from '../images/diamond.png'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chapter: '',
            level: '',
            vip: '',
            viewresult: false,
        }

        this.handleChapter = this.handleChapter.bind(this);
        this.handleLevel = this.handleLevel.bind(this);
        this.handleVIP = this.handleVIP.bind(this);
        this.handleCalculate = this.handleCalculate.bind(this);
    }

    handleChapter(e) {
        this.setState({ chapter: e.target.value });
        console.log(data)
    }

    handleLevel(e) {
        this.setState({ level: e.target.value });
    }

    handleVIP(e) {
        this.setState({ vip: e.target.value });
    }

    handleCalculate(e) {
        if (this.state.chapter && this.state.level && this.state.vip){
            this.setState({ viewresult: true})
        }
    }

    render() {
        const view = this.state.viewresult
        let result;

        if (view){
            if(this.state.chapter === "12-40" || this.state.chapter === "14-40" || this.state.chapter === "16-40"){
                result = (
                <div className="text-center mt-3">
                    <h4>Fast Reward Value:</h4>
                        <div className="mt-5 result">
                            <h2>{data[this.state.chapter][this.state.vip]["ALL"]}<img src={diamond} className="diamond" alt=" Diamonds"/></h2>
                        </div>
                </div>)
            }else{
                result = (
                <div className="text-center mt-3">
                    <h4>Fast Reward Value:</h4>
                        <div className="mt-5 result">
                            <h2>{data[this.state.chapter][this.state.vip][this.state.level]}<img src={diamond} className="diamond" alt=" Diamonds"/></h2>
                        </div>
                </div>)
            }
        }

        return (
            <div className="container-fluid no-padding">
                <div className="row bannerrow">
                    <img src={banner} className="img-fluid banner-img" alt="Banner" />
                </div>
                <div className="row justify-content-md-center text-center title">
                    <div className="col-sm-auto text-center mt-5">
                        <h1>Fast Rewards Value Calculator</h1>
                    </div>
                </div>
                <div className="row justify-content-md-center text-center subtitle">
                    <div className="col-sm-auto text-center">
                        <h5>Based upon data calculated by <a href="https://reddit.com/u/inSeason">/u/inSeason</a></h5>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-sm-auto d-flex text-center">
                        <DropdownWrapper
                            onSelectChapter={this.handleChapter}
                            onSelectLevel={this.handleLevel}
                            onSelectVIP={this.handleVIP}
                            onCalculate={this.handleCalculate}
                        />
                    </div>
                </div>
                
                <div className="row justify-content-md-center resultbox">
                    <div className="col-sm-auto">
                        { result }
                    </div>
                </div>

                <div className="row footer">
                    <div className="col-lg dflex fcol">
                        <h5 className="text-center mt-1">How to Use:</h5>
                        <ul>
                            <li>Enter the highest chapter you have beaten from the dropdown list</li>
                            <li>Enter your player level</li>
                            <li>Enter your VIP level</li>
                        </ul>
                        <p className="ml-3">The calulator shows the diamond value of your fast rewards, it is recommended to buy fast rewards if their value is at least 2x the cost. Example: If the value of your fast rewards is 160 you should buy fast rewards for 50 and 80 diamonds.</p>
                    </div>
                    <div className="col-lg dflex text-center fcol">
                        <h5 className="text-center mt-1">Credits:</h5>
                        <p>
                            <br />
                            Huge shoutout to <a href="https://reddit.com/u/inSeason">inSeason</a> for compiling all of this information. 
                            For a more detailed explainataion of how these values are calculated plase check out his reddit post <a href="https://www.reddit.com/r/afkarena/comments/iu7vnt/optimizing_fast_rewards_reference_sheet/">here</a>.
                            <br />
                            <br />
                            View <a href="https://reddit.com/u/datguywind">/u/datguywind</a>'s article on the data <a href="https://afk.guide/fast-rewards/">here</a>.
                            <br />
                            <br />
                            Webpage made by <a href="https://reddit.com/u/rory_harrison5">rpwh</a>
                        </p>
                    </div>
                    <div className="col-lg dflex text-center fcol">
                        <h5 className="text-center mt-1">Breakdown:</h5>
                        <a href="https://imgur.com/gallery/WY3SNVm" alt="imgur"><img className="breakdown" src="https://i.imgur.com/2PNa4zP.png" alt="Breakdown" /></a>
                    </div>
                </div>

            </div>
        )
    }
}
