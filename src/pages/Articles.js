import React from 'react'
import { useTranslation } from 'react-i18next'
import BasicLayout from '../components/BasicLayout'

const Articles = () => {
    const { t } = useTranslation();
    return (
        <BasicLayout bgColor={"#499DFF"} wrapperClass={".articles-page-wrapper"} pageTitle={t("index.articles")}>
            <div className="articles-page-wrapper">
                <Article />
                <Article />
                <Article />
                <Article/>
            </div>
        </BasicLayout>
    )
}

export default Articles


const Article = () => {
    const { t } = useTranslation();
    return (
        <div className="article">
            <div className="article-img" onClick={() => window.open('https://www.twitter.com')}>
                <img src="https://www.sonomamag.com/wp-content/uploads/2020/07/cc0715_CharroNegro_TacoVariety-1024x686.jpg" alt="Sonoma puto" />
            </div>
            <div className="article-title">
                <h2>New Mexican Food Park Is Taking Shape in Santa Rosa.</h2>
            </div>
            <div className="article-details">
                <p>10.24.2021&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;La Prensa Sonoma</p>
            </div>
            <button className="article-btn" onClick={() => window.open('https://www.twitter.com')}>{t("articles.btn")}</button>
        </div>
    )
}
