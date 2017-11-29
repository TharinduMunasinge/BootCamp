import React, { Component } from 'react';
export default class ImageFilter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
	      <h3>Hello world</h3>
        <form >
          <table>
            <tr><td>Name: </td><td> <input type="text" name="name" id="name"/></td></tr>
            <tr><td></td> <td><input type='button' name="greet" value="greet" onclick="alert(hello)"/></td></tr>
          </table>
        </form>
      </div>
    );
  }
}
