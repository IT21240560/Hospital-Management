import React, { Component } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

export const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  return <WrappedComponent {...props} params={params} navigate={navigate}/>;
};

class EditPatientDetails extends Component {

  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangeage = this.onChangeage.bind(this);
    this.onChangegender = this.onChangegender.bind(this);
    this.onChangeid = this.onChangeid.bind(this);
    this.onChangeadmit_Date = this.onChangeadmit_Date.bind(this);
    this.onChangedischarge_Date = this.onChangedischarge_Date.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      age: "",
      gender: "",
      id: "",
      admit_Date: "",
      discharge_Date: "",
      records: [],
    };
    this.props.navigate('/ManagePatient')
  }

  componentDidMount() {

    axios
      .get("http://localhost:8083/patient/get/" + this.props.params.id)
      .then((response) => {
        console.log(response);
        
        this.setState({
          name: response.data.name,
          age: response.data.age,
          gender: response.data.gender,
          id: response.data.id,
          admit_Date: response.data.admit_Date,
          discharge_Date: response.data.discharge_Date,
    
        });
        
      })
      
      .catch(function (error) {
        console.log(error);
      });
  }


  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }



  onChangeage(e) {
    this.setState({
      age: e.target.value,
    });
  }
  onChangegender(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  onChangeid(e) {
    this.setState({
      id: e.target.value,
    });
  }
  onChangeadmit_Date(e) {
    this.setState({
      admit_Date: e.target.value,
    });
  }
  onChangedischarge_Date(e) {
    this.setState({
      discharge_Date: e.target.value,
    });
  }
 

  onSubmit(e) {
    e.preventDefault();
    const newEditedPatient = {
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
      id: this.state.id,
      admit_Date: this.state.admit_Date,
      discharge_Date: this.state.discharge_Date,
      
    };
    console.log(newEditedPatient);
    this.props.navigate('/ManagePatient')
   
    axios.put("http://localhost:8083/patient/update/" + this.props.params.id,newEditedPatient)
      .then((res) => console.log(res.data));
      
  }
  render() {
    return (
      <div>
        <div className=" display-table mt-5 d-flex w-100 vh-50 justify-content-center align-items-center">
          <div className="row display-table-row mt-5">
            <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
              <div className="logo">
              </div>  
            </div>
            <div className="col-md-10 col-sm-11 display-table-cell v-align">

              <div className="row mb-4">
                <header>
                  
                </header>


              </div>

              <div>

                <header className="bg-dark py-5">
                  <div>
                    <div className="text-center text-white">
                      <h1 className="display-4 fw-bolder">Update Patient Details</h1>
                      <p className="lead fw-normal text-white-50 mb-0">Patient Details</p>
                    </div>
                  </div>
                </header>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <a href="/ManagePatient" className="btn btn-primary btn-lg active" role="button" aria-pressed="true"> Go Back</a>
                </div>
                <div className="container">

                  <div className="row align-items-md-stretch">

                    <div className="col-md-6">
                      <div className="h-100 p-5 bg-light border rounded-3">
                        <form onSubmit={this.onSubmit}>
                          <div className="form-row">


                            <div className="form-group row">
                              <div className="form-group col-md-10">
                                <label for="inputEmail3" className="col-form-label">Name: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.name}
                                  onChange={this.onChangename}
                                />
                              </div>
                            </div>



                            <div className="form-group row">
                              <div className="form-group col-md-10">
                                <label for="inputEmail3" className="col-form-label">Age: </label>
                                <input
                                  type="number"
                                  className="form-control"
                                   id="inputEmail4"
                                  value={this.state.age}
                                  onChange={this.onChangeage}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="form-group col-md-10">
                                <label for="inputEmail3" className="col-form-label">Gender: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.gender}
                                  onChange={this.onChangegender}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="form-group col-md-10">
                                <label for="inputEmail3" className="col-form-label">Patient_ID: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.id}
                                  onChange={this.onChangeid}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="form-group col-md-11">
                                <label for="inputEmail3" className="col-form-label">Admit_Date: </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.admit_Date}
                                  onChange={this.onChangeadmit_Date}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="form-group col-md-11">
                                <label for="inputEmail3" className="col-form-label"> Discharge_Date: </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.discharge_Date}
                                  onChange={this.onChangedischarge_Date}
                                />
                              </div>
                            </div>

                            <br />
                            <div className="form-group row d-flex justify-content-center align-items-end mb-0"  >
                              <input type="submit" value="Update Record" className="btn btn-primary btn-sm mt-5 mt-md-auto" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              

            </div>
          </div>

        </div>

      </div>

    );
  }

}

export default withRouter(EditPatientDetails);
