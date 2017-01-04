import React,{Component} from 'react';
import Product from './product-description.js';
import Header from './header.js'
import Footer from './footer.js'
export default class App extends Component{
	render(){
		var productList=[];
		for(var i=0; i<300; i++){
			productList.push(<Product/>);
		}
		return(
			<div>
				<Header/>
				<div className="product-list">
				   {productList}
				</div>
				<Footer/>
			</div>
		)
	}
}