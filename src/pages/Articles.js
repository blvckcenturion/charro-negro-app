import React from 'react'
import { useTranslation } from 'react-i18next'
import BasicLayout from '../components/BasicLayout'
import { ARTICLES } from "../utils/data"

const Articles = () => {
    const { t } = useTranslation();
    return (
        <BasicLayout bgColor={"#499DFF"} wrapperClass={".articles-page-wrapper"} pageTitle={t("index.articles")}>
            <div className="articles-page-wrapper">
                {ARTICLES.map((article, index) => <Article key={index} article={article} />)}
            </div>
        </BasicLayout>
    )
}

export default Articles


const Article = ({ article }) => {
    const { title, date, publisher, img, link } = article;
    const { t } = useTranslation();
    const navigate = () => window.open(link, "_blank");
    return (
        <div className="article">
            <div className="article-img" onClick={navigate}>
                <img src={img} alt={`${publisher} article about Sonoma's Charro Negro Food Truck`} />
            </div>
            <div className="article-title">
                <h2>{t(title)}</h2>
            </div>
            <div className="article-details">
                <p>{date}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{publisher}</p>
            </div>
            <button className="article-btn" onClick={navigate}>{t("articles.btn")}</button>
        </div>
    )
}
