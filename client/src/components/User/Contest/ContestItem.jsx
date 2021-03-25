import React from 'react'
import { Link } from 'react-router-dom'

export default function ContestItem(props) {
  return (
    <tr>
      <td>
        <Link className="user-link">{props.list.name}</Link>
        <span className="user-subhead">{props.list.creator}</span>
      </td>
      <td>
        <p> Start: {props.list.start_date}</p>
        <p>End: {props.list.end_date}</p>
      </td>
      <td >

        <Link to={`/contests/${props.list.name}`} className="table-link">
          <span className="fa fa-stack">
            <i className="fa fa-square fa-stack-2x"></i>
            <i className="fa fa-pen fa-stack-1x fa-inverse"></i>
          </span>
        </Link>
        <Link className="table-link danger">
          <span className="fa-stack">
            <i className="fa fa-square fa-stack-2x"></i>
            <i className="fa fa-trophy fa-stack-1x fa-inverse"></i>
          </span>
        </Link>

      </td>
    </tr>

  )
}
