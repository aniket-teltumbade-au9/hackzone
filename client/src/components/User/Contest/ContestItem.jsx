import React from 'react'

export default function ContestItem(props) {
  return (
    <tr>
      <td>
        <a href="#" class="user-link">{props.list.name}</a>
        <span class="user-subhead">{props.list.creator}</span>
      </td>
      <td>
        <p> Start: {props.list.start_date}</p>
        <p>End: {props.list.end_date}</p>
      </td>
      <td >

        <a href="#" class="table-link">
          <span class="fa-stack">
            <i class="fa fa-square fa-stack-2x"></i>
            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
          </span>
        </a>
        <a href="#" class="table-link">
          <span class="fa fa-stack">
            <i class="fa fa-square fa-stack-2x"></i>
            <i class="fa fa-pen fa-stack-1x fa-inverse"></i>
          </span>
        </a>
        <a href="#" class="table-link danger">
          <span class="fa-stack">
            <i class="fa fa-square fa-stack-2x"></i>
            <i class="fa fa-trophy fa-stack-1x fa-inverse"></i>
          </span>

        </a>

      </td>
    </tr>

  )
}
