import React from 'react';
import '../styles/Element.css';

class Element extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.eleName,
            image: props.eleImage,
            desc: props.eleDesc,
            ex: props.example,
            atom: props.atom,
            group: props.groups,
            metal: props.metal,
            showInfo: false,
            clickCount: 0
        };

    }

    showInfoBox = () =>{
        this.setState({showInfo: !this.state.showInfo});
        console.log("showinfo: " + !this.state.showInfo + " name: " + this.state.name);
        this.props.showInfo(!this.state.showInfo, this.state.name, this.state.ex, this.state.desc, this.state.atom, this.state.group, this.state.metal);
    };

    add = () => {
        this.props.addCandidate(this.state.name, this.state.image, this.state.group, this.state.metal);
    };

    render(){
        return (<img draggable={true} onDragEnd={this.add} onClick={this.showInfoBox} className={"atom"} src={this.state.image} alt={""} />);
    }
}

export default Element;