import React, { Component } from 'react';
import './styles/App.css';
import Element from './components/Element';
import Info from './components/Info';
import Reactor from './components/Reactor';
import Unknown from './images/Achievements/Unknown.png';
import Blank from './images/Atom blocks/Blank.png';
import H from './images/Atom blocks/H.png';
import He from './images/Atom blocks/He.png';
import Li from './images/Atom blocks/Li.png';
import Be from './images/Atom blocks/Be.png';
import B from './images/Atom blocks/B.png';
import C from './images/Atom blocks/C.png';
import N from './images/Atom blocks/N.png';
import O from './images/Atom blocks/O.png';
import F from './images/Atom blocks/F.png';
import Ne from './images/Atom blocks/Ne.png';
import Na from './images/Atom blocks/Na.png';
import Mg from './images/Atom blocks/Mg.png';
import Al from './images/Atom blocks/Al.png';
import Si from './images/Atom blocks/Si.png';
import P from './images/Atom blocks/P.png';
import S from './images/Atom blocks/S.png';
import Cl from './images/Atom blocks/Cl.png';
import Ar from './images/Atom blocks/Ar.png';
import K from './images/Atom blocks/K.png';
import Ca from './images/Atom blocks/Ca.png';
import HEx from './images/Examples/Hydrogen gas ex.jpg';
import HeEx from './images/Examples/Helium ex.jpg';
import LiEx from './images/Examples/Lithium ex.jpg';
import BeEx from './images/Examples/Beryllium ex.jpeg';
import BEx from './images/Examples/Bor ex.jpg';
import CEx from './images/Examples/Carbon ex.png';
import NEx from './images/Examples/Nitrogen ex.jpg';
import OEx from './images/Examples/Oxygen ex.jpeg';
import FEx from './images/Examples/Fluorine ex.jpg';
import NeEx from './images/Examples/Neon ex.jpg';
import NaEx from './images/Examples/Sodium ex.jpg';
import MgEx from './images/Examples/Magnesium ex.jpg';
import AlEx from './images/Examples/Alimunium ex.jpeg';
import SiEx from './images/Examples/Silicone ex.jpg';
import PEx from './images/Examples/Phosphorus ex.jpg';
import SEx from './images/Examples/Sulphur ex.jpg';
import ClEx from './images/Examples/Chlorine ex.jpg';
import ArEx from './images/Examples/Argon ex.jpeg';
import KEx from './images/Examples/Potassium ex.jpg';
import CaEx from './images/Examples/Calcium ex.jpg';
import atomAl from './images/NewAtoms/alumgif.gif';
import atomAr from './images/NewAtoms/argongif.gif';
import atomBe from './images/NewAtoms/beryllgif.gif';
import atomB from './images/NewAtoms/borongif.gif';
import atomF from './images/NewAtoms/fluorgif.gif';
import atomP from './images/NewAtoms/phosphorgif.gif';
import atomHe from './images/NewAtoms/heliumgif.gif';
import atomH from './images/NewAtoms/hydrogengif.gif';
import atomK from './images/NewAtoms/potassgif.gif';
import atomCa from './images/NewAtoms/calciumgif.gif';
import atomCl from './images/NewAtoms/chlorinegif.gif';
import atomLi from './images/NewAtoms/lithiumgif.gif';
import atomMg from './images/NewAtoms/magnesgif.gif';
import atomNa from './images/NewAtoms/sodium gif.gif';
import atomNe from './images/NewAtoms/neongif.gif';
import atomO from './images/NewAtoms/oxygengif.gif';
import atomSi from './images/NewAtoms/silicongif.gif';
import atomS from './images/NewAtoms/sulphurgif.gif';
import atomC from './images/NewAtoms/carbongif.gif';
import atomN from './images/NewAtoms/nitrogif.gif';
import Achievement from "./components/Achievement";


class App extends Component {
    constructor(){
        super();
        this.state = {
            curName: "",
            curImg: null,
            curDesc: "",
            curAtom: null,
            curGroup: "",
            curMet: 0,
            showInfo: false,
            showAchInfo: "",
            tmpName: "",
            tmpImg: null,
            tmpGroup: "",
            tmpMetal: 0,
            reactants: [],
            message: "Dra og slipp elementer inn i reaksjonssonen!",
            achievements: {
                IkkeMetal: Unknown,
                Metal: Unknown,
                IonicBond: Unknown,
                MetalBond: Unknown,
                CovalBond: Unknown,
                Alkali: Unknown,
                Halogen: Unknown,
                Edel: Unknown
            }
        };
        this.addForReaction = this.addForReaction.bind(this);

    }

