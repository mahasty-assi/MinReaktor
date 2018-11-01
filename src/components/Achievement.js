import React from 'react';
import Unknown from '../images/Achievements/Unknown.png';
import '../styles/Achievement.css';

class Achievement extends React.Component{

    achClicked = () =>{
        if(this.props.image !== Unknown) {
            this.props.showAchInfo(this.props.type);
        }
    };

    render(){
        return <img className={"achievement"} src={this.props.image} onClick={this.achClicked} alt={""}/>;
    }
}

export default Achievement;