import React from 'react';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';



class GeolocationApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPosition: null,
            userErrorMessage: ''
        }
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition((position) => {
            this.setState({ userPosition: position.coords.latitude })
        }, (errors) => {
            this.setState({ userErrorMessage: errors.message })
        });
    }
    renderContent() {
        if (!this.state.userPosition && !this.state.userErrorMessage) {
            return (
                <Spinner message='Please accept location request'/>
            )
        } else if (this.state.userPosition && !this.state.userErrorMessage) {
            return (
                <SeasonDisplay lat={this.state.userPosition}/>
            )
        } else if (!this.state.userPosition && this.state.userErrorMessage) {
            return (
                <div>

                    <p>Error: {this.state.userErrorMessage}</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default GeolocationApi;

