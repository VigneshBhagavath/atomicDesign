import React,{Component} from 'react';
import './image-style.scss';
class Img extends Component{
	render(){
		return(
			<img className={this.props.imageClass} src={this.props.srcProp} alt="Jacket" />);
	}
}
export default Img;