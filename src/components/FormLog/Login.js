import React, { Component } from 'react'
import { Dialog } from '@blueprintjs/core'
import { Tab, Tabs } from '@blueprintjs/core';

import './Formlog.css'

class LogIn extends Component {
  render () {
    return (
      <Dialog
        className='redesign-modal'
        isOpen={this.props.isOpen}
        onClose={this.props.handleClose}
      >
        <div className='form-log log-in'>
          <img src='../image/logins.png' alt='login' />
          <Tabs
            className='TabsExample'
            animate={true}
            key='vertical'
            renderActiveTabPanelOnly={true}
          >
            <Tab id='rx' title='LOG IN' panel={<div>asd</div>} />
            <Tab id='ng' title='SIGN UP' panel={<div>111asd</div>} />
          </Tabs>
        </div>
      </Dialog>
    )
  }
}

export default LogIn