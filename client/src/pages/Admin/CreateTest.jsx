import React, { Component } from 'react'
import { connect } from 'react-redux'
import TabModel from '../../components/Layout/TabModel'

class CreateTest extends Component {
  state = {
    tabid: 0
  }
  handleTab = (tabid) => {
    this.setState({
      tabid
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row p-2">
          <TabModel handleTabmodel={this.handleTab} tabdata={["Description", "Challenges", "Advanced"]}>
            {this.state.tabid === 0 ? ("Description") : this.state.tabid === 1 ? ("Challenges") : this.state.tabid === 2 ? "Advanced" : null}
          </TabModel>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTest)
