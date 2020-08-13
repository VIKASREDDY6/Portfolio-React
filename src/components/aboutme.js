import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class About extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: ' center / cover'}} >Machine Learning</CardTitle>
            <CardText>
              Machine Learning course in Coursera.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://coursera.org/share/fdce23c72011ab4650f1c3456241a2c4" rel="noopener noreferrer" target="_blank">Link</a></Button>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: ' center / cover'}} >SQL for Data Science</CardTitle>
            <CardText>
            SQL for Data science course in Coursera.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://coursera.org/share/39490d34c8cac2009ef7e8d0cc369a66" rel="noopener noreferrer" target="_blank">Link</a></Button>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Guided Project  */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: ' center / cover'}} >Neural network Visualizer Web App</CardTitle>
            <CardText>
            Neural Network Visualizer Web App guided project in Coursera.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://www.coursera.org/account/accomplishments/certificate/2ATGEP6EFLSR" rel="noopener noreferrer" target="_blank">Link</a></Button>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: ' center / cover'}} >Python for Machine Learning</CardTitle>
            <CardText>
              Python for Machine Learning course in Great Learning platform.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://olympus1.greatlearning.in/course_certificate/PSQFCVZR" rel="noopener noreferrer" target="_blank">Link</a></Button>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 4 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: ' center / cover'}} >Data Visualization using Python</CardTitle>
            <CardText>
            Data Visualization using python course in Great Learning platform.
              
            </CardText>
            <CardActions border>
              <Button colored><a href="https://olympus1.greatlearning.in/course_certificate/FZIECADC" rel="noopener noreferrer" target="_blank">Link</a></Button>
              
             
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>

      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 5 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: ' center / cover'}} >A Study on Web Intelligence for the Internet of Things</CardTitle>
            <CardText>
             Published in the International Journal of Psychosocial Rehabilitation.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://www.psychosocial.com/article/PR190250/8831" rel="noopener noreferrer" target="_blank">Link</a></Button>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        
          </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Coursera Certifiactes</Tab>
          <Tab>Great Learning Certificates</Tab>
          <Tab>Research Paper</Tab>
          
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default About;
