import React, { Component } from 'react'
import { connect } from 'react-redux'
import { allProblems } from '../../redux/actions/problemActions'
import ChallengeSnippet from '../../components/ChallengeSnippet'

class ProblemsPage extends Component {
  componentDidMount = () => {
    this.props.allProblems()
  }
  render() {
    console.log(`savvy ${JSON.stringify(this.props)}`)
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <h6 className="display-6 pl-0 pr-3 pt-3 pb-1"><strong>Challenges</strong></h6>
              {this.props.problems ?
                this.props.problems.map((el) => {
                  return (
                    <ChallengeSnippet data={el} key={el.name}/>
                  )
                }) :
                (
                  <div className="w-100 m-2" style={{ border: "1px solid black", borderRadius: "5px" }}>
                    <h6 className="display-6 p-3"><strong><strike>Test Not Available</strike></strong></h6>

                  </div>
                )}

            </div>
            <div className="col-md-4">




            </div>
          </div>
        </div>
      </>)
  }
}

const mapStateToProps = (storeState) => {
  return { problems: storeState.problemState.problems }
}

export default connect(mapStateToProps, { allProblems })(ProblemsPage)
