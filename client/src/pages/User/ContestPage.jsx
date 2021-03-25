import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChallengeSnippet from '../../components/User/Challenge/ChallengeSnippet'
import { loadContest } from '../../redux/actions/contestActions'

class ProblemsPage extends Component {
  componentDidMount = () => {
     
    this.props.loadContest(this.props.match.params)
  }
  render() {

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <h6 className="display-6 pl-0 pr-3 pt-3 pb-1"><strong>Challenges</strong></h6>
              {this.props.challengeList ?
                this.props.challengeList.challenges.map((el) => {
                  return (
                    <ChallengeSnippet data={el} key={el.name} />
                  )
                }) :
                (
                  <div className="w-100 m-2" style={{ border: "1px solid black", borderRadius: "5px" }}>
                    <h6 className="display-6 p-3"><strong><strike>Contest Not Available</strike></strong></h6>
                  </div>
                )}

            </div>
            <div className="col-md-3">




            </div>
          </div>
        </div>
      </>)
  }
}

const mapStateToProps = (storeState) => {
  return { challengeList: storeState.contestState.contest_data }
}

export default connect(mapStateToProps, { loadContest })(ProblemsPage)
