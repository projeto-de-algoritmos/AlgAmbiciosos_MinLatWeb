import React from "react";
import { Button, Form, Card, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Time from './Time';

export default class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            showTime: false
        }
    }

    render() {
        return (
            <Modal
                style={{ justifyContent: 'center' }}
                show={this.props.show}
                size="lg"
            >
                <Modal.Header><Modal.Title>Adicione uma nova tarefa</Modal.Title></Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={this.props.name}
                            onChange={this.props.handleChange}
                            style={styles.form}
                            />

                        <Form.Label>Tempo de execução (em horas)</Form.Label>
                        <Form.Control
                            type="number"
                            name="execTime"
                            value={this.props.execTime}
                            onChange={this.props.handleChange}
                            style={styles.form}
                        />
                        <Form.Label>Hora de entrega: {this.props.deadline.formatted12}</Form.Label>
                        <Time
                            show={this.state.showTime}
                            onHide={() => this.setState({ showTime: false })}
                            changeTime={this.props.changeTime}
                        />
                        <Button onClick={() => this.setState({ showTime: true })}
                            variant="light"
                            style={{ marginLeft: '10px' }}>
                            Mudar a Hora
                            <FontAwesomeIcon
                                icon={faClock}
                                style={{ color: 'grey', marginLeft: '10px' }}
                            />
                        </Button>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.addActivity}>Adcione Atividade</Button>
                    <Button variant="light" onClick={this.props.cancel}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const styles={
    form:{
        marginBottom: '10px'
    }
}
