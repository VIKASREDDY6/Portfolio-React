import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Vikas Reddy K</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am an Artificial Intelligence enthusiast and eager to start my career in the same field or related fields like Machine Learning and Data Science. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            
            <h5>Phone</h5>
            <p>9182703247</p>
            <h5>Email</h5>
            <p>reddyvikas995@gmail.com</p>
            <h5>LinkedIn</h5>
            <p><a href="https://www.linkedin.com/in/vikas-reddy-108578170">Visit my LinkedIn Profile.</a></p>
            <h5>GitHub</h5>
            <p><a href="https://github.com/VIKASREDDY6">Visit my GitHub Profile.</a></p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={2021}
              schoolName="SASTRA Deemed to be University"
              schoolDescription="B-Tech Computer Science and Engineering. CGPA = 8.98/10"
               />

               <Education
                 startYear={2015}
                 endYear={2017}
                 schoolName="Narayana Junior College"
                 schoolDescription="Percentage = 97.7/100"
                  />

                 <Education
                 startYear={""}
                 endYear={2015}
                 schoolName="Kasturi High School"
                 schoolDescription="GPA = 10/10"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />



              <h2>Projects</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Exploratory Data Analysis Tool-Streamlit"
              jobDescription="Exploratory Data Analysis Tool made with Streamlit framework to perform EDA with ease."
              />
              <Experience
              startYear={2020}
              endYear={2020}
              jobName="Diabetes Prediction with Machine Learning-Streamlit"
              jobDescription="A Diabetes Prediction Web App made with Streamlit to predict Diabetic condition of a person."
              />
              <Experience
              startYear={2020}
              endYear={2020}
              jobName="Loan Approval Prediction with Machine Learning-Streamlit"
              jobDescription="Loan Approval prediction Web App made with Streamlit to predict loan approval status of an applicant."
              />
              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Machine Learning Classifiers Tool-Streamlit"
                jobDescription="Machine Learning classifiers tool made with Streamlit to apply various ML classifiers quickly with ease."
                />
                <Experience
              startYear={2019}
              endYear={2020}
              jobName="E-Learning Website for Kids"
              jobDescription="A website for kids to help them start learning and introduce them to computers."
              />
              <Experience
              startYear={""}
              endYear={2019}
              jobName="Sudoku Solver and game"
              jobDescription="A Sudoku solver and GUI application developed using Python-Pygame for playing sudoku and can automatically solve it using AI algorithm called Backtracking."
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Java"
                progress={100}
                />
                <Skills
                  skill="Python"
                  progress={80}
                  />
                  <Skills
                    skill="Machine Learning"
                    progress={70}
                    />
                    <Skills
                      skill="Data Mining"
                      progress={70}
                      />
                      <Skills
                      skill="Data Visualization"
                      progress={80}
                      />
                      <Skills
                      skill="Streamlit"
                      progress={60}
                      />
                      <Skills
                      skill="Scikit-Learn & Pandas"
                      progress={70}
                      /><Skills
                      skill="Oracle SQL"
                      progress={90}
                      />
                      <Skills
                      skill="Data Structures"
                      progress={70}
                      />
                      <Skills
                      skill="Algorithms"
                      progress={70}
                      />
                      <Skills
                      skill="Java Script"
                      progress={70}
                      />
                      <Skills
                      skill="HTML/CSS"
                      progress={40}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
