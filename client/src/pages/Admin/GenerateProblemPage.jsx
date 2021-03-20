import React, { Component } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'


class GenerateProblemPage extends Component {
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
      description:data
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
    var config = {
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/problem/create`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({ name, description, samples, test_cases, level, points, languages })
    };

    let res=await axios(config)
    console.log(res)
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
      test_output: ''
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
    console.log(process.env.REACT_APP_API_URL)
    return (
      <>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name" onChange={this.handleInput} id="name" placeholder="" />
              </div>
              <div className="form-group" style={{ minHeight: "30vh" }}>
                <label htmlFor="description">Description</label>
                <CKEditor
                  editor={ClassicEditor}
                  onReady={editor => {
                    console.log('Editor is ready to use!', editor);
                  }}
                  style={{ height: "100%" }}
                  onChange={this.handleDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="level">Difficulty Level</label>
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
              <div className="form-group">
                <label htmlFor="languages">Allowed Languages</label>
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
              <div className="form-group">
                <label htmlFor="points">Maximum Points</label>
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

          <div className="row justify-content-center">
            <div className="col-md-8">Test cases</div>
            <div className="row col-md-8 justify-content-around">
              <div className="col-md-5">
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
              <div className="col-md-5">
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
            </div>
            <div className="col-md-8 justify-content-center">
              <button className="btn btn-secondary" onClick={this.handleSample}>Submit Sample</button>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8">Test cases</div>
            <div className="row col-md-8 justify-content-around">
              <div className="col-md-5">
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
              <div className="col-md-5">
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
            </div>

            <div className="col-md-8 justify-content-center">
              <button className="btn btn-secondary" onClick={this.handleTestcases}>Submit Testcases</button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}



//export default connect(mapStateToProps, mapDispatchToProps)(GenerateProblemPage)
export default GenerateProblemPage
