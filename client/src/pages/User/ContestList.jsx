import React, { Component } from 'react'
import { connect } from 'react-redux'
import { endedContests, liveContests, upcomingContests } from '../../redux/actions/contestActions'
import '../../assets/css/DisplayContestList.scss'
import ContestItem from '../../components/User/Contest/ContestItem'
import Breadcrumbs from '../../components/Layout/Breadcrumb'
import Loader from '../../components/Layout/Loader'

class ContestList extends Component {
  componentDidMount = () => {
    this.props.liveContests()
    this.props.upcomingContests()
    this.props.endedContests()
  }
  render() {
    return this.props.liveList &&
      this.props.upcomingList &&
      this.props.endedList ? (
      <>
        <Breadcrumbs bread={[{ title: "Contest" }, { title: "Challenge" }, { title: "Submission" }]} />
        <div className="container">
          <div className="row">


            <div className="col-lg-9">
              <div className="main-box clearfix">
                <div className="table-responsive">
                  <table className="my-3 table user-list">
                    <tbody>
                      <tr>
                        <td colSpan="3"> <div className="text-center w-100">Live</div> </td>
                      </tr>
                    </tbody>
                    <tbody>
                      {this.props.liveList.length > 0 ?
                        this.props.liveList.map(el => <ContestItem list={el} />)
                        : <tr><td colSpan="3"><p className="text-center text-secondary">N/A</p></td></tr>}
                    </tbody>
                    <tbody>
                      <tr>
                        <td colspan="3"> <div className="text-center w-100">Upcoming</div> </td>
                      </tr>
                    </tbody>
                    <tbody>
                      {this.props.upcomingList.length > 0 ?
                        this.props.upcomingList.map(el => <ContestItem list={el} />)
                        : <tr><td colSpan="3"><p className="text-center text-secondary">N/A</p></td></tr>}
                    </tbody>
                    <tbody>
                      <tr>
                        <td colspan="3"> <div className="text-center w-100">Ended</div> </td>
                      </tr>
                    </tbody>
                    <tbody>
                      {this.props.endedList.length > 0 ?
                        this.props.endedList.map(el => <ContestItem list={el} />)
                        : <tr><td colSpan="3"><p className="text-center text-secondary">N/A</p></td></tr>}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div >
      </>
    ) : <Loader />
  }
}

const mapStateToProps = (storeState) => {
  return {
    liveList: storeState.contestState.live_contests,
    upcomingList: storeState.contestState.upcoming_contests,
    endedList: storeState.contestState.ended_contests,
  }
}


export default connect(mapStateToProps, {
  liveContests,
  upcomingContests,
  endedContests
})(ContestList)
