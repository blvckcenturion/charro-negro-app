import BasicLayout from '../components/BasicLayout'
import { useTranslation } from 'react-i18next'
import { MENU } from '../utils/data';
const Menu = () => {
    const { t } = useTranslation();

    return (
        <BasicLayout bgColor={"#8657E9"} wrapperClass=".menu-page-wrapper" pageTitle={t("index.menu")}>
            <div className="menu-page-wrapper">
                {MENU.map((menuItem, i) => <MenuSection key={i} menuItem={menuItem}/>)}
            </div>
        </BasicLayout>
    )
}

export default Menu


const MenuSection = ({ menuItem }) => {
    const { title, headings, translateTitle,translateElements, items, img} = menuItem;
    const {t} = useTranslation();
    return (
        <div className="menu-section">
            <div className="menu-section__content">
                <div className="menu-section__content-title">
                    <h2>{translateTitle ? t(title) : title}</h2>
                    <img src={ img } alt={`${title}`} />
                </div>
                <div className="menu-section__content-elements">
                    <div className={`heading ${headings.length > 1 ? "double-col" : ""}`}>
                        {headings.map((heading, i) => <div className="col" key={i}><h4>{ t(heading)}</h4></div>)}
                    </div>
                    <div className="items">
                        {items.map((menuItem, i) => <MenuItem key={i} item={menuItem} translate={translateElements} doubleCol={headings.length > 1}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}


const MenuItem = ({ item, translate, doubleCol }) => {
    const {t} = useTranslation();
    return (
        <div className={`menu-item ${doubleCol ? "double-col" : ""}`}>
            <div className="menu-item__title">
                <h4>{translate ? t(item.name) : item.name}</h4>
            </div>
            {item.prices.map((price, i) => <div className="menu-item__price" key={i}><span>${price}</span></div>)}
        </div>
    )
}