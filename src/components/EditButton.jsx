import React from 'react';
import PropTypes from 'prop-types';
import Edit from './pencil_white.svg';
import styles from './EditButton.module.css';
import { isEditor } from '../utils/login';


function editPage(location) {
    window.location = location;
}

const EditButton = ({ link }) => {
    if (isEditor()) {
        return (
        <button
            className={styles.button}
            onClick={() => editPage(link)}
            onKeyDown={() => { }}
            tabIndex={0}
            type="button"
        >
            <img src={Edit} alt="" />
        </button>
    );
    }
    return null;
};

EditButton.propTypes = {
    link: PropTypes.string,
};

EditButton.defaultProps = {
    link: '/edit-events',
};

export default EditButton;
