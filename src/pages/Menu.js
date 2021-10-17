import BasicLayout from '../components/BasicLayout'
import { useTranslation } from 'react-i18next'
const Menu = () => {
    const { t } = useTranslation();

    return (
        <BasicLayout bgColor={"#FF5732"} wrapperClass=".menu-page-wrapper" pageTitle={t("index.menu")}>
            <div className="menu-page-wrapper">
                <MenuSection title={"Aguachiles"} heading1={"Medium"} heading2={"Large"} />
            </div>
        </BasicLayout>
    )
}

export default Menu


const MenuSection = ({title, heading1, heading2}) => {
    return (
        <div className="menu-section">
            <div className="menu-section__content">
                <div className="menu-section__content-title">
                    <h2>{title}</h2>
                </div>
                <div className="menu-section__content-elements">
                    <div className={`heading ${heading2 ? "multiple" : ""}`}>
                        <h4>Medium</h4>
                        <h4>Large</h4>
                    </div>
                    <div className="items">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
