import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"
function Home() {
    return (
        <div>
            <Header className="layoutHeader" />
            <Content className="layoutContent" />
            <Footer className="layoutFooter" />
        </div>

    );
}

export default Home
