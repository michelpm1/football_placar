import React from "react";
import axios from "axios";
import ScoresTable from "./ScoresTable";
import { isEmpty } from "lodash";
import { warning, error } from "toastr";
import 'toastr/build/toastr.css';
class Scores extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      scores: {},
      tableVisible: false,
      code: '',
      header: {
        headers: {
          'X-Auth-Token': '328f52138bf94811b9b890c4ea8f2057',
        }
      }
    };
  }

  getScores = (code) => {

    const {header} = this.state;

    return axios.get(`http://api.football-data.org/v1/competitions/${code}/leagueTable`, header);
  };

  handleSubmit(event) {

    const {code} = this.state;

    if (code) {
      this.getScores(code).then(result => this.setState({scores: result.data})).catch((err) => {
        error(err);
      })

    } else {
      warning("Info. Please fill the competition code first");
    }
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({code: event.target.value});
  }

  render() {
    const {code, scores} = this.state;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mt-3">
            <input type="text" className="form-control" value={code}
                   onChange={this.handleChange} placeholder="Competition code"></input>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" value="Submit" type="submit">Search</button>
            </div>
          </div>
        </form>
        {!isEmpty(scores) && <ScoresTable scores={scores}/>}
      </div>
    );
  }
}

export default Scores;