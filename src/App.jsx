import './App.css'
import Scrolltop from "./components/Scrolltop"
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import 'antd/dist/reset.css';
import React, { useState, useEffect, getRandomQuote } from 'react';
import { Provider } from "react-redux";
import store from './redux/store';

import Home from './pages/Home'
import News from './pages/News';
import Video from './pages/Video';
import Video2 from './pages/Video2';
import Store from './pages/Store';
import Goods from './pages/Goods';
import Team from './pages/Team';
// const queryClient =newQueryClient({
//   defaultOptions: {
//     queries: {networkMode: 'offlineFirsst'},
//     mutations: {newworkMode: 'offlineFirst'},
//   }
// })

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 750);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Home" element={<Home />} />
              <Route path="News" element={<News />} />
              <Route path="Video" element={<Video />} />
              <Route path="Video2" element={<Video2 />} />
              <Route path="Store" element={<Store />} />
              <Route path="id/:goodId" element={<Goods />} />
              <Route path="Team" element={<Team />} />
            </Routes>
            <Scrolltop />
          </BrowserRouter>
        </Provider>
        
     )}
     </div>
  );
};

export default App;
