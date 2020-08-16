import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        userStatus: this.props.userStatus
    };

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactiveEditMode = () => {
        this.setState({
            editMode: false
        });

        this.props.updateStatus(this.state.userStatus)
    };

    onChangeStatus = e => {
        this.setState({
            userStatus: e.target.value
        })
    };

    render() {
        return (
            <>
                {!this.state.editMode ?
                    <div>
                        <span
                            onClick={this.activeEditMode}>{this.props.userStatus || 'Enter your status'}</span>
                    </div> :
                    <div>
                        <input onChange={this.onChangeStatus} onBlur={this.deactiveEditMode}
                               value={this.state.userStatus} autoFocus={true}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;