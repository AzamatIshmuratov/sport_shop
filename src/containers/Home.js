import React, { Component } from 'react'
import './Home.css'
export default class Home extends Component {

  render() {
    return (
      <div className='container'>
        {/* Hello world */}
        <div className="content-wrap">
          <h1>О магазине</h1>
          <h2>Общая информация</h2>
          <div className="row">
            <div className="col-md-12">
              <div className="divider" /><div className="pull-right">
                <img src="./img/Embleme.png" alt/>
              </div>
              <p style={{ textAlign: 'justify' }}>
                Мы рады Вас видеть на сайте официального интернет-магазина хоккейного клуба «Салават Юлаев»! С открытием интернет-магазина атрибутики и сувенирной продукции, клуб выходит на новый уровень взаимоотношений с болельщиками: теперь вы можете оформить покупку товаров с логотипом любимого клуба в любой время и оформить доставку в любой город России!
              </p>
              <p style={{ textAlign: 'justify' }}>
              </p>
              <p style={{ textAlign: 'justify' }}>
              </p>
              <h2 style={{ textAlign: 'justify' }}><br />
              </h2>
              <h2 style={{ textAlign: 'justify' }}>ФИРМЕННАЯ ОДЕЖДА И АТРИБУТИКА </h2>
              <p style={{ textAlign: 'justify' }}>
                Мы ежегодно обновляем ассортимент атрибутики и одежды с символикой клуба, как спортивного, так и повседневного направлений. Мы хотим, чтобы наши болельщики всегда могли носить частичку клуба на себе – будь то шарф и кепка на домашнем матче, или стильная футболка на учебе и работе.
              </p>
              <h2 style={{ textAlign: 'justify' }}>СУВЕНИРНАЯ ПРОДУКЦИЯ</h2>
              <p style={{ textAlign: 'justify' }}>
                Подарок на день рождения, презент руководителю или гостинец в дальнюю поездку: линейка сувениров с символикой клуба «Салават Юлаев» регулярно дополняется новыми моделями, которые с удовольствием собирают коллекционеры, и просто любители хоккея. Стань обладателем уникального треугольного значка, или удобной кружки для офиса – и пусть любимый клуб будет всегда рядом!
              </p>
              <h2 style={{ textAlign: 'justify' }}>ЭКСКЛЮЗИВ</h2>
              <p style={{ textAlign: 'justify' }}>
                Специально для самых преданных болельщиков и знатоков хоккейного мира представляем новую группу товаров: уникальные товарные позиции, многие из которых существуют в единственном экземпляре и так или иначе отмечены хоккейной жизнью и историей. Клюшки с автографами игроков, победные шайбы с домашних матчей, реальные игровые свитера и много другое. Стань обладателем частицы настоящего хоккейного мира!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}