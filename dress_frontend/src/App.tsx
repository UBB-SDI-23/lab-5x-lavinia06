import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppHome } from "./components/AppHome";
import { AppMenu } from "./components/AppMenu";
import { AllBrands } from './components/brands/AllBrands';
import { BrandAdd } from './components/brands/BrandAdd';
import { BrandDelete } from "./components/brands/BrandDelete";
import { BrandDetails } from './components/brands/BrandDetails';
import { UpdateBrand } from './components/brands/BrandsUpdate';
import { BrandsFilter } from './components/brands/BrandsFilter';


function App() {

  return (
		<React.Fragment>
			<Router>
				<AppMenu />

				<Routes>
					<Route path="/" element={<AppHome />} />
					<Route path="/brands" element={<AllBrands />} />
					<Route path="/brands/add" element={<BrandAdd />} />
					<Route path="/brands/:brandId/details" element={<BrandDetails />} />
					<Route path="/brands/:brandId/edit" element={<UpdateBrand/>} />
					<Route path="/brands/:brandId/delete" element={<BrandDelete />} />
					<Route path="/brands-ordered-by-nr-models" element={<BrandsFilter />} />
				</Routes>
			</Router> 
		</React.Fragment>
	);
}



export default App;

