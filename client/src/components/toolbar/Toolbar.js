import React from 'react';

import getChecked from '../../utils/getChecked';
import './Toolbar.css';

export default (props) => {
  return (
<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group mr-2" role="group" aria-label="Status group">
    <button type="button" className="btn btn-secondary" onClick={() => props.blockUser(getChecked())}>Block</button>
    <button type="button" className="btn btn-secondary" onClick={() => props.unblockUser(getChecked())}>Unblock</button>
  </div>
  <div className="btn-group" role="group" aria-label="Force group">
    <button type="button" className="btn btn-secondary" onClick={() => props.deleteUser(getChecked())}>Delete</button>
  </div>
</div>
  )
}
