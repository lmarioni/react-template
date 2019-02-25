import React, { Component } from 'react';
import TextInputGroup from '../../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editContact, getContact } from '../../../actions/contactAction';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };
  
  componentWillReceiveProps(nextProps, nextState){
    // console.log(nextProps.contactoEdit[0].name);
    // const { username } = nextProps.contactoEdit[0];
    const { name, email, phone,id } = nextProps.contactoEdit[0];

    this.setState({
      id,
       name,
       email,
      phone
    });
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone,id } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const updContact = {
      id,
      name,
      email,
      phone
    };

    

   this.props.editContact(updContact);

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    // const { contactoEdit } = this.props;
    // console.log(this.props);
    

    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contactoEdit: state.contact.contactoEdit
})

export default connect(mapStateToProps,{ getContact, editContact })(EditContact);