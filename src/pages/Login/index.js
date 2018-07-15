import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from "react-redux";

import './login.css';
import { loginUser, signupUser } from './../../redux/actions';

const FormItem = Form.Item;

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
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
          loginUser(
            this.state.email,
            this.state.password
          )
        );
        if(this.props.isUserLoggedIn){
          this.props.history.push("/home");
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
      <Form onSubmit={this.handleSubmit} className="login-form">
      {/*<div className='image-container'>
          <img  src="./../../images/rdops.png"  />
    </div> */}
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email',
              message: 'The input is not valid E-mail'
            }, {
              required: true,
              message: 'Please input your email!'
            }],
          })(
            <Input 
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            placeholder="E-mail"
            name="email"
            onChange={this.handleInputChange} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input 
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            name="password"
            type="password" 
            onChange={this.handleInputChange}
            placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <Link className="register-form-link" to={{pathname: "/signup"}}>Create an Account</Link>
        </FormItem>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    userObject: state.Auth.userObject,
    isUserLoggedIn: state.Auth.isUserLoggedIn
  };
};

export default connect(mapStateToProps)(Form.create()(LoginForm));