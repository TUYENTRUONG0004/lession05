import React, { Component } from 'react';

class TDT_Form3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentname: 'truong dinh tuyen',
      age: 20,
      course: 'reactjs'
    };
  }

  handleChange = (ev) => {
    let name = ev.target.name;
    let val = ev.target.value;
    this.setState({
      [name]: val
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    alert(
      this.state.studentname + '\n' + this.state.age + '\n' + this.state.course
    );
    this.props.onSubmit();
  };

  render() {
    return (
      <div>
        <form name="TDTform">
          <div>
            <label>ho va ten</label>
            <input name="studentname" value={this.state.studentname} />
          </div>
          <div>
            <label>tuoi</label>
            <input
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>khoahoc</label>
            <select
              value={this.state.course}
              name="course"
              onChange={this.handleChange}
            >
              <option value="HTML">HTML</option>
              <option value="css">css</option>
              <option value="js">js</option>
              <option value="reactjs">reactjs</option>
            </select>
          </div>
          <button onClick={this.handleSubmit}>submit</button>
        </form>
      </div>
    );
  }
}

export default TDT_Form3;