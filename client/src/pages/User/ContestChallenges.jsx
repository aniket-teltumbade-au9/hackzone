import React, { Component } from 'react'
import { connect } from 'react-redux'
import Breadcrumbs from '../../components/Layout/Breadcrumb'
import Loader from '../../components/Layout/Loader'
import ChallengeSnippet from '../../components/User/Challenge/ChallengeSnippet'
import { loadContest } from '../../redux/actions/contestActions'

class ContestChallenges extends Component {
  componentDidMount = () => {

    this.props.loadContest(this.props.match.params)
  }
  render() {

    return this.props.challengeList ? (
      <>

        <Breadcrumbs bread={[{ title: "Contest", link: `/contests/${this.props.match.params.name}` }, { title: "Challenge" }, { title: "Submission/Leaderboard" }]} />
        <div className="container">
          <div className="row">
            <h5 className="display-5 pl-0 pr-3 pt-3 pb-1"><strong>{this.props.match.params.name}</strong></h5>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-9">
              <h6 className="display-6 pl-0 pr-3 pt-3 pb-1"><strong>Challenges</strong></h6>
              {this.props.challengeList.challenges.map((el) => <ChallengeSnippet data={el} key={el.name} />)}

            </div>
            <div className="col-md-3">




            </div>
          </div>
        </div>
      </>) : <Loader />
  }
}

const mapStateToProps = (storeState) => {
  return { challengeList: storeState.contestState.contest_data }
}

export default connect(mapStateToProps, { loadContest })(ContestChallenges)
