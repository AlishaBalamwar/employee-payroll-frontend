import react, { Component } from 'react'

export class HeaderComponent extends Component {
    render() {
        return (
            <div>
            <header class="header-content header">
            <div class="logo-content">
                <img src='{logo}' class="Logo"></img>
                <div>
                    <span class="emp-text">EMPLOYEE</span>
                    <span class="emp-text emp-payroll">PAYROLL</span>
                </div>
            </div>
        </header>
        <div className='navbar navbar-xpand-md navbar-dark bg-dark'>
        <ul>
        <li><a href='/'>Home</a> </li>
        <li><a href='/add-update'>Add/Update</a></li>
        </ul>
    </div>
    </div>
        )
    }
}

export default HeaderComponent