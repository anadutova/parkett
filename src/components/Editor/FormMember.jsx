import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from '../../utils/FetchFunctions';
import styles from './Form.module.css';
import InputFormSimple from './InputFormSimple';
import InputFormTextArea from './InputFormTextarea';
import SubFormPoster from './SubFormPoster';
import DeleteButton from './DeleteButton';

const initialState = {
    name: undefined,
    email: undefined,
    position: undefined,
    description: undefined,
};

class FormMember extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1,
        };
    }

    componentDidMount() {
        const { selectedObject } = this.props;
        this.setState({
            ...initialState,
            ...selectedObject,
            photo: selectedObject.image,
        });
    }

    componentWillReceiveProps({ selectedObject }) {
        this.setState({
            ...initialState,
            ...selectedObject,
            photo: selectedObject.image,
        });
    }

    handleChange = (event) => {
        const { name } = event.target;
        if (event.target.value === 'null') {
            this.setState({ [name]: null });
            return;
        }
        this.setState({ [name]: event.target.value });
    }

    uploadChanges = () => {
        const { id } = this.state;
        if (id < 0) {
            this.addMember();
        } else {
            this.updateMember();
        }
    }

    addMember = () => {
        const { photo } = this.state;
        fetchPost('members', { ...this.state, image: photo }).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    updateMember = () => {
        const { photo } = this.state;
        fetchPut('members', { ...this.state, image: photo }).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }


    render() {
        const {
            selected, title, fetchFunction, deletable,
        } = this.props;
        const {
            id, name, email, position, description,
        } = this.state;
        const isNew = id < 0;
        return (
            <div className={styles.main}>
                {deletable ? <DeleteButton id={id} type="members" fetchFunction={fetchFunction} /> : null}
                <div className={styles.formgroup} hidden={selected !== title}>
                    {isNew ? 'Új Tag adatai:' : 'Tag adatai:'}
                    <InputFormSimple
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={name}
                        name="name"
                        example="DJ Eddy"
                        label="Név"
                    />
                    <InputFormSimple
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={email}
                        name="email"
                        example="www.example.com"
                        label="Email"
                    />
                    <InputFormSimple
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={position}
                        name="position"
                        example="tag"
                        label="Pozíció"
                    />
                    <InputFormTextArea
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={description}
                        name="description"
                        example="Csatlakoztam a körhöz"
                        label="Leírás"
                    />
                    <SubFormPoster
                        handleChange={this.handleChange}
                        {...this.state}
                    />
                    <div className={styles.formgroup}>
                        <button
                            onClick={this.uploadChanges}
                            type="submit"
                            className={styles.submit}
                        >
                            {isNew ? 'Tag hozzáadása' : 'Tag módosítása'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

FormMember.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string,
    title: PropTypes.string,
    fetchFunction: PropTypes.func.isRequired,
    deletable: PropTypes.bool,
};

FormMember.defaultProps = {
    selected: '',
    title: '',
    deletable: true,
};

export default FormMember;
