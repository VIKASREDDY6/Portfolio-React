import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
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
            <CardTitle style={{color: '#000', height: '176px', background: ' center / cover'}} >Exploratory Data Analysis Tool</CardTitle>
            <CardText>
              Exploratory Data Analysis Tool made with Streamlit.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/VIKASREDDY6/Exploratory-Data-Analysis-Tool" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
              
              <Button colored><a href="https://edawithease.herokuapp.com" rel="noopener noreferrer" target="_blank">Website Link</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: ' center / cover'}} >ML Classifires Tool</CardTitle>
            <CardText>
              ML Classifiers Tool to use automated ML Classifiers for Classification.
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/VIKASREDDY6/ML-Classifiers-Tool" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
              
            <Button colored><a href="https://ml-classifiers-tool.herokuapp.com" rel="noopener noreferrer" target="_blank">Website Link</a></Button>
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
            <CardTitle style={{color: '#000', height: '176px', background: ' center / cover'}} >Diabetes Prediction</CardTitle>
            <CardText>
              Diabetes prediction Web App for predicting diabetic condition of a person.
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/VIKASREDDY6/Diabetes-Prediction-with-Machine-Learning" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
              
              <Button colored><a href="https://diabetes-prediction-ml.herokuapp.com" rel="noopener noreferrer" target="_blank">Website Link</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 4 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: ' center / cover'}} >Loan Approval Prediction</CardTitle>
            <CardText>
              Loan Approval prediction Web App for predicting loan approval status of a person.
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/VIKASREDDY6/Loan-Approval-Prediction" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
              
            <Button colored><a href="https://loan-approval-prediction.herokuapp.com/" rel="noopener noreferrer" target="_blank">Website Link</a></Button>
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
            <CardTitle style={{color: '#000', height: '176px', background: ' center / cover'}} >E-Learning for Kids</CardTitle>
            <CardText>
            A website for kids to help them start learning and introduce them to computers.
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/VIKASREDDY6/Scribble-WebApp" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
              
            <Button colored><a href="https://scribble-art.web.app/" rel="noopener noreferrer" target="_blank">Website Link</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 6 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: ' center / cover'}} >Sudoku solver and game</CardTitle>
            <CardText>
            A Sudoku solver and GUI application developed using Python-Pygame for playing sudoku and can automatically solve it using AI algorithm called Backtracking.
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/VIKASREDDY6/Sudoku-Solver" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
              
              
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
          <Tab>Streamlit Tools</Tab>
          <Tab>Prediction Apps</Tab>
          <Tab>Other projects</Tab>
          
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

export default Projects;
