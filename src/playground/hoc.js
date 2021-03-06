import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// HOC
// Reuse code, render hijacking, prop manip, abstract state

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info</p>}
      <WrappedComponent {...props}/>
    </div>
  )
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated && <WrappedComponent {...props} /> }
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="dope" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="dope" />, document.getElementById('app'))
