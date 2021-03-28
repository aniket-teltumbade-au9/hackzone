import React, { Component } from 'react'
import { connect } from 'react-redux'
import Breadcrumbs from '../../components/Layout/Breadcrumb'
import Loader from '../../components/Layout/Loader'
import { contestLeaderboard } from '../../redux/actions/leaderboardActions'


class ContestLeaderboard extends Component {

  componentDidMount = () => {
    this.props.contestLeaderboard({ contest: this.props.match.params.name })
  }
  render() {
    return (
      <>
        <Breadcrumbs
          bread={[
            { title: "Contest", link: `/contests/${this.props.match.params.name}/challenges` },
            { title: "Challenge", link: `/contests` },
          ]
          } />
        <div className="container">
          <div className="row">
            <div className="h2">Submissions</div>
            <div className="col-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Challenge</th>
                    <th>Score</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>
            </div>
          </div>
        </div>

      </>
    )
  }
}

const mapStateToProps = (storeState) => {
  return { leaderboard: storeState.laederboardeState.contest_leaderboard }
}


export default connect(mapStateToProps, { contestLeaderboard })(ContestLeaderboard)
