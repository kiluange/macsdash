import React,{Component} from 'react';
import LineChart from './components/charts/linechart';
import DonutChart from './components/charts/donutchart';


export default class Individuos extends Component{
    render() {
      return (
        <div className='container'>
          <div className='row' style={{marginTop:30}}>
            <div className='col-lg-6'>
              <div class="card">
                <div class="card-header">
                  Escolaridade
                </div>
                <div class="card-body">          
                  <blockquote class="blockquote mb-0">
                  <DonutChart data={
                        [
                            ['tipo', 'total'],
                            ['Creche', 11],
                            ['Pré-escola', 2],
                            ['Fundamental', 11],
                            ['Médio', 2],
                            ['Superior', 11],
                        ]
                    } title='Escolaridade'/>
                    <footer class="blockquote-footer">Renda familiar <cite title="Source Title">Mapa da Saúde</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div class="card">
                <div class="card-header">
                    Situação no mercado de trabalho
                </div>
                <div class="card-body">          
                  <blockquote class="blockquote mb-0">
                  <DonutChart data={
                        [
                            ['tipo', 'total'],
                            ['Empregado', 11],
                            ['Assalariado c/ carteira', 2],
                            ['Assalariado s/ carteira', 2],
                            ['Desempregado', 2],
                            ['Não trabalha', 2],
                        ]
                    } title='Situação no mercado de trabalho'/>
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
                  Nutrição
                </div>
                <div class="card-body">          
                  <blockquote class="blockquote mb-0">
                    <LineChart data={
                        [
                            ['Mês', 'Peso Médio', 'Altura Média'],
                            ['Janeiro',  37.8, 0],
                            ['Fevereiro',  30.9, 0],
                            ['Março',  25.4, 0],
                            ['Abril',  11.7, 0],
                            ['Maio',  11.9, 0],
                            ['Junho',   8.8, 0],
                            ['Julho',   7.6, 0],
                            ['Agosto',  12.3, 0],
                            ['Setembro',  16.9, 0],
                            ['Outubro', 12.8, 0],
                            ['Novembro',  5.3, 0],
                            ['Dezembro',  6.6, 0],
                        ]
                    } title='Nutrição'/>
                    <footer class="blockquote-footer">Nutrição <cite title="Source Title">Mapa da Saúde</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}