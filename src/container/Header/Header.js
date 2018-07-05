import React, { Component } from 'react'
import { Menu, Popover, Position } from "@blueprintjs/core";
import LogIn from '../../components/FormLog/Login'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openLogin: false,
      openSignUp: false
    }
    this.openLogin = this.openLogin.bind(this)
  }

  openLogin () {
    this.setState({
      openLogin: !this.state.openLogin
    })
  }

  render() {
    return (
      <nav id="header" className="pt-navbar .modifier">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">
            <img src='../image/dota-2.svg' alt='logo' width={42} />
          </div>
          <div className="pt-input-group">
            <span className="pt-icon pt-icon-search"></span>
            <input className="pt-input" placeholder="Search input" dir="auto" />
          </div>
        </div>
        <div className="pt-navbar-group pt-align-right">
          <button className="pt-button pt-minimal">
            <img src='../image/bee.svg' alt='war-clan' width={37} />
            <span>Home</span>
          </button>
          <button className="pt-button pt-minimal">
            <img src='../image/swords.svg' alt='war-clan' width={32} />
            <span>War Clans</span>
          </button>
          <button className="pt-button pt-minimal">
            <img src='../image/castle.svg' alt='clan' width={35} />
            <span>Your Clan</span>
          </button>
          <span className="pt-navbar-divider" />
          <Popover content={
            <Menu>
              <div className='form-log'>
                <button onClick={this.openLogin} className='m-button'>LOG IN</button>
                {
                  <LogIn isOpen={this.state.openLogin} handleClose={this.openLogin} />
                }
                <div className='border-line' />
                <button className='m-button'>SIGN UP</button>
              </div>
            </Menu>
          } position={Position.BOTTOM_RIGHT}>
            <button className="pt-button pt-minimal pt-icon-user font-size" />
          </Popover>
          <Popover content={<Menu>...</Menu>} position={Position.BOTTOM_RIGHT}>
            <button className="pt-button pt-minimal pt-icon-notifications font-size" />
          </Popover>
        </div>
      </nav>
    )
  }
}

export default Header