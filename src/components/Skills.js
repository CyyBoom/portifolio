import React from 'react';

function Skills() {

    return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="linguagens">Linguagens</h3>
            </div>
          </div>
    
          <div className="row">
            <div className="col-md-4">
              <p className="lingua">HTML 5</p>
            </div>
              <div className="col-md-8">
                <div className="progress">
                  <div className="progress-bar html" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  90%
              </div>
            </div>
          </div>
    
          <div className="row">
            <div className="col-md-4">
              <p className="lingua">CSS 3</p>
            </div>
            <div className="col-md-8"><div className="progress">
                <div className="progress-bar css" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                80%
              </div>
            </div>
          </div>
    
          <div className="row">
            <div className="col-md-4">
              <p className="lingua">JavaScript</p>
            </div>
            <div className="col-md-8"><div className="progress">
                <div className="progress-bar js" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                80%
              </div>
            </div>
          </div>
    
          <div className="row">
            <div className="col-md-4">
              <p className="lingua">React</p>
            </div>
            <div className="col-md-8">
              <div className="progress">
                <div className="progress-bar react" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                60%
              </div>
            </div>
          </div>
        
    
          <div className="row">
            <div className="col-md-4">
              <p className="lingua">Sass</p>
            </div>
              <div className="col-md-8">
                <div className="progress">
              <div className="progress-bar sass" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                5%
              </div>
            </div>
          </div>
      </div>
      
  
  
                  
    );
  }
  
export default Skills;

  