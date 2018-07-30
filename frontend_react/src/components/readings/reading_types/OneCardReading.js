import React from 'react';
import { connect } from 'react-redux';
import CardInfo from "../../cards/CardInfo";
import { createReading } from '../../../store/readings/actions';

class OneCardReading extends React.Component {

    state = {
        readingCards: [],
        clicked: false
    }
    

    handleCardPull = (e) => {

        const shuffledCards = this.props.cardList.sort(function() {return 0.5 - Math.random()})
        const card = [shuffledCards[0]]

        this.setState({
            readingCards: shuffledCards[0],
            clicked: true 
        })
        
        this.props.startReading(card, this.props.user)
    }

    render() {
        // console.log("propssss", this.state);
        
        return (
            <div>
                <h1>One Card Reading</h1>
               {this.state.clicked === true ? null : <div>
                    <button onClick={this.handleCardPull} >Reading </button>
                </div>}

                {this.state.clicked === true ? <CardInfo card={this.state.readingCards} /> : null }

            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("MSTP state", state.user.user);
    return ({
        cardList: [...state.cards.cardList],
        user: {...state.user.user}
    })
}

const mapDispatchToProps = (dispatch) => ({
    startReading: (readingCards, user) => {
        dispatch(createReading(readingCards, user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(OneCardReading);