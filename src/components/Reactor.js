import React from 'react';
import '../styles/Reactor.css';

import Metal from '../images/Achievements/metallic.png';
import IonicBond from '../images/Achievements/ionic_new.png';
import CovalBond from '../images/Achievements/covalent.png';
import Alkali from '../images/Achievements/Alkali.png';
import Edel from '../images/Achievements/Edel.png';
import Halogen from '../images/Achievements/Halogen.png';
import MetalBond from '../images/Achievements/Metal.png';
import IkkeMetal from '../images/Achievements/NonMetal.png';
import NaCl from '../images/Examples/Sodium ex.jpg';
import Water from '../images/Examples/Water_molecule.png';
import HCl from '../images/Examples/Hydrogen-chloride.png';
import COtwo from '../images/Examples/Carbon-dioxide.png';
import NtwoO from '../images/Examples/Nitrous_oxide_sample.jpg';
import CaCltwo from '../images/Examples/Calcium_chloride.jpg';
import Limestone from '../images/Examples/limestone.jpg';
import MgCl from '../images/Examples/Magnesium chloride.jpg';
import MgO from '../images/Examples/Magnesium_oxide.jpg';
import NaFl from '../images/Examples/Sodium_fluoride_tablets.jpg';
import LiCO from '../images/Examples/lithium_carbonate.jpg';
import Alum from '../images/Examples/Aluminum_Metal.jpg';
import Mag from '../images/Examples/800px-Magnesium-2.jpg';
import Lit from '../images/Examples/LithiumPellets.jpg';
import Nat from '../images/Examples/Natrium.jpg';
import Kal from '../images/Examples/Kalium.jpg';


class Reactor extends React.Component{

    constructor(){
        super();

        this.state= {
            currentReactionType:{
                name: "",
                desc: "",
                img: null
            },
            currentReaction: "",
            reactions: [
                {
                    name: "Oksygengass",
                    elements: ["Oksygen","Oksygen"],
                    img: null
                },
                {
                    name: "Hydrogengass",
                    elements: ["Hydrogen","Hydrogen"],
                    img: null
                },
                {
                    name: "Vann",
                    elements: ["Hydrogen","Hydrogen","Oksygen"],
                    img: Water
                },
                {
                    name: "HydrogenKlorid", //elektronpar
                    elements: ["Hydrogen","Klor"],
                    img: HCl
                },
                {
                    name: "Karbondioksid",//elektronpar
                    elements: ["Karbon","Oksygen","Oksygen"],
                    img: COtwo
                },
                {
                    name: "Nitrogenoksid",//koval
                    elements: ["Nitrogen","Nitrogen","Oksygen"],
                    img: NtwoO
                },
                {
                    name: "KalsiumKlorid",//ione
                    elements: ["Kalsium","Klor","Klor"],
                    img: CaCltwo
                },
                {
                    name: "Kalk", //ione
                    elements: ["Kalsium","Oksygen"],
                    img: Limestone
                },
                {
                    name: "Salt", //ione
                    elements: ["Natrium","Klor"],
                    img: NaCl
                },
                {
                    name: "MagnesiumKlorid", //ione
                    elements: ["Magnesium","Klor","Klor"],
                    img: MgCl
                },
                {
                    name: "MagnesiumOksid", //ione
                    elements: ["Magnesium","Oksygen"],
                    img: MgO
                },
                {
                    name: "NatriumFluorid",//ione
                    elements: ["Natrium","Fluor"],
                    img: NaFl
                },
                {
                    name: "LitiumKarbonat",//ione
                    elements: ["Litium","Karbon","Oksygen"],
                    img: LiCO
                },
                {
                    name: "LitiumKlorid",//koval
                    elements: ["Litium","Klor"],
                    img: null
                },
                {
                    name: "Aluminium",//metal
                    elements: ["Aluminium","Aluminium","Aluminium"],
                    img: Alum
                },
                {
                    name: "Magnesium",//metal
                    elements: ["Magnesium","Magnesium","Magnesium"],
                    img: Mag
                },
                {
                    name: "Litium",//metal
                    elements: ["Litium","Litium","Litium"],
                    img: Lit
                },
                {
                    name: "Natrium",//metal
                    elements: ["Natrium","Natrium","Natrium"],
                    img: Nat
                },
                {
                    name: "Kalium",//metal
                    elements: ["Kalium","Kalium","Kalium"],
                    img: Kal
                },
                {
                    name: "Kalsium",//metal
                    elements: ["Kalsium","Kalsium","Kalsium"],
                    img: null
                },
                {
                    name: "Beryllium",//metal
                    elements: ["Beryllium","Beryllium","Beryllium"],
                    img: null
                },

            ]

        };

        this.activated = this.activated.bind(this);
        this.checkGroupsAndMetals = this.checkGroupsAndMetals.bind(this);
        this.checkBinding = this.checkBinding.bind(this);
        this.activated = this.activated.bind(this);
        this.compareSets = this.compareSets.bind(this);
        this.clear = this.clear.bind(this);
        this.buttons = this.buttons.bind(this);
        this.isSame = this.isSame.bind(this);
    }

