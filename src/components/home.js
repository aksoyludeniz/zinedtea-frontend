import React, {Component} from 'react';
import {Tabs, Tab} from 'react'
import {Grid, Cell} from 'react-mdl'
import { findDOMNode } from 'react-dom';
// import $ from 'jquery';

class Home extends Component {

  state = {
    teas: [
      {
        "id": 1,
        "name": "Super Interpolation",
        "description": "Linden Leaf, Elderberry, Burdock Root & Key Lime",
        "image": "https://github-production-user-asset-6210df.s3.amazonaws.com/31421883/39390080-cbc533c2-4a5d-11e8-9b70-1853f8972d80.png",
        "price": 10.00
      }, {
        "id": 2,
        "name": "Mineral Script",
        "description": "Sarsaparilla, Stinging Netle & Red Clover",
        "image": "https://github-production-user-asset-6210df.s3.amazonaws.com/31421883/39390080-cbc533c2-4a5d-11e8-9b70-1853f8972d80.png",
        "price": 10.00
      }, {
        "id": 3,
        "name": "Bootcamp Groove",
        "description": "Damiana, Ginger, Sensitiva & Yohimbe",
        "image": "https://github-production-user-asset-6210df.s3.amazonaws.com/31421883/39390080-cbc533c2-4a5d-11e8-9b70-1853f8972d80.png",
        "price": 10.00

      }

    ]
  }

  componentDidMount() {

  }

  render() {
    return (
    <div className="home-body">
      <Grid className="home-grid">
        <Cell col={12}><h1 className="zoomIn animated font-effect-shadow-multiple">ZINEDTEA</h1></Cell>
      </Grid>
    </div>)
  }
}

export default Home;
