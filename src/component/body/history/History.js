import { Component } from "react";
import { connect } from "react-redux";
import { userHistory } from "../../../redux/actionCreators";
import LoadUserHistory from "./LoadUserHistory";

const mapStateToProps = state => {
    return {
        token: state.token,
        userId: state.userId,
        LoaduserHistory: state.userHistory,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userHistory: (token, userId) => dispatch(userHistory(token, userId)),
    }
}

class History extends Component {

    componentDidMount() {
        this.props.userHistory(this.props.token, this.props.userId);
    }

    render() {
        let userHistory = null;
        if (this.props.LoaduserHistory) {
            userHistory = this.props.LoaduserHistory.map(item => {
                return (
                    <LoadUserHistory
                        key={item.id}
                        history={item} />
                )
            }

            )
        }
        document.title = "History";
        return (
            <div>
                {userHistory ? userHistory : <p>No Booking history yet!!</p>}
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(History);