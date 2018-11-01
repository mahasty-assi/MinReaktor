import React from 'react';
import '../styles/Info.css';
import GifPlayer from 'react-gif-player';

import Cov from '../images/Achievements/covalBond.gif';
import Ion from '../images/Achievements/ionicBond.gif';
import Mtl from '../images/Achievements/metallicBond.gif';
import MtlGroup from '../images/Achievements/allmetals.png';
import nonMtlGroup from '../images/Achievements/allnonmetals.png';
import Alkali from '../images/Achievements/alkali 2.png';
import Halogen from '../images/Achievements/halogen 2.png';
import Edel from '../images/Achievements/noble.png';
import test from '../images/testimage.gif';



class Info extends  React.Component{

    showAchInfo(){
        let type = this.props.showAch;
        let img;
        let desc;
        var animated = false;

        if(type === "Kovalent"){
            animated = true;
            img = Cov;
            desc = "Du har oppdaget kovalente bindinger! En kovalent binding, også kalt elektronparbinding, beskriver når atomer deler elektroner, i stedet for å ta eller gi. I bildet ser vi at hvert atom mangler ett elektron i skallet sitt for å kunne oppfylle deres ønske om å ha et fullt ytre skall. Kan du tenke deg hvilke atomer heller former elektronparbindinger i steder for ioniske?"
        }
        if (type === "Ione") {
            animated = true;
            img = Ion;
            desc = "Du har oppdaget en ionebinding! Under ionebindinger er det ofte slik at et atom enten vil gi fra seg eller få tak i elektroner for å kunne oppfylle 8-regelen. I bildet kan vi se ett atom som vil gi fra seg et elektron, og en som vil ta imot. Mange atomer ønsker å etterlikne edle gasser. Ser du et mønster for hvilke type atomer som oftest former ionebindinger?"
        }
        if(type === "MetBond"){
            animated = true;
            img = Mtl;
            desc = "Du har oppdaget en metallbinding! Metaller er ofte satt sammen av metall-elementer som deler \"frie\" elektroner. Elektroene i en metallbinding flyter mellom protoner som ofte strukturerer seg i et repeptetivt mønster. I bildet kan vi se at når metall-atomer former metall-bånd, så setter de seg sammen i et mønster, og elektronene flyr rundt for å bli delt av atomene. "
        }
        if(type === "Metall"){
            img = MtlGroup;
            desc = "Du har satt sammen en kombinasjon av metaller! Tenk på hva du typisk ser for deg når noen sier metall. Hvilke ord tenker du på? Metall-gruppen har veldig spesifikke egenskaper som gjør at elementene i gruppen blir brukt til mye forskjellig."
        }
        if (type === "IkkeMetall") {
            img = nonMtlGroup;
            desc = "Du har satt sammen en kombinasjon av ikke-metaller! Ikke-metaller er en generell betegnelse på de elementene i periodesystemet som ikke har egenskapene til metaller. De finnes ofte i formen av gass, krystaller, eller andre faste former."
        }
        if(type === "Alkali"){
            img = Alkali;
            desc = "Du har gruppert sammen Alkalimetaller! Alkalimetaller er en gruppe av metaller har atomer med ett elektron i ytterste skall, og den vil de ofte bli kvitt.  Kan du tenke deg hvorfor et atom vil gi fra seg elektroner? "
        }
        if(type === "Halogen"){
            img = Halogen;
            desc = "Du har gruppert sammen Halogener! I halogen-gruppen finnes elementet Fluor, som har den høyeste mengden av noe som heter elektronegativitet. Elektronegativitet beskriver et atoms egenskap til å trekke til seg elektroner. Kan du da tenke deg hvorfor Halogenene er så utrolig reaktive?"
        }
        if (type === "Edel") {
            img = Edel;
            desc = "Du har gruppert sammen edelgasser! Edelgassene har fulle ytre skall, og er dermed ikke reaktive med andre stoffer under vanlige forhold. Tror du noen edegasser kan reagere?  "
        }


        return(
            <div className={"achRow"}>
                <button className={"closeButton"} onClick={this.clear}>Lukk</button>
                <div className={"achColumn"}>
                    <img className={"achImg"} src={img} alt={""} />
                </div>
                <div className={"achColumn"}>
                    <p>{type}</p>
                    <p>{desc}</p>
                </div>
            </div>
        );
    };

    clear = () => {
        this.props.changeAch(this.props.showAch);
    };

    showEleInfo(){
       return(
           <div className={"infoRow"}>
               <div className={"infoColumn"}>
                   <img className={"imgSize"} src={this.props.image}/>
               </div>
               <div className={"infoCenterColumn"}>
                   <p>{this.props.eleName}</p>
                   <p>{this.props.description}</p>
                   <p>Gruppe: {this.props.group}</p>
                   <p>Type: {this.props.metal === 1 ? "Metall" : "Ikke-Metall" }</p>
               </div>
               <div className={"infoColumn"}>
                   <img className={"imgSize"} src={this.props.atom} alt={""} />

               </div>
           </div>
       );
    }

    render(){
        return(
            <div className={"infoContainer"} >
                {this.props.showAch !== "" ? this.showAchInfo() : this.showEleInfo() }
            </div>
        );
    }
}

export default Info;