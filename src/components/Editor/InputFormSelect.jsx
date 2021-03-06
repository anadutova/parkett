import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import Plus from './plus.svg';
import Minus from './minus.svg';

class InputFormSelect extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
        this.change = this.change.bind(this);
    }

    change() {
        const { open } = this.state;
        const { close, addNew } = this.props;
        if (open) close();
        else addNew();
        this.setState(state => ({ open: !state.open }));
    }

    render() {
        const {
            selectedForm, form, label, name, handleChange, value, options,
        } = this.props;
        const {
            open,
        } = this.state;

        if (!value) {
            return (
                <div className={styles.formgroup} hidden={selectedForm !== form}>
                    <strong>{label}</strong>
                    <select
                        id={name}
                        name={name}
                        onChange={handleChange}
                        className={styles.input}
                    >
                        <option default value />
                        {options}
                    </select>
                    <div
                        onClick={this.change}
                        onKeyDown={() => { }}
                        role="button"
                        tabIndex={0}
                    >
                        <img
                            alt=""
                            src={open ? Minus : Plus}
                            className={styles.plus}
                        />
                    </div>
                </div>
            );
        }

        return (
            <div className={styles.formgroup} hidden={selectedForm !== form}>
                <strong>{label}</strong>
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={styles.input}
                >
                    <option default value="null" />
                    {options}
                </select>
                <div
                    onClick={this.change}
                    onKeyDown={() => { }}
                    role="button"
                    tabIndex={0}
                >
                    <img
                        alt=""
                        src={open ? Minus : Plus}
                        className={styles.plus}
                    />
                </div>
            </div>
        );
    }
}

InputFormSelect.propTypes = {
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.number,
    close: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.element),
    addNew: PropTypes.func.isRequired,
};

InputFormSelect.defaultProps = {
    selectedForm: '',
    form: '',
    label: '',
    name: '',
    value: undefined,
    options: [],
};

export default InputFormSelect;
