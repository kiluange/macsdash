import React,{Component} from 'react';
import './minicard.css';

export default class Minicard extends Component{
    render() {
      return (
        <div class="card">
            <div class="card-header" style={{backgroundColor:this.props.color}}>
                
                <p className='info'> <i class={"fas fa-"+this.props.icon}></i> {' '+this.props.text + " "+this.props.total}</p>
            </div>
            <ul class="list-group list-group-flush text-right">                
                <li class="list-group-item"> <a href={'/'+this.props.text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}>Ver</a> <i class="fas fa-sign-in-alt"></i></li> 
            </ul>
        </div>
      )
    }
}