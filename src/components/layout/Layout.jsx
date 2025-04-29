import React from "react";
import './layout-style.css';
import logo from './logo-ton.svg';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "../content-page/contact-page/ContactPage";
import HomePage from "../content-page/home-page/HomePage";
import ProductsPage from "../content-page/cards-page/ProductsPage";
import ServicesPage from "../content-page/cards-page/ServicesPage";

const productsCardList = [
    {   
        title: "Погружные (скважинные) насосы типа ЭЦВ",
        colorClass: "bg-purple-box"
    },
    {
        title: "Аккумуляторные батареи",
        colorClass: "bg-blue-box"
    },
    {
        title: "Эмаль ПФ-115",
        colorClass: "bg-green-box"
    },
    {
        title: "Токарные резцы",
        colorClass: "bg-yellow-box"
    },
    {
        title: "Отрезные, шлифовальные круги",
        colorClass: "bg-purple-box"
    },
    {
        title: "Сварочные электроды",
        colorClass: "bg-blue-box"
    },
    {
        title: "Резиновые напорные, напорно-всасывающие рукава",
        colorClass: "bg-green-box"
    },
    {
        title: "Товары для сварки: резаки, горелки, редукторы",
        colorClass: "bg-yellow-box"
    },
];

const servicesCardList = [
    
    {
        title: "Диагностика и ремонт ТНВД и форсунок к ним: МЗ, УТН, НД, ЛСТН, МОТОРПАЛ",
        colorClass: "bg-purple-box"
    },

    {
        title: "Обменный фонд",
        colorClass: "bg-green-box"
    },

];

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/products",
    element: <ProductsPage cardsList = {productsCardList} />
  },
  {
    path: "/services",
    element: <ServicesPage cardsList = {servicesCardList} />
  },
  {
    path: "/contacts",
    element: <ContactPage />
  },
]);

export default function Layout() {
    const currentPath = window.location.pathname;

    return(
        <div className="app-content">
            <header className="header">
                <a className="logo" href={'/'}>
                    <div className="logo__container">
                        <img className="logo__image" src={logo} alt="logo"/>
                        <span className="logo__text gradient-text">АП ТОН</span>
                    </div>
                </a>
                <input type="checkbox" id="nav-check"/>
                <div className="nav-btn">
                    <label className="nav-btn__label" htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <ul className="nav-bar">
                    <li>
                        <a className={"nav-bar__link " + (currentPath === '/products'? "nav-bar__link_active" : "")} href={'products'}>
                            <div className="nav-bar__link-content">
                                <span className="nav-bar__link-text">Продажа</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className={"nav-bar__link " + (currentPath === '/services'? "nav-bar__link_active" : "")} href={'services'}>
                            <div className="nav-bar__link-content">
                                <span className="nav-bar__link-text">Услуги</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className={"nav-bar__link " + (currentPath === '/contacts'? "nav-bar__link_active" : "")} href={'contacts'}>
                            <div className="nav-bar__link-content">
                                <span className="nav-bar__link-text">Контакты</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </header>
            <RouterProvider router={router} />
            { currentPath !== '/' && 
                <footer className="footer">
                    <div className="footer__container">
                        <div className="footer__container__text">ООО Агропромышленное предприятие "ТОН"</div>
                        <div className="footer__container__text">УНП: 300062376</div>
                        <div className="footer__container__text">Юридический адрес: Витебская обл., г. Верхнедвинск,</div>
                        <div className="footer__container__text">ул. Советская, д. 193/1</div>
                        <div className="footer__container__text">Почтовый индекс: 211631</div>
                        <div className="footer__container__text">p75@mail.ru</div>
                    </div>
                    <div className="footer__container">
                    ---Zaitseva Ekaterina
                    </div>
                </footer>
            }
        </div>
    );
};