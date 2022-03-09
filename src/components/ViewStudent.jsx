import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ViewStudent extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 student:{}

             }
     
        
        
    }//constructor

     componentDidMount()
     {
        StudentService.getStudentById(this.state.id).then((res) =>{
            this.setState({student:res.data})
         });
     }
     
    
    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">View Student Details</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                    <label>Student ID: </label>
                                    <input placeholder={this.state.student.id} readOnly={true} name="id" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Student Name: </label>
                                      <input placeholder={this.state.student.name} readOnly={true} name="name" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Student Weight: </label>
                                      <input placeholder={this.state.student.weight} readOnly={true} name="weight" className="form-control" />
                                   </div> 
                                   <div className="form-group">
                                      <label>Student Meals: </label>
                                      <input placeholder={this.state.student.meals} readOnly={true} name="meals" className="form-control" />
                                   </div> 
                                   <div className="form-group">
                                      <label>Student Gender: </label>
                                      <input placeholder={this.state.student.gender} readOnly={true} name="gender" className="form-control" />
                                      
                                   </div> 
                                                                     
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
            
        );
    }
}

export default ViewStudent;