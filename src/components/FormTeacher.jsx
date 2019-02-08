import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from './FetchFunctions';
import styles from './Form.module.css';
import InputFormSimple from './InputFormSimple';

class FormTeacher extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1,
        };
    }

    componentWillReceiveProps({ selectedObject }) {
        this.setState({
            ...selectedObject,
        });
    }

    handleChange = (event) => {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    uploadChanges = () => {
        const { id } = this.state;
        if (id === -1) {
            this.addTeacher();
        } else {
            this.updateTeacher();
        }
    }

    addTeacher = () => {
        const { name, url } = this.state;
        const teacher = {
            name,
            url,
        };
        fetchPost('dance_teachers', teacher).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    updateTeacher = () => {
        const { id, name, url } = this.state;
        const teacher = {
            id,
            name,
            url,
        };
        fetchPut('dance_teachers', teacher, id).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    render() {
        const { selected, title } = this.props;
        const { id, name, url } = this.state;
        const isNew = id === -1;
        return (
            <div className={styles.main}>
                <div className={styles.formgroup} hidden={selected !== title}>
                    {isNew ? 'Új Tanár adatai:' : 'Tanár adatai:'}
                    <InputFormSimple
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={name}
                        name="name"
                        example="Pedrofon"
                        label="Név"
                    />
                    <InputFormSimple
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={url}
                        name="url"
                        example="www.example.com"
                        label="Weboldal"
                    />
                    <div className={styles.formgroup}>
                        <button
                            onClick={this.uploadChanges}
                            type="submit"
                            className={styles.submit}
                        >
                            {isNew ? 'Tanár hozzáadása' : 'Tanár módosítása'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

FormTeacher.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string,
    title: PropTypes.string,
    fetchFunction: PropTypes.func.isRequired,
};

FormTeacher.defaultProps = {
    selected: '',
    title: '',
};


export default FormTeacher;
