import React,{Component} from 'react';
import ProductName from './product-name.js'
import ProductRating from './product-rating.js'
import ProductPrice from './product-price.js'

export default class ProductContent extends Component{
	render(){
		return(
			<div>
			   <ProductName />
			   <ProductRating />
			   <ProductPrice />
			</div>
		)
	}
}