    setCurrent = (eleName, eleImg, elegr, elemet) =>{
        this.setState({tmpName: eleName, tmpImg: eleImg, tmpGroup: elegr, tmpMetal: elemet});
    };

    showInfoBox = (dataFromChild, curName, curImg, curDesc, curAtm, curGr, curM) =>{
        if(curName != null) {
            this.setState({showInfo: dataFromChild, curName: curName, curImg: curImg, curDesc: curDesc, curAtom: curAtm, curGroup:curGr, curMet:curM});
        }
    };

    showAchievementInfo = (type) => {
        if(this.state.showAchInfo !== ""){
            console.log("negate");
            this.setState({showAchInfo: ""});
        }else {
            console.log(type);
            this.setState({showAchInfo: type});
            console.log("clicked!");
        }
    };

    clearCurrent = () => {
        this.addForReaction();
        this.setState({tmpName : ""});
    };

    emptyReactants = () => {
        this.setState({reactants: []});
    };

    addForReaction(){
        if(this.state.reactants.length > 2) {
            this.setState({message:"For mange atomer i reaktoren!"});
            this.emptyReactants();

            setTimeout(() => {
                this.setState({ message: "Dra og slipp elementer inn i reaksjonssonen!" });
            }, 2000);
        } else {
            let item = {
                name:this.state.tmpName,
                img: this.state.tmpImg,
                grouping: this.state.tmpGroup,
                metal: this.state.tmpMetal
            };
            this.setState({reactants:[...this.state.reactants, item]});
        }
    }

    setReaction = (isA,isH,isN,isM,isC,isI,isMet,isNMet) => {
        if(isA !== null){
            this.setState({isAlkaline: isA});
        }
        if (isH !== null ){
            this.setState({isHalogen: isH});
        }
        if (isN !== null){
            this.setState({isNoble: isN});
        }
        if (isM !== null){
            this.setState({isMetalBond: isM});
        }
        if (isI !== null){
            this.setState({isIonic: isI});
        }
        if (isC !== null){
            this.setState({isCovalent: isC});
        }
        if (isMet !== null){
            this.setState({isMetal: isMet});
        }
        if (isNMet !== null){
            this.setState({isNotMetal: isNMet});
        }
    };

    setStatus = (ach, name) => {
        var achievements = this.state.achievements;
        achievements[name] = ach;
        this.setState({achievements: achievements});
    };

