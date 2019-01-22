import React from 'react';

const Edu2Front = (props) => {
    return (
        <div>
            <p>January '12 - December '12 || 1 year</p>
            <hr></hr>
            <h3>Honours Degree (B.Sc. Hons.) || Physiological Sciences</h3>
            <p>A higher education degree specialising in the major aspects of human physiology, </p>
            <p>with a thesis focusing on skeletal muscle's functional capacity after fatigue-injury.</p>
            <hr></hr>
            <p>Stellenbosch University</p>
            <button className="bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked" onClick={props.onClick}>flip card</button>
        </div>
    );
}

const Edu2Back = (props) => {
    return (
        <div>
            <p>Thesis title:</p>
            <p>“The Effect of Plyometric Jumping Activity on Muscle Function in Healthy Males.”</p>
            <hr></hr>
            <p>Healthy, male volunteers were recruited to participate in a muscle-damaging plyometric jumping intervention. Muscle functional capacity was evaluated before and after intervention with an isometric force-testing chair, and blood markers of muscle damage were measured. Plyometric jumping decreased muscle force output, which was correlated with elevated levels of circulating muscle damage markers in the blood.</p>
            <hr></hr>
            <p>Supervisor: </p>
            <p>Prof KH Myburgh</p>
            <button className="bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked" onClick={props.onClick}>flip card</button>
        </div>
    );
}

class Edu2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFront: true,
        }
        this.handleFrontClick = this.handleFrontClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    };

    handleFrontClick = () => {
        this.setState({showFront: false})
    }

    handleBackClick = () => {
        this.setState({showFront: true})
    }

    render() {
        const showFront = this.state.showFront;
        let sideToShow;

        if(showFront) {
            sideToShow = <Edu2Front onClick={this.handleFrontClick} />
        } else {
            sideToShow = <Edu2Back onClick={this.handleBackClick} />
        }

        return (
            <div id='edu2' className='tc dib br1 pa3 ma2 bw2 shadow-5 w-75'>
                {sideToShow}
            </div>
        )
    }
}

export default Edu2;