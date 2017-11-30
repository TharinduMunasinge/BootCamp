import React, { Component } from 'react';
import jquery from 'jquery'

export default class Examples extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      < BrowserRouter>
    <div className='container'>
    <div className="page-header">
        <h1>Send Report</h1>
      </div>
      <form >
        <table>
          <tr><th>Please type the error: </th> <textarea name="name" id="name"/></tr>
          <tr><th></th> <th><input type='button' name="Send" value="Send"/></th></tr>
        </table>
      </form>
      <Link to="/">Cancel</Link>
    </div>
  </ BrowserRouter>
    );
  }
}
