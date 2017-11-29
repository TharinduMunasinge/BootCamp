import React from 'react';
import { render } from 'react-dom';
import Result from './Result.jsx'
import Report from './Report.jsx'
import jquery from 'jquery'

import { BrowserRouter, Route , Link} from 'react-router-dom'

const emptyBody=()=>(<div></div>);

const App = () => (
  < BrowserRouter>
    <div className='container'>
    <div className="page-header">
        <h1>Boot Camp example</h1>
      </div>
      <ul>
        <li><Link to="/report">Report</Link></li>
      </ul>
      <form >
        <table>
          <tr><th>Name: </th> <input type="text" name="name" id="name"/></tr>
          <tr><th></th> <th><input type='button' name="greet" value="greet"/></th></tr>
        </table>
      </form>
      <Route exact path="/" component={emptyBody}/>
      <Route path="/report" component={Report}/>
    </div>
  </ BrowserRouter>
)

export default App
