import React,{Component} from 'react';
import ProductTile from './product-image.js';
import ProductContent from './product-content.js'
import './product.scss'
export default class Product extends Component{
	render(){
		return(
			<div className="product">
			   <ProductTile />
			   <ProductContent />
			</div>
		)
	}
}