    render() {
        const show = this.state.showInfo;
        const ach = this.state.showAchInfo;
        return (
          <div className="App">
              <div className={"logo"} >Min Reaktor</div>
              <div className={"Row"}>
                  <div className={"Column"}>
                      <div className={"textContainer"}>Grupperinger</div>
                      <Achievement image={this.state.achievements.Metal} showAchInfo={this.showAchievementInfo} type={"Metall"}/>
                      <Achievement image={this.state.achievements.IkkeMetal} showAchInfo={this.showAchievementInfo} type={"IkkeMetall"}/>
                      <Achievement image={this.state.achievements.Alkali} showAchInfo={this.showAchievementInfo} type={"Alkali"}/>
                      <Achievement image={this.state.achievements.Halogen} showAchInfo={this.showAchievementInfo} type={"Halogen"}/>
                      <Achievement image={this.state.achievements.Edel} showAchInfo={this.showAchievementInfo} type={"Edel"}/>
                  </div>
                  <div className={"CenterColumn"}>
                      <div className={"textContainer"}>Trykk på et grunnstoff for å se informasjon om den!</div>
                      <div className={"periodicTableContainer"}>
                          <Element eleName={"Hydrogen"} eleImage={H} eleDesc={"Hydrogen er et av de tre første elementene som ble skapt under Big Bang. Man finner hydrogen i kjernen av sola, men også i vannet på vår egen planet som HydrogenOksid(H2O). I sin reneste form er hydrogengass utrolig ekspolsivt, og inneholder to hydrogenatomer. Før helium ble hydrogengass brukt for å lette luftskip, men det sluttet man med etter den historiske eksplosjonen av Hindenburg skipet."}
                                   example={HEx} atom={atomH} groups={"Alkalimetall"} metal={2}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleImage={Blank} showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleImage={Blank} showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleImage={Blank} showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleImage={Blank} showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleImage={Blank} showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleImage={Blank} showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Helium"} eleImage={He} eleDesc={"Helium kommer fra navnet til den greske solguden Helios, som passer, siden helium er det som blir skapt i kjernen av sola. Helium er et av de tre første elementene skapt under Big Bang, og er en edelgass med komplett ytre skall. i væskeform kan helium bli brukt som et kjølemiddel, men brukes også i ballonger og luftskip som et tryggere alternativ til hydrogengass. Gassen har en mindre tetthet enn luft, og hvis man puster det inn blir stemmen vår lys og pipete siden bølgene fra stemmen vår går gjennom færre atomer og kommer seg raskere ut"}
                                   example={HeEx} atom={atomHe} groups={"Edelgass"} metal={2}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Litium"} eleImage={Li} eleDesc={"Sammen med Hydrogen og Helium er Litium et av de første elementene skapt i universet. I dagens samfunn blir litium brukt for en del, mest kjent i små batterier for laptopper, kameraer og klokker, men blir også brukt med andre metaller for å lage fly. Historisk sett har litiumkarbonat(Li2CO3) brukt som medisin for å roe ned humør hos folk med mentale lidelser. Hvis man brenner noe som inneholder mye litium får man en sterk rosa flamme"}
                                   example={LiEx} atom={atomLi} groups={"Alkalimetall"} metal={1}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Beryllium"} eleImage={Be} eleDesc={"Beryllium er et giftig metall for mennesker, og ble før brukt i lamper, men laging av sånne lamper ble stoppet når arbeidere som brukte dem ble syke. Metallet er lett og sterkt, og blir derfor brukt til å lage flyveutstyr som fly og raketter, siden det kan tåle varme veldig godt. Beryllium kan man ikke like lett finne ute i verdensrommet, siden de blir laget under en supernova, altså når en massiv stjerne eksploderer."}
                                   example={BeEx} atom={atomBe} groups={"Jord Alkalimetall"} metal={1}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Bor"} eleImage={B} eleDesc={"Bor er kanskje best kjent for saltet boraks, noe som blir brukt for å lage slim, men også i rengjøringsmiddel og som et middel for å roe ned flammer. Boraks har blitt mer og mer popularisert ved at trenden for å lage slim bruker øyedråpemiddel for å holde sammen de andre kjemikaliene i slimet. Man kan sette sammen bor med andre elementer for å lage harde krystaller og salter, og hvis man brenner saltet får den en sterk grønn farge."}
                                   example={BEx} atom={atomB} groups={"Metalloid"} metal={1}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Karbon"} eleImage={C} eleDesc={"Har på jorda er karbon kanskje det viktigste elementet for mennesker. Fra flere år tilbake da det ble brukt for å gjøre om jern til sterk stål, men blir også brukt til å lage bomull og plastikk. Karbon kommer i forskjellige former, basert på hvordan atomene setter seg sammen, så karbon kan se ut som en blokk med grafitt, men også som vakre diamantkrystaller. Karbondioksid(CO2) er blant annet noe vi puster ut etter å ha pustet inn luft med lungene våre"}
                                   example={CEx} atom={atomC} groups={"Andre Ikke-Metaller"} metal={2}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Nitrogen"} eleImage={N} eleDesc={"Vanligvis finner man nitrogen i gassform, siden det er 78% av luften vi puster inn, og er et veldig viktig element for planters velvære. Nitrogen og oksygen satt sammen(N2O) gir lattergass, som gjør at pasienter som for eksempel skal føde føler mindre smerte. Elementet kan også være i væskeform, men da må temperaturen være -196 grader, og blir brukt for å holde visse ting veldig veldig kjølig, som for eksempel organer som skal doneres. "}
                                   example={NEx} atom={atomN} groups={"Andre Ikke-Metaller"} metal={2}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Oksygen"} eleImage={O} eleDesc={"Oksygen er et livsviktig element for mennesker og levende skapningers historie. Det man kaller \"oksidering\" er når oksygen reagerer med andre elementer og bryter dem ned, eller skaper nye reaksjoner. Siden man ikke kan se eller lukte oksygengass(O2), så tenker men ikke over at det er det som er grunnen til at mye mat blir ødelagt hvis man legger det ute i lufta. Et voksent menneske har sånn ca. 60% vann i kroppen sin, så ikke rart man finner mye oksygen i kroppen, og omtrent i hver eneste celle."}
                                   example={OEx} atom={atomO} groups={"Andre Ikke-Metaller"} metal={2}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Fluor"} eleImage={F} eleDesc={"Fluor er et av de mest reaktive og farlige elementene i periodesystemet. Gassen er dødelig å puste inn, og strømmer av fluor kan sette fyr på det meste. Likevel finner man det rundt oss i vårt daglige liv, som en mye tryggere versjon: Fluorid. Fluorid blir i noen land lagt til i små mengder i vann for å styrke tenner, og natriumfluorid(NaF) blir brukt i tannpasta. I kjøkkenet kan man noen ganger finne Teflon-kjeler eller stekepanner, der maten ikke setter seg fast i bunnen, og er en kjemisk forbindelse som inneholder fluorider."}
                                   example={FEx} atom={atomF} groups={"Halogen"} metal={2}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Neon"} eleImage={Ne} eleDesc={"Du har helt sikkert sett fantastiske lysshow i storbyer eller sett videoer fra Times Square og Las Vegas med store neonskilt i kraftige farger. Dette skyldes elementet neon!  Som nitrogen kan neon også bli brukt som et kjølemiddel hvis den er i væskeform, men da må temperaturen være -246 grader. Neon lyser når man har gassen i en tube og har en tråd som kan lede slektrisitet rundt tuben. Gassen brenner vanligvis en gul-oransje farge, men man kan få andre farger ved å blande neon med andre gasser i tuben eller farge tuben selv"}
                                   example={NeEx} atom={atomNe} groups={"Edelgass"} metal={2}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Natrium"} eleImage={Na} eleDesc={"Natrium er i hverdagen vår i form av salt(NaCl), enten det er i maten vår eller i havet når man drar på stranda. Salt består av natrium og klor, og man finner vanligvis natrium i kjemiske reaksjoner med andre elementer. I sin rene form er natrium et mykt sølv-liknende og lett-reakerende metall. Hvis man brenner noe som inneholder store mengder natrium får man en gul flamme, og derfor har tre og pellets, som er lett brennbare, en gul flamme. "}
                                   example={NaEx} atom={atomNa} groups={"Alkalimetall"} metal={1}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Magnesium"} eleImage={Mg} eleDesc={"Magnesium er ganske viktig for kroppen vår, og grønne planter inneholder mye av det. Mangel på magnesium i kroppen kan føre til alvorlige sykdommer, og f.eks har magnesiumoksid(MgO) blitt brukt for blant annet å balansere situasjoner i magen. Hvis man brenner magnesium får man en utrolig sterk, hvit flamme, og det er grunnen til at stoffet også blir brukt for fyrverkeri"}
                                   example={MgEx} atom={atomMg} groups={"Jordalkalimetaller"} metal={1}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Aluminium"} eleImage={Al} eleDesc={"Aluminium blir sett på som et av de mest brukbare metallene, metallet er lett, gjenbrukbart, varer lenge og lett å jobbe med. Aluminium skaper et hard, skinnende, beskttende lag når metallet kommer i kontakt med oksygen, i forhold til jern som ruster under samme omstendigheter. Dette gjør at elementet blir brukt på alt fra luftfarttøy til kjøkkenutstyr. Man finner vanligvis ikke aluminium i dets rene form i naturen, men heller blandet med andre metaller og halvmetaller.  "}
                                   example={AlEx} atom={atomAl} groups={"Posttransisjonsmetall"} metal={1}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Silisium"} eleImage={Si} eleDesc={"Hvis du noen gang har kastet ut en liten pose i den nye vesken eller skopakken din, har du kastet en pose med giftig silika(SiO2). Silisium er et stoff man finner mye av i naturen, ofte i form av sand, men stoffet blir også mye brukt til å lage plastgjenstander eller i brystimplantater.  Noen forskere mener silisium kan være et viktig stoff for skapelse av liv på andre planeter, slik karbon har vært viktig for oss mennesker."}
                                   example={SiEx} atom={atomSi} groups={""} metal={2}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Fosfor"} eleImage={P} eleDesc={"Fosfor kommer i to tilstander, en gul-hvit fast form og en rød pulver-form. De er de mest kjente, i hvert fall, og den gul-hvite tilstanden til fosfor gir fra seg svakt, hvitt lys når den kommer i kontakt med oksygen. Et av de første menneskene som oppdaget fosfor prøvde å lage de vises stain ved å destillere urin, og trodde han hadde lyktes når han kom fram til det glødende pulveret. I hverdagen kan man finne rød fosfor på siden av fyrstikkesker. "}
                                   example={PEx} atom={atomP} groups={"Andre Ikke-Metaller"} metal={2}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Svovel"} eleImage={S} eleDesc={"Svovel har en voldelig og vond historie, spesielt med tanke på at ganske mange dårlige hverdagslukter kommer fra at de inneholder noe svovel. Ikke bare med lukt, men svovel ble også brukt til å lage krutt, for første gang i Kina. Svovel har en gjenkjennelig gulfarge, men hvis man brenner det vil stoffet bli til en blodrød væske og flammen vil brenne blått."}
                                   example={SEx} atom={atomS} groups={"Andre Ikke-Metaller"} metal={2} showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Klor"} eleImage={Cl} eleDesc={"Badebasseng pleier å ha en veldig spesiell lukt som man kan kjenne igjen med en gang man er i nærheten av dem. Denne lukten kommer fra klor, som blir brukt som et desinfiserende middel i vann. Klor blir ikke bare brukt til å gjøre badevann rent, men i visse mengder kan klor også brukes for å rense drikkevann. Stoffet er ellers utrolig reaktivt og giftig i sin rene form, og gassen har en gul-grønn farge."}
                                   example={ClEx} atom={atomCl} groups={"Halogen"} metal={2}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Argon"} eleImage={Ar} eleDesc={"Argon, som neon, er en edel gass som blir brukt for industrielle mål. Det neon lyser oransje, lyser Argon blå-lilla."}
                                   example={ArEx} atom={atomAr} groups={"Edelgass"} metal={2}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Kalium"} eleImage={K} eleDesc={"Kalium er et veldig reaktivt alkalimetall som brenner lilla. Det er et vanlig skoleprosjekt å ta en klump av kalium og droppe det i vann for å se flammeefekktene den utløser. Reaksjonen som oppstår mellom vannet og kaliumet gir fra seg så mye energi at det begynner å brenne. Kalium kan man finne i forskjellige matprodukter, mest kjent er bananer og sjokolade. Stoffet likner mye på natrium og blir brukt ellers for å lage salter."}
                                   example={KEx} atom={atomK} groups={"Alkalimetall"} metal={1}  showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleName={"Kalsium"} eleImage={Ca} eleDesc={"Man tenker kanskje ikke på et metall når man tenker på kalsium, heller at foreldre ber deg om å drikke melk for å styrke skjelettet ditt og tennene dine. Dette er hovedsakelig fordi man ikke finner kalsium i sin helt rene form ute i naturen. Stoffet er ganske ustabilt og vil reagere med en gang den kommer i kontakt med luft, hvis man setter fyr på den vil den brenne oransje. Kalsium finner man mye i mat, og det er et viktig stoff for oppbygging av kroppen, men også et viktig stoff for oppbygging av bygninger. Kalk(CaO) har i flere år blitt brukt som et bindemiddel mellom murstein."}
                                   example={CaEx} atom={atomCa} groups={"Jord Alkalimetall"} metal={1} showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleImage={Blank} showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleImage={Blank} showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleImage={Blank} showInfo={this.showInfoBox} addCandidate={this.setCurrent}/> {/*Her kan du legge in knapp som viser periodesystemet i metall/ikke metall form*/}
                          <Element eleImage={Blank} showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleImage={Blank} showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                          <Element eleImage={Blank} showInfo={this.showInfoBox} addCandidate={this.setCurrent}/>
                      </div>
                  </div>
                  <div className={"Column"}>
                      <div className={"textContainer"}>Reaksjonstyper</div>
                      <Achievement image={this.state.achievements.CovalBond} showAchInfo={this.showAchievementInfo} type={"Kovalent"}/>
                      <Achievement image={this.state.achievements.IonicBond} showAchInfo={this.showAchievementInfo} type={"Ione"}/>
                      <Achievement image={this.state.achievements.MetalBond} showAchInfo={this.showAchievementInfo} type={"MetBond"}/>
                  </div>
              </div>
              {show || ach ?  <Info eleName={this.state.curName} image={this.state.curImg} description={this.state.curDesc} atom={this.state.curAtom} group={this.state.curGroup} metal={this.state.curMet} showAch={ach} changeAch={this.showAchievementInfo}/>
                  : <Reactor reactants={this.state.reactants} notEmpty={this.state.tmpName} clearCurrent={this.clearCurrent} clearReactants={this.emptyReactants} setStatus={this.setStatus} message={this.state.message}/>}
          </div>
        );
  }
}

export default App;
