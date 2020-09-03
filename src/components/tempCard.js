import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = them => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


class TempCard extends Component{
    constructor(props){
        super(props);
    }

    render(){    
        const { classes } = this.props;

        return (
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {this.props.titulo}
                </Typography>
                <br></br>
                <br></br>
                <Typography variant="h5" component="h3">
                    {this.props.estado}  12-05-2019
                </Typography>
                <br></br>
                <br></br>
                <Typography variant="h5" component="h3">
                    Santiago Carrillo
                </Typography>
              </CardContent>
            </Card>
          );
    }
}


export default withStyles(styles, { withTheme: true })(TempCard);