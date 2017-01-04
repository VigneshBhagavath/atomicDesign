import React,{Component} from 'react';
import './image-style.scss';

export default class ProductRating extends Component{
	render(){
		return(
			<div className="product-rating">
				<span>3.7</span>
				<span>(2)</span>
				<img className="logo" src="logo.jpg" />
			</div>
		);
	}
}