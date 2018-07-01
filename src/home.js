import React,{Component} from 'react';
import LineChart from './components/charts/linechart';
import Pyramide from './components/charts/pyramide';
import DonutChart from './components/charts/donutchart';


export default class Home extends Component{
    render() {
      return (
        <div className='container'>
          <div className='row' style={{marginTop:30}}>
            <div className='col-lg-6'>
              <div class="card">
                <div class="card-header">
                  Resumo Visitas
                </div>
                <div class="card-body">          
                  <blockquote class="blockquote mb-0">
                    <LineChart data={
                      [
                          ['Mês', 'Visitas'],
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
                    <footer class="blockquote-footer">Mês x Visita <cite title="Source Title">Mapa da Saúde</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div class="card">
                <div class="card-header">
                  Pirâmide etária
                </div>
                <div class="card-body">          
                  <blockquote class="blockquote mb-0">
                    <Pyramide/>
                    <footer class="blockquote-footer">Pirâmide etária <cite title="Source Title">Mapa da Saúde</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>            
          </div>
          <div className='row' style={{marginTop:30}}>
          <div className='col-lg-6'>
              <div class="card">
                <div class="card-header">
                  Doenças
                </div>
                <div class="card-body">          
                  <blockquote class="blockquote mb-0">
                    <DonutChart data={
                        [
                            ['Doença', 'nº Casos'],
                            ['Diabéticos', 11],
                            ['Hipertensos', 2],
                            ['Cardiopatas', 2],
                            ['Insuficiencia renal', 2],
                            ['Obesos', 7]
                        ]
                    } title='Doenças Crônicas'/>
                    <footer class="blockquote-footer">Doenças <cite title="Source Title">Mapa da Saúde</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div class="card">
                <div class="card-header">
                  População vulnerável
                </div>
                <div class="card-body">          
                  <blockquote class="blockquote mb-0">
                    <DonutChart data={
                        [
                            ['Vulneráveis', 'nº Casos'],
                            ['Moradores de rua', 11],
                            ['LGBT', 2],
                            ['Acamados', 2],
                            ['Domiciliados', 2]
                        ]
                    } title='População vulnerável'/>
                    <footer class="blockquote-footer">Doenças <cite title="Source Title">Mapa da Saúde</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}