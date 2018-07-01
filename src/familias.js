import React,{Component} from 'react';
import LineChart from './components/charts/linechart';
import DonutChart from './components/charts/donutchart';


export default class Familias extends Component{
    render() {
      return (
        <div className='container'>
          <div className='row' style={{marginTop:30}}>
            <div className='col-lg-8'>
              <div class="card">
                <div class="card-header">
                  Renda familiar
                </div>
                <div class="card-body">          
                  <blockquote class="blockquote mb-0">
                    <LineChart data={
                      [
                          ['Mês', '1/4', '1/2', '1', '2', '3', '4', '5 ou mais'],
                          ['Janeiro',  37.8, 0, 0, 0, 0, 0, 0 ],
                          ['Fevereiro',  30.9, 0, 0, 0, 0, 0, 0],
                          ['Março',  25.4, 0, 0, 0, 0, 0, 0],
                          ['Abril',  11.7, 0, 0, 0, 0, 0, 0],
                          ['Maio',  11.9, 0, 0, 0, 0, 0, 0],
                          ['Junho',   8.8, 0, 0, 0, 0, 0, 0],
                          ['Julho',   7.6, 0, 0, 0, 0, 0, 0],
                          ['Agosto',  12.3, 0, 0, 0, 0, 0, 0],
                          ['Setembro',  16.9, 0, 0, 0, 0, 0, 0],
                          ['Outubro', 12.8, 0, 0, 0, 0, 0, 0],
                          ['Novembro',  5.3, 0, 0, 0, 0, 0, 0],
                          ['Dezembro',  6.6, 0, 0, 0, 0, 0, 0],
                      ]
                  }/>
                    <footer class="blockquote-footer">Renda familiar <cite title="Source Title">Mapa da Saúde</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="card">
                <div class="card-header">
                  Benefício Bolsa Família
                </div>
                <div class="card-body">          
                  <blockquote class="blockquote mb-0">
                  <DonutChart data={
                        [
                            ['tipo', 'total'],
                            ['Cadastrados', 11],
                            ['Beneficiários', 2]
                        ]
                    } title='Bolsa Familia'/>
                    <footer class="blockquote-footer">Bolsa Família <cite title="Source Title">Mapa da Saúde</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>          
          </div>
          <div className='row' style={{marginTop:30}}>            
            <div className='col-lg-12'>
              <div class="card">
                <div class="card-header">
                  Tamanho da família
                </div>
                <div class="card-body">          
                  <blockquote class="blockquote mb-0">
                    <LineChart data={
                        [
                            ['Mês', 'Até 3', 'de 3 a 5', '6 ou mais'],
                            ['Janeiro',  37.8, 0, 0 ],
                            ['Fevereiro',  30.9, 0, 0],
                            ['Março',  25.4, 0, 0],
                            ['Abril',  11.7, 0, 0],
                            ['Maio',  11.9, 0, 0],
                            ['Junho',   8.8, 0, 0],
                            ['Julho',   7.6, 0, 0],
                            ['Agosto',  12.3, 0, 0],
                            ['Setembro',  16.9, 0, 0],
                            ['Outubro', 12.8, 0, 0],
                            ['Novembro',  5.3, 0, 0],
                            ['Dezembro',  6.6, 0, 0],
                        ]
                    }/>
                    <footer class="blockquote-footer">Tamanho da família <cite title="Source Title">Mapa da Saúde</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>           
          </div>
        </div>
      )
    }
}