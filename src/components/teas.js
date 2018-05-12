import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Tabs, Tab } from 'react-mdl';
import { getTeas, updateCart } from '../api';
import { well, row, Col } from 'react-mdl';
import { Grid, Cell, div } from 'react-mdl';
import ZinModal from './modal';
import { Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl';
import checkout from './checkout'



class Teas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      teas:[],
      modalIsOpen: false
    };

    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    getTeas ()
    .then (teas => this.setState ({teas}))
    .catch (console.log)
  }

  handleOpenDialog(id) {
   this.setState({
     openDialog: true,
     selectedtea:id
   });
 }

 handleCloseDialog() {
   this.setState({
     openDialog: false,
     selectedtea:null
   });
 }

 addToCart() {
   const selectedtea = this.state.teas.find((tea) => tea.id == this.state.selectedtea)
   updateCart({
     name:selectedtea.name,
     quantity:1,
     price:selectedtea.price
   })
   .then (() => this.handleCloseDialog())
 }

  render() {
    const selectedtea = this.state.openDialog ? this.state.teas.find((tea) => tea.id == this.state.selectedtea)
    :{}
    return(
      <div>
      <Grid className="projects-grid">
        {
          this.state.teas.map(tea => (
            <Card key={tea.id} shadow={50} style={{width: '400px', height: '450px', margin: 'auto', top: '133px', body: 'raised'}}>
              <CardTitle expand style={{color: '#fff', background: 'url(' + tea.image + ') bottom right 100% no-repeat #46B6AC', backgroundSize: 'cover'}}>{tea.name}</CardTitle>
              <CardText>
                {tea.description}
              </CardText>
              <CardActions border>

                <Button colored onClick={this.handleOpenDialog.bind(this,tea.id)} raised ripple>Buy</Button>



              </CardActions>
              {/* <ZinModal modalIsOpen={this.state.modalIsOpen}
              closeModal={this.closeModal}/> */}
            </Card>
          ))
        }
    </Grid>
    <Dialog open={this.state.openDialog}>
          <DialogTitle>Add to Cart </DialogTitle>
          <DialogContent>
          <h3>{selectedtea.name}</h3>
          <img src = {selectedtea.image}/>
          </DialogContent>
          <DialogActions fullWidth>
             <Button type='button' onClick={this.addToCart}>Add to cart</Button>
             <Button type='button' onClick={this.handleCloseDialog}>cancel</Button>
          </DialogActions>
          </Dialog>
          </div>
    )
  }
}



export default Teas;
