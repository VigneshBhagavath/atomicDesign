import React,{Component} from 'react';
import Img from './img-react.js';
import './a-style.scss';

class ProductTile extends Component{
	render(){
		return(
			<a className="a-style">
				<Img imageClass="image-comp" srcProp="image1.jpg" />
			</a>);
	}
}
export default ProductTile;
