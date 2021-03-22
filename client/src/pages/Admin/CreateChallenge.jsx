import React, { Component } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../../assets/css/color.scss'
import { addChallenge } from '../../redux/actions/problemActions';
import { connect } from 'react-redux';


class CreateChallenge extends Component {
  state = {
    name: '',
    description: '',
    samples: [],
    test_cases: [],
    level: 'Easy',
    points: 5,
    languages: [],
    sample_input: '',
    sample_output: '',
    test_input: '',
    test_output: ''
  }
  handleDescription = (event, editor) => {
    const data = editor.getData();
    this.setState({
      description: data
    })
    console.log({ event, editor, data });
  }
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  handleSample = () => {
    let s = this.state.samples
    const { sample_input, sample_output } = this.state
    if (sample_input !== '' || sample_output !== '') {
      s.push({ sample_input, sample_output })
      this.setState({
        samples: s
      })
      this.setState({
        sample_input: '',
        sample_output: ''
      })
    }

  }
  handleSubmit = async () => {
    const {
      name, description, samples, test_cases, level, points, languages
    } = this.state
    this.props.addChallenge({ name, description, samples, test_cases, level, points, languages })
    this.setState({
      name: '',
      description: '',
      samples: [],
      test_cases: [],
      level: 'Easy',
      points: 5,
      languages: [],
      sample_input: '',
      sample_output: '',
      test_input: '',
      test_output: '',
      isEmpty: true
    })
  }
  handleTestcases = () => {

    let t = this.state.test_cases
    const { test_input, test_output } = this.state
    if (test_input !== '' || test_output !== '') {
      t.push({ test_input, test_output })
      this.setState({
        test_cases: t
      })
      this.setState({
        test_input: '',
        test_output: ''
      })
    }
  }
  render() {
    return (
      <>
        <div className="bg-light d-flex justify-content-between align-items-center" style={{ position: "absolute", width: "calc(100% - 15px)", right: "15px", zIndex: 1 }}>
          <p className="h2 py-1 pl-5">Create Challenge</p>
          <button className="btn btn-hack h-75" onClick={this.handleSubmit}>Submit</button>
        </div>
        <div className="container-fluid" style={{ maxHeight: "calc(100vh - 62px)", overflow: "scroll", paddingTop: "4em" }}>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="form-group row">
                <div className="col-md-3">
                  <label htmlFor="name">Name</label>
                </div>
                <div className="col-md-9">
                  <input type="text" className="form-control" name="name" onChange={this.handleInput} id="name" placeholder="" />
                </div>
              </div>
              <div className="form-group row" style={{ minHeight: "30vh" }}>
                <div className="col-md-3">
                  <label htmlFor="description">Description</label>
                </div>
                <div className="col-md-9">
                  <CKEditor
                    editor={ClassicEditor}
                    onReady={editor => {
                      console.log('Editor is ready to use!', editor);
                    }}
                    style={{ height: "100%" }}
                    onChange={this.handleDescription}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">
                  <label htmlFor="level">Difficulty Level</label>
                </div>
                <div className="col-md-9">
                  <select
                    className="form-control"
                    name="level"
                    onChange={this.handleInput}
                    id="level"
                  >
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                    <option>Expert</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">
                  <label htmlFor="languages">Allowed Languages</label>
                </div>
                <div className="col-md-9">
                  <select
                    multiple
                    className="form-control"
                    name="languages"
                    onChange={this.handleInput}
                    id="languages"
                  >
                    <option>javascript</option>
                    <option>python</option>
                    <option>java</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">
                  <label htmlFor="points">Maximum Points</label>
                </div>
                <div className="col-md-9">
                  <input
                    type="number"
                    className="form-control"
                    name="points"
                    onChange={this.handleInput}
                    id="points"
                    step="5"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-3">Samples</div>
            <div className="col-md-9 d-flex justify-content-around flex-wrap">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="sample_input">Sample Input</label>
                  <textarea
                    className="form-control"
                    onChange={this.handleInput}
                    name="sample_input"
                    id="sample_input"
                    rows="3"
                    value={this.state.sample_input}
                  >
                  </textarea>
                </div>
              </div>
              <div className="col-md-6">
                {
                  this.state.samples.length > 0 ?
                    (
                      <ul className="list-group">
                        {this.state.samples.map((el, index) => {
                          return (<li className="list-group-item">
                            <span className="m-1">case : {index + 1} -</span>
                            <code>
                              {el.sample_input}
                            </code>
                          </li>)
                        })}
                      </ul>
                    )
                    : null
                }
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="sample_output">Sample Output</label>
                  <textarea
                    className="form-control"
                    onChange={this.handleInput}
                    name="sample_output"
                    id="sample_output"
                    rows="3"
                    value={this.state.sample_output}
                  >
                  </textarea>
                </div>
              </div>
              <div className="col-md-6">
                {
                  this.state.samples.length > 0 ?
                    (
                      <ul className="list-group">
                        {this.state.samples.map((el, index) => {
                          return (<li className="list-group-item">
                            <span className="m-1">case : {index + 1} -</span>
                            <code>
                              {el.sample_output}
                            </code>
                          </li>)
                        })}
                      </ul>
                    )
                    : null
                }
              </div>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <button className="btn btn-secondary" onClick={this.handleSample}>Submit Sample</button>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-3">Test cases</div>
            <div className="col-md-9 d-flex justify-content-around flex-wrap">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="test_input">Test case Input</label>
                  <textarea
                    className="form-control"
                    name="test_input"
                    onChange={this.handleInput}
                    id="test_input"
                    rows="3"
                    value={this.state.test_input}
                  >
                  </textarea>
                </div>
              </div>
              <div className="col-md-6">
                {
                  this.state.test_cases.length > 0 ?
                    (
                      <ul className="list-group">
                        {this.state.test_cases.map((el, index) => {
                          return (<li className="list-group-item">
                            <span className="m-1">case : {index + 1} -</span>
                            <code>
                              {el.test_input}
                            </code>
                          </li>)
                        })}
                      </ul>
                    )
                    : null
                }
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="test_output">Test case Output</label>
                  <textarea
                    className="form-control"
                    name="test_output"
                    onChange={this.handleInput}
                    id="test_output"
                    rows="3"
                    value={this.state.test_output}
                  >
                  </textarea>
                </div>
              </div>
              <div className="col-md-6">
                {
                  this.state.test_cases.length > 0 ?
                    (
                      <ul className="list-group">
                        {this.state.test_cases.map((el, index) => {
                          return (<li className="list-group-item">
                            <span className="m-1">case : {index + 1} -</span>
                            <code>
                              {el.test_output}
                            </code>
                          </li>)
                        })}
                      </ul>
                    )
                    : null
                }
              </div>
            </div>

            <div className="col-md-12 d-flex justify-content-center">
              <button className="btn btn-secondary" onClick={this.handleTestcases}>Submit Testcases</button>
            </div>
          </div>
          {/* <div className="row justify-content-center">

          </div> */}
        </div>
      </>
    )
  }
}


export default connect(null, { addChallenge })(CreateChallenge)
