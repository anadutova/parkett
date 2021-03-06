import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Logo from './lines.svg';
import styles from './Header.module.css';
import ParkettLogo from './ParkettWithText.svg';
import ListLink from './ListLink';
import { isAdmin, isEditor } from '../../utils/login';

class HeaderEdit extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
        this.changeOpen = this.changeOpen.bind(this);
    }

    changeOpen() {
        const { open } = this.state;
        this.setState({
            open: !(open),
        });
    }

    render() {
        const { open } = this.state;
        const {
            event, dj, band, danceCourse, teacher, dance, dancetype, member, users,
        } = this.props;
        if (!isEditor()) {
            return (<div>Nincs Szerkesztői jogod</div>);
        }
        return (
            <header className={`${styles.main} ${styles.editor} ${(open ? styles.open : '')}`}>
                <div className={styles.logoAndStrikes}>
                    <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
                        <img className={styles.mainLogo} src={ParkettLogo} alt="" />
                    </Link>
                    <div
                        onClick={this.changeOpen}
                        className={styles.more}
                        role="button"
                        onKeyDown={() => { }}
                        tabIndex={0}
                    >
                        <img src={Logo} alt="" />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.login}>
                        <ListLink to="/">Kezdőlap</ListLink>
                    </div>
                    <div className={styles.links}>
                        <ListLink to="/edit-events/" active={event}>Események</ListLink>
                        <ListLink to="/edit-dj/" active={dj}>DJ-k</ListLink>
                        <ListLink to="/edit-band/" active={band}>Zenekarok</ListLink>
                        <ListLink to="/edit-dance-course/" active={danceCourse}>Tanítások</ListLink>
                        <ListLink to="/edit-teacher/" active={teacher}>Tanárok</ListLink>
                        <ListLink to="/edit-dance/" active={dance}>Táncok</ListLink>
                        <ListLink to="/edit-dance-type/" active={dancetype}>Tánctípusok</ListLink>
                        <ListLink to="/edit-member/" active={member}>Tagok</ListLink>
                        {isAdmin() ? <ListLink to="/edit-users/" active={users}>Felhasználók</ListLink> : null}
                    </div>
                </div>
            </header>
        );
    }
}


HeaderEdit.propTypes = {
    event: PropTypes.bool,
    dj: PropTypes.bool,
    band: PropTypes.bool,
    teacher: PropTypes.bool,
    danceCourse: PropTypes.bool,
    dance: PropTypes.bool,
    dancetype: PropTypes.bool,
    member: PropTypes.bool,
    users: PropTypes.bool,
};

HeaderEdit.defaultProps = {
    event: false,
    dj: false,
    band: false,
    teacher: false,
    danceCourse: false,
    dance: false,
    dancetype: false,
    member: false,
    users: false,
};

export default HeaderEdit;
