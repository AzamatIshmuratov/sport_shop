import React, { Component } from 'react'
import MapKlaster from './mapKlaster';

export default class Geography extends Component {
    render() {
        return (
            <section class="geography">


                <div className="col col--lg-10 col--lg-offset-1">
                    <h1 className="title__h1" style={{marginTop: '10px'}}>География болельщика (по всему миру)</h1>
                    <div className="geography__map">
                        <MapKlaster />

                    </div>
                    <ul className="accordion" id="icon-block" data-icon="/static/img/map-pin.png">
                        <li className="accordion__item" data-accordion-item="country_1">
                            <div className="row">
                                <div className="col">
                                    <div className="accordion__subitem">
                                        <div className="accordion__subheading">
                                            {/* <div className="accordion__subname"
                                                style={{
                                                    marginTop: '10px'
                                                }}
                                            >
                                                Немного истории
                                            </div> */}
                                            <div className="subicon">
                                                <svg className="icon icon-down-arrow" width={16} height={12} style={{ transform: 'rotateX(0deg)' }}>
                                                    <use xlinkHref="/static/img/sprite.svg#icon-down-arrow" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="accordion__content">
                                            <p style={{ textAlign: 'justify' }}><strong>История фанатов клуба</strong><br />
                                                <br />
                                                Первым выезднюком в истории Уфимского фанатизма был Олег Сафин ещё в 80-х. В начале 90-х
                                                хоккейные выезда пробивали футбольные фанаты, которые руководствовались правилом
                                                "летом-мячик, зимой -шайба". На домашних матчах организованно поддерживать команду начали в
                                                80-е во 2 секторе Дворца спорта.<br />
                                                <br />
                                                С сезона 92/93 после прихода из армии Зома объединил всех уже на 3 секторе, Салават Юлаев от
                                                года к году играл всё лучше и лучше и позже завоевал 3 бронзы подряд, что естественно
                                                помогло привлечь народ на трибуны, в сезоне 95/96 был пробит первый массовый выезд в Самару
                                                на матч с ЦСК-ВВС из Уфы поехало около 40 человек, затем в ноябре уже 42 человека на
                                                автобусе + 20 своим ходом на авто посетили Тольятти. А в декабре 1996 года случилось
                                                историческое событие, был пробит первый европейский выезд в Финский город Тампаре на
                                                Континентальный кубок.<br />
                                                <br />
                                                В сезоне 97/98 молодежь ушла на 12 сектор создав второе фан-движение, позже преобразованное
                                                в группировку "Der PartiZanen" и после 5 выездов пробитых в сезоне 99/00 партизаны
                                                переключились на поддержку ФК Рэйд-Гастелло, оставшиеся же ребята вместе с другими
                                                болельщиками стали основателями U.F.A.&nbsp;<br />
                                                <br />
                                                6 августа 2000 года навсегда войдёт в историю Уфимского фан-движения, ведь именно в этот
                                                день была создана организация&nbsp;Ultra Fans Actions&nbsp;, среди создателей хочется
                                                отметить Олега Романченко, Алексея Дулясова, Дмитрия Еремейчика, Настю Борисову,
                                                Сташневского и многих других,скинувшись по 50 рублей, почти сразу был сделан лицевой
                                                баннер&nbsp;UFA,&nbsp;который можно увидеть и сейчас на домашних матчах. За годы
                                                существования организации было пробита не одна сотня выездов и нет такого города куда не
                                                ступала нога Уфимского фаната. Первый двойник был пробит на машине в 2001 году по маршруту
                                                Казань-Нижнекамск, в этом же году состоялся и первый Тройник - Челябинск-Пермь-Екатеринбург,
                                                где Салават Юлаев встретился против Мечела, Молота-Прикамье и Динамо-Энергии
                                                соответственно.<br />
                                                <br />
                                                География всех проделанных выездов действительно впечатляет, долгое время U.F.A. была в топе
                                                лучших фан-движений, как по домашней, так и выездной поддержке. Вот и сейчас мы достойно
                                                продолжаем традиции организации, выезжаем во все города КХЛ и достойно поддерживаем команду
                                                на домашних матчах. Все вместе мы творим историю.<br />
                                                <br />
                                                Перфомансы наших фанатов по праву считаются лучшими в КХЛ, а поддержка на домашних матчах
                                                одна из лучших в лиге.&nbsp;<br />
                                                <br />
                                                Группа в ВК -&nbsp;<a href="https://vk.com/ultrafansactions">https://vk.com/ultrafansactions</a>
                                            </p>
                                            <div className="accordion__title">Представитель клуба</div>
                                            <div className="accordion__card">
                                                <span className="accordion__card__icon">
                                                    <svg className="icon icon-profile" width={24} height={28}>
                                                        <use xlinkHref="/static/img/sprite.svg#icon-profile" />
                                                    </svg>
                                                </span>
                                                <div className="accordion__contacts">
                                                    <span className="accordion__contacts__name">Эмиль Нафиков </span>
                                                    <div className="accordion__contacts__info">
                                                        <a className="accordion__phone" href="tel:79174652824">+79174652824</a>
                                                        <a className="accordion__email" href="mailto:fans@hcsalavat.ru">fans@hcsalavat.ru</a>
                                                    </div>
                                                </div>
                                                <div className="accordion__socials">
                                                    <a className="accordion__social" href="https://vk.com/nafikov_emil" title="Вконтакте">
                                                        <svg className="icon icon-vk" width={16} height={19}>
                                                            <use xlinkHref="/static/img/sprite.svg#icon-vk" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
