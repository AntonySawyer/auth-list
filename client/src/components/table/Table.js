import React from 'react';

import './Table.css';

export default (props) => {

  return (
<div className="table-responsive">
  <table className="table table-hover">
    <thead>
    <tr>
      <th scope="col">
        <label>
          <input type="checkbox" id="mainCheckbox" onChange={props.checkAll}/>
        </label>
      </th>
      <th scope="col">Username</th>
      <th scope="col">Link/email</th>
      <th scope="col">Status</th>
      <th scope="col">Fitst login</th>
      <th scope="col">Last login</th>
    </tr>
  </thead>
  <tbody>
          {
            props.users.map(user => 
              <tr key={user.id}>
                <th scope="row">
                  <label>
                    <input type="checkbox" value={user.id} onChange={props.setIndeterminate} />
                  </label>
                </th>
                <td>{user.username}</td>
                <td>{user.link}</td>
                <td>{user.status}</td>
                <td>{user.first_date}</td>
                <td>{user.last_time}</td>
              </tr>
            )}
  </tbody>
  </table>
</div>
  )
}
