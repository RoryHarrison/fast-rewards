import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class DropdownWrapper extends Component {
    constructor(props) {
        super(props);

        this.handleChap = this.handleChap.bind(this);
        this.handleLevel = this.handleLevel.bind(this);
        this.handleVIP = this.handleVIP.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleChap(e){
        this.props.onSelectChapter(e);
    }

    handleLevel(e){
        this.props.onSelectLevel(e);
    }

    handleVIP(e){
        this.props.onSelectVIP(e);
    }

    handleButton(e){
        this.props.onCalculate(e);
    }

    render() {
        return (
            <div className="container ddwrapper">
                <div className="row">
                    <div className="col-md mb-3">
                        <select id="chapSelect" className="ddselect" defaultValue="" onChange={this.handleChap}>
                            <option value=""disabled hidden>Chapter</option>
                            <option value="12-40">12-40</option>
                            <option value="14-40">14-40</option>
                            <option value="16-40">16-40</option>
                            <option value="18-40">18-40</option>
                            <option value="20-60">20-60</option>
                            <option value="22-60">22-60</option>
                            <option value="24-60">24-60</option>
                            <option value="25-60">25-60</option>
                            <option value="26-60">26-60</option>
                            <option value="32-60">32-60</option>
                        </select>
                    </div>
                    <div className="col-md mb-3">
                        <select id="levelSelect" className="ddselect" defaultValue="" onChange={this.handleLevel}>
                            <option value=""disabled hidden>Level</option>
                            <option value="<90">&lt;90</option>
                            <option value="90">90</option>
                            <option value="95">95</option>
                            <option value="100">100</option>
                            <option value="105">105</option>
                            <option value="110">110</option>
                            <option value="120">120</option>
                            <option value="130">130</option>
                            <option value="140">140</option>
                            <option value="150">150</option>
                            <option value="160">160</option>
                            <option value="170">170</option>
                            <option value="180">180+</option>
                        </select>
                    </div>
                    <div className="col-md mb-3">
                        <select id="vipSelect" className="ddselect" defaultValue="" onChange={this.handleVIP}>
                            <option value=""disabled hidden>VIP</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                        </select>
                    </div>
                </div>
                <div className="row justify-content-md-center ddbutton">
                    <div className="col-sm-auto text-center">
                        <Button className="btn-info" size="lg" onClick={this.handleButton}>Calculate</Button>
                    </div>
                </div>
            </div>
        )
    }
}
