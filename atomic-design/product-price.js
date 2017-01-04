import React,{Component} from 'react';
import Span from './span-react.js';

export default class ProductPrice extends Component{
	render(){
		return(
			<div>
				<Span spanProp = "$200" />
			</div>);
	}
}