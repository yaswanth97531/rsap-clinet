import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './signup.css';
import { signupUser } from './../../redux/actions';

const FormItem = Form.Item;

class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullName: '',
      organization: '',
      country: '',
      email: '',
      password: '',
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(this.state);
        this.props.dispatch(
          signupUser(
            this.state.fullName,
            this.state.organization,
            this.state.country,
            this.state.email,
            this.state.password
          )
        );
        if(this.props.signupUser){
          this.props.history.push("/login");
        }
      }
    });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="signup-form">
      {/*<div className='image-container'>
          <img  src="./../../images/rdops.png"  />
    </div> */}
        <FormItem>
          {getFieldDecorator('fullName', {
            rules: [{ required: true, message: 'Please input your Full Name' }],
          })(
            <Input 
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            placeholder="Full Name" 
            name="name"
            onChange={this.handleInputChange} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('organization', {
            rules: [{ required: true, message: 'Please input your Organization' }],
          })(
            <Input 
            prefix={<Icon type="rocket" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            placeholder="Organization" 
            name="organization"
            onChange={this.handleInputChange} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('Country', {
            rules: [{ required: true, message: 'Please input your Country' }],
          })(
            <Input 
            prefix={<Icon type="flag" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            placeholder="Country"
            name="country"
            onChange={this.handleInputChange} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email',
              message: 'The input is not valid E-mail'
            }, {
              required: true,
              message: 'Please input your Email'
            }],
          })(
            <Input 
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            placeholder="Email"
            name="email"
            onChange={this.handleInputChange} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password' }],
          })(
            <Input 
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            type="password" 
            placeholder="Password"
            name="password"
            onChange={this.handleInputChange} />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="signup-form-button">
            Sign Up
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    userObject: state.Auth.userObject,
    signupUser: state.Auth.signupUser
  };
};

export default connect(mapStateToProps)(Form.create()(SignUpForm));