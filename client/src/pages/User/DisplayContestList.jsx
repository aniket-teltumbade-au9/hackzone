import React, { Component } from 'react'
import { connect } from 'react-redux'
import { endedContests, liveContests, upcomingContests } from '../../redux/actions/contestActions'
import '../../assets/css/DisplayContestList.scss'
import ContestItem from '../../components/User/Contest/ContestItem'

class DisplayContestList extends Component {
  componentDidMount = () => {
    this.props.liveContests()
    this.props.upcomingContests()
    this.props.endedContests()
  }
  render() {

    var liveitems = this.props.liveList ? this.props.liveList.map(el => <ContestItem list={el} />) : null
    var upitems = this.props.upcomingList ? this.props.upcomingList.map(el => <ContestItem list={el} />) : null
    var endeditems = this.props.endedList ? this.props.endedList.map(el => <ContestItem list={el} />) : null
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="main-box clearfix">
              <div class="table-responsive">
                <table class="my-3 table user-list">
                  <tbody>
                    <tr>
                      <td colspan="3"> <div className="text-center w-100">Live</div> </td>
                    </tr>
                  </tbody>
                  <tbody>
                    {liveitems}
                  </tbody>
                  <tbody>
                    <tr>
                      <td colspan="3"> <div className="text-center w-100">Upcoming</div> </td>
                    </tr>
                  </tbody>
                  <tbody>
                    {upitems}
                  </tbody>
                  <tbody>
                    <tr>
                      <td colspan="3"> <div className="text-center w-100">Ended</div> </td>
                    </tr>
                  </tbody>
                  <tbody>
                    {endeditems}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div >
    )
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
})(DisplayContestList)
