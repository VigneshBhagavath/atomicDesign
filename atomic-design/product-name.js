import React,{Component} from 'react';
import Span from './span-react.js';
import './a-style.scss';

export default class ProductName extends Component{
	render(){
		return(
			<a className="a-style">
				<Span spanProp = "Campus Sutra Full Sleeve Printed Men's Jacket" />
			</a>);
	}
}