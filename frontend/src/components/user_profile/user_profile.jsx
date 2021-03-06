import React from 'react';
import InterestCreateFormContainer from "./interest_create_form_container";
import InterestFeed from "./interest_feed";

class UserProfile extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const { currentUser } = this.props
        if (!currentUser) return null

        return (
            <div className="col s12 l6">
                
                <h4 className="center">{currentUser.firstName} {currentUser.lastName}</h4>
                <h5 className="center">{currentUser.email}</h5>
                <br/>
                <InterestFeed currentUserId={currentUser._id} interests={currentUser.interests}/>
                <br />
                {currentUser.interests.length < 3 ? <InterestCreateFormContainer /> : null}
            </div>
        )
    }
}

export default UserProfile;