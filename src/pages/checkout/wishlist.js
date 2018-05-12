import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Tabs, Tab } from 'react-mdl'
import teas from '../wishlist';
import { well, row, Col } from 'react-mdl';
import { Grid, Cell, div } from 'react-mdl';

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  componentDidMount() {
    console.log(wishlist);
  }

  render() {
    return(








    );
  }
}


export default Wishlist;
