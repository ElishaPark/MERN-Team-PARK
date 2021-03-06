import React from "react";
import InterestFeed from "../user_profile/interest_feed";

class GroupShow extends React.Component {
    componentDidMount() {
        this.props.fetchGroup(this.props.groupId)
    }

    render() {
        const sharingLink =
          this.props.currentUserId === this.props.group.owner ? (
            <div>
              <p>
                Invite other people to this group using the following link: 
                {`https://rebond.herokuapp.com/#/signup?group=${this.props.group.slug}`}
              </p>
            </div>
          ) : null;
        return (
            <div>
                {sharingLink}
                <InterestFeed interests={this.props.interests} />
            </div>
        )
    }
}

export default GroupShow;