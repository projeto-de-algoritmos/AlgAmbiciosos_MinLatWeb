import React from "react";
import {Modal, Button} from 'react-bootstrap';
import TimeKeeper from 'react-timekeeper';


export default class Time extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Modal
                style={{ justifyContent: 'center' }}
                show={this.props.show}
                size="sm"
            >
                <Modal.Body>
                <TimeKeeper class="aaa"
                    style={{ alignSelf:'center'}}
                    class="modal"
                    onChange={this.props.changeTime}
                    switchToMinuteOnHourSelect
                    onDoneClick={this.props.onHide}
                    />
                    </Modal.Body>
            </Modal>
        );
    }
}
