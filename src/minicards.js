import React,{Component} from 'react';
import Minicard from './components/minicard/minicard';

export default class Minicards extends Component{
    render() {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-xm-12'>
              <Minicard color='#9C27B0' text='Domicílios' icon='home' total={50}/>
            </div>
            <div className='col-lg-3 col-md-6 col-xm-12'>
              <Minicard color='#673AB7' text='Famílias' icon='users' total={50}/>
            </div>
            <div className='col-lg-3 col-md-6 col-xm-12'>
              <Minicard color='#FF7043' text='Indivíduos' icon='user' total={50}/>
            </div>
            <div className='col-lg-3 col-md-6 col-xm-12'>
              <Minicard color='#2196F3' text='Visitas' icon='hand-holding-heart' total={50}/>
            </div>
          </div>
        </div>
      )
    }
}