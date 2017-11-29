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
        <li><Link to="/report">report</Link></li>
        <li><Link to="/result">Result</Link></li>
      </ul>
      <Route exact path="/" component={emptyBody}/>
      <Route path="/report" component={Report}/>
      <Route path="/result" component={Result}/>
    </div>
  </ BrowserRouter>
)

export default App
