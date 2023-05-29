import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import GoodsDetail from "../components/GoodsDetail";
import goods from "../json/goods.json";

function Goods() {
   const { goodId } = useParams();
   const good = goods.find(
      (x) => x.id === goodId
   );

   return (
      <div className="mainLayout">
         <Header className="layoutHeader" />
         <GoodsDetail good={good} className="layoutContent" />
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Goods;