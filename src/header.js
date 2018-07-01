import React,{Component} from 'react';

export default class Header extends Component{
    render() {
      return (
        <nav class="navbar navbar-dark bg-primary" style={{marginBottom:30}}>
            <a class="navbar-brand" href="/">
                <img src="./logo.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
                Painél mACS
            </a>
        </nav>
      )
    }
}