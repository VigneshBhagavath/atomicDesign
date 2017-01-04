import React,{Component} from 'react';
import './a-style.scss';

export default class ProductTile extends Component{
	render(){
		return(
			<a className="a-style">
				<img className="image-comp" src="image1.jpg" />
			</a>
			);
	}
}
