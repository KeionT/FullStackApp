import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class UpdateStudent extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 name:'',
                 weight:'',
                 meals:'',
                 gender:'',


             }
     
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.weightHandler = this.weightHandler.bind(this);
        this.genderHandler = this.genderHandler.bind(this);
        this.mealsHandler = this.mealsHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);

    }//constructor

     componentDidMount()
     {
        StudentService.getStudentById(this.state.id).then((res) =>{
          let student = res.data;
          this.setState({name:student.name,
                  id:student.id
                });
        });
           
     }
     
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

   updateStudent = (e) => {
        e.preventDefault();
        let student={
           id: this.state.id,
           name: this.state.name,
           weight: this.state.weight,
           gender: this.state.gender,
           meals: this.state.meals,
        };
        
        StudentService.updateStudent(student,this.state.id).then((res) => {
                this.props.history.push('/students');
        });
      
        
    }

    cancel(){
        this.props.history.push('/students');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Update Student</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Student ID: </label>
                                      <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Student Name: </label>
                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Student weight: </label>
                                      <input placeholder="weight" name="weight" className="form-control"
                                         value={this.state.weight} onChange={this.weightHandler} />
                                   <div className="form-group">
                                      <label>Student gender: </label>
                                      <input placeholder="gender" name="gender" className="form-control"
                                         value={this.state.gender} onChange={this.genderHandler} />
                                    </div>     
                                   <div className="form-group">
                                      <label>Student meals: </label>
                                      <input placeholder="meals" name="meals" className="form-control"
                                         value={this.state.meals} onChange={this.mealsHandler} />
                                   </div>     
                                   </div>   
                                    <button className="btn btn-success" onClick={this.updateStudent}> Update </button>
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

export default UpdateStudent;