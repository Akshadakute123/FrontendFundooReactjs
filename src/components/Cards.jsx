import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Noteslist from './NotesList';
import { InputBase } from '@material-ui/core';

export default function Cards() {
  console.log()
// const  itemss=this.props
  return (
    <Card  variant="outlined">
     
       <div>
          <Noteslist />
   
 </div>
    
       {/* <InputBase
       className="noteinfo"
       placeholder="take anote"
        */}
       
       {/* /> */}
     
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}