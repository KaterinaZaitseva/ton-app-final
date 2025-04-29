import React, { useEffect } from "react";
import './contact-page-style.css';
import image from './contact-page-image.jpg';

export default function ContactPage() {
    useEffect(() => {
        let ymaps3 = window.ymaps3;
        ymaps3.ready.then(() => {
           const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer} = ymaps3;

            const map = new YMap(
                document.getElementById('map'),
                {
                    location: {
                        center: [27.949015, 55.763140],
                        zoom: 17
                    }
                }
            );

            map.addChild(new YMapDefaultSchemeLayer());
            map.addChild(new YMapDefaultFeaturesLayer());

            ymaps3.import('@yandex/ymaps3-markers@0.0.1').then(x => {
                const {YMapDefaultMarker} = x;
                const marker = new YMapDefaultMarker({
                    coordinates: [27.949015, 55.763140],
                    title: 'АП "ТОН"',
                    color: 'red'
                });
                map.addChild(marker);
            });
        });
    });

    return (
        <div className="content-page-container">
            <div className="content-page-container__item_container">
                <img className="item_container__item" alt="" src={image} />
                <div id="map" className="item_container__item"></div>
            </div>
            <p className="content-page-container__description">
                ООО Агропромышленное предприятие "Техническое обслуживание насосов". <br/>
                Находимся по адресу: Витебская область, город Верхнедвинск, улица Советская, дом 193/1. <br/>
                Номер телефона: +375(29)770-97-25 (МТС). <br/>
                Почтовый индекс: 211631. УНП: 300062376. <br/>
                Предварительно необходимо позвонить. <br/> 
            </p>
        </div>
    );
}