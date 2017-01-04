import React,{Component} from 'react';
import Span from './span-react.js';
import Img from './img-react.js';

import './a-style.scss';

export default class ProductRating extends Component{
	render(){
		return(
			<div className="product-rating">
				<Span spanProp = "3.7"/>
				<Span spanProp = "(2)" />
				<Img imageClass="logo" srcProp="logo.jpg" />
			</div>
		);
	}
}