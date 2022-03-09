import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class AddStudent extends Component {
    constructor(props)
    {
        super(props)
        this.state={
           id: '',
           name:'',
           weight:'',
           gender:'',
           meals:'',
        }
      
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.weightHandler = this.weightHandler.bind(this);
        this.genderHandler = this.genderHandler.bind(this);
        this.mealsHandler = this.mealsHandler.bind(this);

    }//constructor

     
    idHandler=(event) => {
        this.setState({
             id: event.target.value});
    }


    nameHandler=(event) => {
        this.setState({
           name: event.target.value});
    }

     
    weightHandler=(event) => {
        this.setState({
             weight: event.target.value});
    }
    genderHandler=(event) => {
        this.setState({
             gender: event.target.value});
    }
    mealsHandler=(event) => {
        this.setState({
             meals: event.target.value});
    }

    saveStudent = (e) => {
        e.preventDefault();
        let student={
           id: this.state.id,
           name: this.state.name,
           weight: this.state.weight,
           gender: this.state.gender,
           meals: this.state.meals
        };
        console.log(student);
        StudentService.createStudent(student).then(res =>{
                this.props.history.push('/students');  
            }).catch(err=>{
                console.log("record not saved.");
            });
       
       
        
        
    }//closing save method

    cancel(){
        this.props.history.push('/students');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Add Student</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Student ID: </label>
                                      <input placeholder="Id" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Student Name: </label>
                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Student weight: </label>
                                      <input placeholder="Weight" name="weight" className="form-control"
                                         value={this.state.weight} onChange={this.weightHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Student Gender: </label>
                                      <input placeholder="Gender" name="gender" className="form-control"
                                         value={this.state.gender} onChange={this.genderHandler} />
                                    </div>   
                                   <div className="form-group">
                                      <label>Student Meals: </label>
                                      <input placeholder="Meals" name="meals" className="form-control"
                                         value={this.state.meals} onChange={this.mealsHandler} /> 
                                   </div>   
                                    <button className="btn btn-success" onClick={this.saveStudent}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default AddStudent;