import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import parse from 'html-react-parser';
import Editor from "@monaco-editor/react";
import { runProgram, singleProblem } from '../../redux/actions/problemActions'
import Output from '../../components/User/Challenge/Output';

class SingleProblemPage extends Component {
  state = {
    language: 'python',
    code: null,
    validation: null
  }
  componentDidMount = () => {
    this.props.SingleProblemPage(this.props.match.params.name)
  }
  handleEditor = (value, event) => {
    this.setState({ code: value })
  }
  handleSelect = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleRun = async (samples, node, event) => {
    if (this.props.problem) {
      let { language, code } = this.state
      //console.log("test",language,code,samples)
      this.props.runProgram(language, code, samples, this.props.problem.name)
    }
    if (this.props.output) {
      node.scrollIntoView({ behavior: 'smooth' });
      console.log(node)
    }
  }
  handleEditorValidation = (markers) => {
    // model markers
    markers.forEach(marker => {
      if (this.state.language === 'javascript') {
        this.setState({
          validation: markers.message
        })
      }
    });
  }
  render() {
    console.log(this.props.output)
    return this.props.problem ? (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 bg-light">
            <h4 className="display-5">
              {this.props.problem.name}
            </h4>
          </div>
          <div className="col-md-9">
            <ul className="nav nav-tabs mt-3" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="problem-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#problem"
                  type="button"
                  role="tab"
                  aria-controls="problem"
                  aria-selected="true">
                  Problem
                  </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="submissions-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#submissions"
                  type="button"
                  role="tab"
                  aria-controls="submissions"
                  aria-selected="false">
                  Submissions
                  </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="leaderboard-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#leaderboard"
                  type="button"
                  role="tab"
                  aria-controls="leaderboard"
                  aria-selected="false">
                  Leaderboard
                  </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="problem" role="tabpanel" aria-labelledby="problem-tab">
                <div className="col-md-12 bg-light pt-2 pb-3">
                  {parse(this.props.problem.description)}
                </div>
                <div className="col-md-12 mt-5 pb-4 bg-light pl-0 pr-0" >
                  <div className="col-md-12 d-flex justify-content-end">
                    <div className="form-group w-40 pt-2">
                      <select
                        className="form-control"
                        onChange={this.handleSelect}
                        value={this.state.language}
                        name="language"
                        id="language">
                        {this.props.problem.languages.map(el => {
                          return <option key={el}>{el}</option>
                        })}
                      </select>
                    </div>
                  </div>
                  <Editor
                    theme="vs-dark"
                    language={this.state.language}
                    onChange={this.handleEditor}
                    height="60vh"
                    onValidate={this.handleEditorValidation}
                  />
                </div>
                {this.state.validation ?
                  <div className="col-md-12">{this.state.validation}</div>
                  : null}
                <div className="col-md-12 d-flex justify-content-end">
                  <div className="w-40 pt-3 pb-3">
                    <button
                      className="btn btn-dark text-success"
                      onClick={() =>
                        this.handleRun(this.props.problem.samples,
                          this.result)}>Run Script</button>
                    <button
                      className="btn btn-success text-dark ml-3"
                      onClick={this.handleSubmit}>
                      Submit
                    </button>
                  </div>
                </div>
                <div className="w-100" ref={(node) => this.result = node}>
                  {this.props.output ? <Output output={this.props.output} /> : null}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="submissions"
                role="tabpanel"
                aria-labelledby="submissions-tab">
                Submissions
              </div>
              <div
                className="tab-pane fade"
                id="leaderboard"
                role="tabpanel"
                aria-labelledby="leaderboard-tab">
                Leaderboard
              </div>
            </div>

          </div>
          <div className="col-md-3 d-md-none d-lg-block">

          </div>
        </div>
      </div>
    ) : (
      <h1> Error
      </h1>
    )
  }
}

const mapStateToProps = (storeState) => {
  console.info(storeState.problemState.problem)
  return {
    problem: storeState.problemState.problem,
    output: storeState.problemState.problem_output
  }
}


export default withRouter(connect(mapStateToProps, { singleProblem, runProgram })(SingleProblemPage))
