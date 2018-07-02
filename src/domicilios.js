import React,{Component} from 'react';
import LineChart from './components/charts/linechart'

export default class Domicilios extends Component{
    render() {
      return (
        <div className='container'>
          <div className='row' style={{marginTop:30}}>
            <div className='col-12'>
              <div class="card">
                <div class="card-header">
                  Vetores
                </div>
                <div class="card-body">
                  <LineChart data={
                    [
                        ['Mês', 'nº Focos'],
                        [1,  37.8, ],
                        [2,  30.9,],
                        [3,  25.4,],
                        [4,  11.7,],
                        [5,  11.9,],
                        [6,   8.8,],
                        [7,   7.6,],
                        [8,  12.3,],
                        [9,  16.9,],
                        [10, 12.8,],
                        [11,  5.3,],
                        [12,  6.6,],
                    ]
                }/>              
                </div>
              </div>
            </div>
          </div>
          <div className='row' style={{marginTop:30}}>
            <div className='col-12'>
              <div class="card">
              <div class="card-header">
                  Água e esgoto
                </div>
                <div class="card-body">
                  <LineChart data={
                    [
                        ['Mês', 'Encanada', 'Poço'],
                        [1,  37.8, 15 ],
                        [2,  30.9, 25],
                        [3,  25.4, 21],
                        [4,  11.7, 75],
                        [5,  11.9, 0],
                        [6,   8.8, 0],
                        [7,   7.6, 0],
                        [8,  12.3, 0],
                        [9,  16.9, 0],
                        [10, 12.8, 0],
                        [11,  5.3, 0],
                        [12,  6.6, 0],
                    ]
                } title = 'Água'/>
                <LineChart data={
                    [
                        ['Mês', 'Encanado', 'Fossa'],
                        [1,  37.8, 15 ],
                        [2,  30.9, 25],
                        [3,  25.4, 21],
                        [4,  11.7, 75],
                        [5,  11.9, 0],
                        [6,   8.8, 0],
                        [7,   7.6, 0],
                        [8,  12.3, 0],
                        [9,  16.9, 0],
                        [10, 12.8, 0],
                        [11,  5.3, 0],
                        [12,  6.6, 0],
                    ]
                } title = 'Esgoto'/>               
                </div>
              </div>
            </div>
          </div>
          <div className='row' style={{marginTop:30}}>
            <div className='col-12'>
              <div class="card">
                <div class="card-header">
                  Animais 
                </div>
                <div class="card-body">
                <LineChart data={
                    [
                        ['Mês', 'Animais'],
                        [1,  37.8, ],
                        [2,  30.9,],
                        [3,  25.4,],
                        [4,  11.7,],
                        [5,  11.9,],
                        [6,   8.8,],
                        [7,   7.6,],
                        [8,  12.3,],
                        [9,  16.9,],
                        [10, 12.8,],
                        [11,  5.3,],
                        [12,  6.6,],
                    ]
                }/>
                </div>
              </div>
            </div>
          </div>
          <div className='row' style={{marginTop:30}}>
            <div className='col-12'>
              <div class="card">
                <div class="card-header">
                  Destino do lixo 
                </div>
                <div class="card-body">
                <LineChart data={
                    [
                        ['Mês', 'Coletado', 'Queimado', 'Céu aberto', 'Outros'],
                        [1,  37.8, 15, 0, 0],
                        [2,  30.9, 25, 0, 0],
                        [3,  25.4, 21, 0, 0],
                        [4,  11.7, 75, 0, 0],
                        [5,  11.9, 0, 0, 0],
                        [6,   8.8, 0, 0, 0],
                        [7,   7.6, 0, 0, 0],
                        [8,  12.3, 0, 0, 0],
                        [9,  16.9, 0, 0, 0],
                        [10, 12.8, 0, 0, 0],
                        [11,  5.3, 0, 0, 0],
                        [12,  6.6, 0, 0, 0],
                    ]
                } title = 'Destino do lixo'/>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}