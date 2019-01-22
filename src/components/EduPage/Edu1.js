import React from 'react';

const Edu1Front = (props) => {
    return (
        <div>
            <p>January '14 - December '16 || 3 years</p>
            <hr></hr>
            <h3>Masters Degree (M.Sc.) || Physiological Sciences</h3>
            <p>Thesis-based degree specialising in skeletal muscle's fibrotic scar response to injury,</p>
            <p>and the role of Nitric Oxide in the post-injury healing process.</p>
            <hr></hr>
            <p>Stellenbosch University</p>
            <button className="bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked" onClick={props.onClick}>flip card</button>
        </div>
    );
}

const Edu1Back = (props) => {
    return (
        <div>
            <p>Thesis title:</p>
            <p>“Exogenous Nitric Oxide: A Beneficial Role in Skeletal Muscle Regeneration.”</p>
            <hr></hr>
            <p>A Nitric Oxide donating therapy, known as Molsidomine, was given to rodents after a skeletal muscle impact injury. Molsidomine treatment reduced the extent of fibrotic scar formation in regenerated muscle tissue, compared to Placebo-treated subjects. This is beneficial, in that scar tissue interferes with whole muscle function and is thus an unwanted by-product of muscle injury.</p>
            <p>Additionally, at the Indian Ocean Rim Muscle Conference, held in Stellenbosch in 2016, I was awarded best research visual presentation.</p>
            <hr></hr>
            <p>Supervisors: </p>
            <p>Prof KH Myburgh & Prof C Smith</p>
            <button className="bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked" onClick={props.onClick}>flip card</button>
        </div>
    );
}

class Edu1 extends React.Component {
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
            sideToShow = <Edu1Front onClick={this.handleFrontClick} />
        } else {
            sideToShow = <Edu1Back onClick={this.handleBackClick} />
        }

        return (
            <div id='edu1' className='tc dib br1 pa3 ma2 bw2 shadow-5 w-75'>
                {sideToShow}
            </div>
        )
    }
}

export default Edu1;