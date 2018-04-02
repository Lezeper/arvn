import React from 'react';

export default class ErrorList extends React.Component {
  render() {
    const errors = this.props.errors;
    if(errors) {
      return (
        <ul>
          {
            Object.keys(errors).map(key => {
              return (
                <li key={key}>
                  <p className="error-font">{key} {errors[key]}</p>
                </li>
              );
            })
          }
        </ul>
      );
    } else {
      return null;
    }
  }
}