    checkGroupsAndMetals(){
        let tmpGr = this.props.reactants.map(e => {return e.grouping});
        let tmpMet = this.props.reactants.map(e => {return e.metal});
        let tmpNames = this.props.reactants.map(e => {return e.name});
        let curReaction = "";
        let curReactionType = "";
        let curDesc = "";
        let curImg = null;
        let tmpAch, achName;

        if(tmpMet[0]===1 && tmpMet[1]===1 && tmpMet[2]===1) {
            tmpAch = Metal;
            achName = "Metal";
            curReaction = "Metaller";
            curReactionType="Metaller-gruppering";
            curDesc="Elementene som finnes i metall-gruppa har egenskaper som; høy smeltetemperatur, et skinnende utseende, og flinke til å lede strøm. Metaller er en gruppering av elementer basert på hvordan atomene i elementet er satt sammen. Metaller er ofte masse atomer fra gruppen som er tett pakket sammen.";
        }
        if(tmpMet[0]===2 && tmpMet[1]===2 && tmpMet[2]===2) {
            tmpAch = IkkeMetal;
            achName = "IkkeMetal";
            curReaction = "Ikke-metaller";
            curReactionType="ikke-Metaller-gruppering";
            curDesc="Ikke-metaller beskriver den delen av periodesystemet som enten er gasser eller ikke er faste nok, eller kan lede strøm, like godt som metaller. Her finner man som oftest atomer i krystallformer eller frittflytende rundt i gassform";
        }
        if(tmpGr[0]==="Alkalimetall" && tmpGr[1]==="Alkalimetall" && tmpGr[2]==="Alkalimetall" && this.isSame(tmpNames)){
            curReaction = "Alkali-gruppen";
            curReactionType="Alkali-gruppering";
            curDesc="Alkalimetallene er den første gruppen i periodesystemet og beskriver atomene som har ett elektron i sitt \"ytterste\" skall. De er svært reaktive og vil gjerne gi fra seg sitt elektron, så de kan nøye seg med at deres forrige skall er fullstendig."
            tmpAch = Alkali;
            achName = "Alkali";
        }
        if(tmpGr[0]==="Halogen" && tmpGr[1]==="Halogen" && this.isSame(tmpNames) && tmpGr.length===2 ){
            tmpAch = Halogen;
            achName = "Halogen";
            curReaction = "Halogen-gruppen";
            curReactionType="Halogen-gruppering";
            curDesc="Halogenene er den 17. gruppen i periodesystemet, og som Alkalimetallene er de svært reaktive, men ønsker heller å få tak i elektroner for å fullføre sitt ytterste skall. Deres ytterste skall har vanligvis plass til ett elektron til for å få 8";
        }
        if(tmpGr[0]==="Edelgass" && tmpGr[1]==="Edelgass" && tmpGr[2]==="Edelgass" && this.isSame(tmpNames)){
            tmpAch = Edel;
            achName = "Edel";
            curReaction = "Edelgass-gruppen";
            curReactionType="Edelgass-gruppering";
            curDesc="Edelgassene er den 18. gruppen i periodesystemet og er veldig lite reaktive. De har komplette ytre skall og er ikke-metaller.";
        }

        let check = this.checkBinding();
        if(check != null){
            if(check[1]<5){
                curReactionType="Kovalent ";
                curDesc="I en elektronparbinding, eller en kovalent binding, deler man elektroner. I et sånnt tilfelle vil ingen av atomene gi fra seg elektroner, men de ønskjer å ta imot. Dette er en vanlig binding mellom gasser og ikke-metaller.";
                tmpAch = CovalBond;
                achName = "CovalBond";
            }else if(check[1]>5 && check[1]<13){
                curReactionType="Ione-";
                curDesc="I en ionebinding blir hvert atom tiltrukket av hverandre etter å ha gitt eller fått elektroner. Det atomet som TAR elektroner blir negativt ladd, og det som GIR blir positivt ladd. Som en magnet, blir pluss og minus tiltrukket av hverandre, og slik holder mokelylet seg sammen";
                tmpAch = IonicBond;
                achName = "IonicBond"
            }else{
                curReactionType="Metall-";
                curDesc="I en metallbinding deler alle atomer på elektronene sine, så elektronene flyter i en sky mellom atomkjernene til metallet. Alle rene metall-elementer har metallbindinger, som gir dem spesifikke egenskaper, som f.eks at de kan lede strøm og kan myknes til å formes slik man vil, men kan likevel holde seg sterke";
                tmpAch = MetalBond;
                achName = "MetalBond";
            }
            curImg = check[2];
            this.props.setStatus(tmpAch, achName);
            this.setState({currentReaction: check[0], currentReactionType: {name: curReactionType, desc:curDesc, img: curImg}});
        } else if(curReaction !== ""){
            this.props.setStatus(tmpAch, achName);
            this.setState({currentReaction: curReaction, currentReactionType: {name: curReactionType, desc:curDesc}});
        } else{
            this.props.setStatus(tmpAch, achName);
            this.setState({currentReaction: curReaction, currentReactionType: {name: "ikke en fullstendig ", desc:"Mangler du noen atomer?"}});
        }

    }

