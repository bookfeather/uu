import Header from "../components/Header";
import StoreContent from "../components/StoreContent";
import Footer from "../components/Footer";
import goods from "../json/goods.json";

function Store() {
    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <div className="layoutContent">
                <StoreContent goods={goods} />
            </div>
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Store