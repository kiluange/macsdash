import React,{Component} from 'react';
import LineChart from './components/charts/linechart';
import BarChart from './components/charts/barchart'


export default class Visitas extends Component{
    render() {
      return (
        <div className='container'>
          <div className='row' style={{marginTop:30}}>
            <div className='col-lg-12'>
              <div class="card">
                <div class="card-header">
                  Unidade de saúde
                </div>
                <div class="card-body">          
                  <blockquote class="blockquote mb-0">
                    <BarChart data ={
                      [
                        ['tipo', 'Cadastros'],
                        ['Domicilios', 8.94],
                        ['Individuos', 10.49],
                        ['Visitas', 19.30],
                        ['ACS', 21.45]
                      ]
                      }/>
                    <footer class="blockquote-footer">Renda familiar <cite title="Source Title">Mapa da Saúde</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>                      
          </div>
          <div className='row' style={{marginTop:30}}>
          <div className='col-lg-12'>
              <div class="card">
                <div class="card-header">
                  Equipes
                </div>
                <div class="card-body">          
                  <blockquote class="blockquote mb-0">
                  <LineChart data={
                        [
                            ['Mês', 'Domicílios', 'Individuos', 'Visitas', 'Atividades Coletivas'],
                            ['Janeiro',  37.8, 0, 0, 0 ],
                            ['Fevereiro',  30.9, 0, 0, 0],
                            ['Março',  25.4, 0, 0, 0],
                            ['Abril',  11.7, 0, 0, 0],
                            ['Maio',  11.9, 0, 0, 0],
                            ['Junho',   8.8, 0, 0, 0],
                            ['Julho',   7.6, 0, 0, 0],
                            ['Agosto',  12.3, 0, 0, 0],
                            ['Setembro',  16.9, 0, 0, 0],
                            ['Outubro', 12.8, 0, 0, 0],
                            ['Novembro',  5.3, 0, 0, 0],
                            ['Dezembro',  6.6, 0, 0, 0],
                        ]
                    }/>
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
                  ACS
                </div>
                <div class="card-body">          
                  <blockquote class="blockquote mb-0">
                  <LineChart data={
                        [
                            ['Mês', 'Domicílios', 'Individuos', 'Visitas', 'Atividades Coletivas'],
                            ['Janeiro',  37.8, 0, 0, 0 ],
                            ['Fevereiro',  30.9, 0, 0, 0],
                            ['Março',  25.4, 0, 0, 0],
                            ['Abril',  11.7, 0, 0, 0],
                            ['Maio',  11.9, 0, 0, 0],
                            ['Junho',   8.8, 0, 0, 0],
                            ['Julho',   7.6, 0, 0, 0],
                            ['Agosto',  12.3, 0, 0, 0],
                            ['Setembro',  16.9, 0, 0, 0],
                            ['Outubro', 12.8, 0, 0, 0],
                            ['Novembro',  5.3, 0, 0, 0],
                            ['Dezembro',  6.6, 0, 0, 0],
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