    checkBinding(){
        let tmp = this.props.reactants.map(e => {return e.name});
        let reactions = this.state.reactions.map(r => {return r.elements});
        let names = this.state.reactions.map(r => {return r.name});
        let image = this.state.reactions.map( r => {return r.img});
        for(let i=0; i<reactions.length; i++){
            let found = this.compareSets(tmp, reactions[i]);
            if(found){
                return [names[i], i, image[i]];
            }
        }
        return null;
    }

    test = () =>{
        if(this.props.notEmpty !== ""){
            this.props.clearCurrent();
        }
    };

    clear(){
        this.setState({currentReaction: "", currentReactionType: {name: "", desc:"", img: null}});
        this.props.clearReactants();
    }

    activated(r){
        return (
            <div>
                {r.map(element =>(<img className={"reactorAtom"} src={element.img} /> ))}
            </div>
        );
    }

    compareSets(a1, a2) {
        if (a1.length !== a2.length) {
            return false;
        }
        else {
            let match = 0;
            let tmp = a2.slice();
            for(let i =0; i<a1.length; i++){
                for( let j=0; j<tmp.length; j++){
                    if(a1[i] === tmp[j]) {
                        tmp.splice(j,1);
                        match += 1;
                        break;
                    }
                }
            }
            return (match === a1.length);
        }
    }

    isSame(arr){

        let tmp = arr.filter(val => val !== arr[0]);
        if(tmp.length !== 0){
            return true;
        }
        return false;
    }

    buttons(){
        return(
            <div>
                <button className={"checkBtn"} onClick={this.checkGroupsAndMetals}>Sjekk reaksjon!</button>
                <button className={"trashBtn"} onClick={this.clear}>Tøm reaksjon</button>
            </div>
        );
    }

    render(){
        const r = this.props.reactants;
        return (
            <div className={"reactorArea"}>
                <div onMouseOver={this.test} className="reactorSection">
                    {this.props.message}
                    <div className={"atomDisplay"}>
                        { r.length > 0 ? this.activated(r): null }
                    </div>
                    <div className={"reactorRow"}>
                        <div className={"leftColumn"}>
                            <img className={"reactorImg"} src={this.state.currentReactionType.img} />
                        </div>
                        <div className={"middleColumn"}>
                            { this.state.currentReaction !== "" ? <p>Du har laget: {this.state.currentReaction}</p> : null }
                        </div>
                        <div className={"rightColumn"}>
                        { this.state.currentReactionType.name !== "" ?
                        <div>
                            Dette er en {this.state.currentReactionType.name}binding. {this.state.currentReactionType.desc}
                        </div> : null}
                        </div>
                    </div>
                </div>
                { r.length > 0 ?
                    this.buttons() : null
                }
            </div>
        );
    }
}

export default Reactor;