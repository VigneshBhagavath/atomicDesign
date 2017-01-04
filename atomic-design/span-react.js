import React,{Component} from 'react';
import './image-style.scss';

export default class Span extends Component{
	render(){
		return(
			<span>
			{this.props.spanProp}
			</span>
			);
	}
}