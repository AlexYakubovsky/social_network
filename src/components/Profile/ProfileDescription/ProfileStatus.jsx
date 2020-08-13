import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    activeEditMode() {
        this.setState({
            editMode:true
        })
    };

    deactiveEditMode() {
        this.setState({
            editMode:false
        })
    };


    render() {
        return (
            <>
                {!this.state.editMode ?
                    <div>
                        <span onClick={this.activeEditMode.bind(this)}>{this.props.status}</span>
                    </div> :
                    <div>
                        <input onBlur={this.deactiveEditMode.bind(this)} value={this.props.status} autoFocus={true}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;