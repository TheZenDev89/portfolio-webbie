import React from 'react';

const Edu3Front = (props) => {
    return (
        <div>
            <p>January '08 - December '11 || 4 years</p>
            <hr></hr>
            <h3>Bachelors Degree (B.Sc.) || Sports & Exercise Sciences</h3>
            <p>A degree focused on the biological, biomechanical and physiological processes </p>
            <p>behind human sports and exercise.</p>
            <hr></hr>
            <p>Stellenbosch University</p>
            <button className="bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked" onClick={props.onClick}>flip card</button>
        </div>
    );
}

const Edu3Back = (props) => {
    return (
        <div>
            <p></p>
            <hr></hr>
            <p>Theory subjects included: Exercise Physiology, Sports Injuries, Biomechanics, Anatomy and Sport Psychology.</p>
            <p>The degree included a large practical element, through which I earned level 1 coaching qualifications for Field Hockey, Swimming, Tennis and a number of other sports.</p>
            <p>I also specialised in sports & exercise training for the disabled, which was both fascinating and rewarding.</p>
            <hr></hr>
            <p></p>
            <button className="bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked" onClick={props.onClick}>flip card</button>
        </div>
    );
}

class Edu3 extends React.Component {
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
            sideToShow = <Edu3Front onClick={this.handleFrontClick} />
        } else {
            sideToShow = <Edu3Back onClick={this.handleBackClick} />
        }

        return (
            <div id='edu3' className='tc dib br1 pa3 ma2 bw2 shadow-5 w-75'>
                {sideToShow}
            </div>
        )
    }
}

export default Edu3;