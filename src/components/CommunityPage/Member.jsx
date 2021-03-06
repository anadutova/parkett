import React from 'react';
import PropTypes from 'prop-types';
import profDefault from './defaultProfile.jpg';
import styles from './Member.module.css';

function Member({
    image, position, description, name, onClick,
}) {
    return (
        <div
            className={styles.element}
            onClick={onClick}
            onKeyDown={() => { }}
            tabIndex={0}
            role="button"
        >
            <img src={image ? image : profDefault} alt="" />
            <div className={styles.desc}>
                <div>{position}</div>
                <br />
                <div>{description}</div>
            </div>
            <div className={styles.title}>
                <strong>{name}</strong>
            </div>
        </div>
    );
}

Member.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

Member.defaultProps = {
    image: profDefault,
    name: '',
    position: '',
    description: '',
};

export default Member;
