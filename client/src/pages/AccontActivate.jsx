import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class AccontActivate extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
            <h1 className="display-1">Hackzone</h1>
            <strong>Click button Below to activate your account</strong>
            
        </div>
      </div>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {}
}


export default connect(mapStateToProps, null)(AccontActivate)
