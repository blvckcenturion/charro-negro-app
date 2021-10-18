import React from 'react'
import { useTranslation } from 'react-i18next'
import BasicLayout from '../components/BasicLayout'

const Articles = () => {
    const { t } = useTranslation();
    return (
        <BasicLayout bgColor={"#499DFF"} wrapperClass="articles-page-wrapper" pageTitle={t("index.articles")}>
            <div className="articles-page-wrapper">
            
            </div>
        </BasicLayout>
    )
}

export default Articles
