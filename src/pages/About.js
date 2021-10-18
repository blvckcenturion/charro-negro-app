import about from '../assets/imgs/about.jpeg'
import BasicLayout from '../components/BasicLayout'
import { useTranslation } from 'react-i18next'

const About = () => {

    const { t } = useTranslation()
    
    return (
        <BasicLayout bgColor={"#80C2AF"} wrapperClass=".about-page-wrapper" pageTitle={t("index.about")}>
                
                <div className="about-page-wrapper">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-content-title">
                                <h2>{t("about.title1")}</h2>
                            </div>
                            <div className="card-content-section">
                                <p>
                                    {t("about.desc1")}<br /><br />
                                    {t("about.desc2")}<br /><br />
                                    {t("about.desc3")}<br/><br />
                                    {t("about.desc4")}
                                </p>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src={about} alt="Charro Negro food truck" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <div className="card-content-title">
                                <h2>{t("about.title2")}</h2>
                            </div>
                            <div className="card-content-section">
                                <div>
                                    <h3>{t("about.hours.title")}</h3>
                                    <p>{t("about.hours.desc")}</p>
                                </div>
                                <div>
                                    <h3>{t("about.address.title")}</h3>
                                    <p>{t("about.address.desc")}</p>
                                </div>
                                <div>
                                    <h3>{t("about.pickUp.title")}</h3>
                                    <p>{t("about.pickUp.desc")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-image">
                            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1592.741065997349!2d-122.73055257647611!3d38.430448444277964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808437f9c2b2a735%3A0x3640ba696aabbc42!2s665%20Sebastopol%20Rd%2C%20Santa%20Rosa%2C%20CA%2095407%2C%20USA!5e0!3m2!1sen!2sbo!4v1634163445588!5m2!1sen!2sbo" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
        </BasicLayout>
    )
}

export default About


