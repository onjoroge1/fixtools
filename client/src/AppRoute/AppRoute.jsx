import React, { Component } from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import DetailPdf from '../Pages/DetailPdf';
import Home from '../Pages/Home';
import MinifyCSS from '../Pages/MinifyCSS';

export class AppRoute extends Component {
  render() {
    return (
      <div>
              <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route  path="/detail/:id" element={<DetailPdf />} />
                    <Route  path="/MinifyCSS" element={<MinifyCSS />} />
                </Routes>
            </BrowserRouter>
      </div>
    )
  }
} 

export default AppRoute