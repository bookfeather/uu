import Header from "../components/Header"
import TeamContent from "../components/TeamContent";
import Footer from "../components/Footer"
function Team() {
    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <TeamContent className="layoutContent" />
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Team