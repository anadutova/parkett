import React from 'react';
import styles from './Media.module.css';
import { fetchAll } from '../../utils/FetchFunctions';
import MediaAlbum from './MediaAlbum';
import SpotIcon from './spotIcon.svg';
import BssIcon from './video-camera.svg';
import texts from '../../utils/Descriptions';

class MediaComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [],
        };
    }

    componentDidMount() {
        this.fetchEvents();
    }

    fetchEvents = () => {
        this.fetchParties();
    }

    fetchParties = () => {
        fetchAll('parties').then((myJson) => {
            this.addEvents('P', myJson, this.selectParty);
        });
    }

    addEvents = (char, newEvents, onClick, article = false) => {
        const { events } = this.state;
        let filteredEvents = newEvents;
        filteredEvents = filteredEvents.map(original => ({
            ...original,
            onClick: () => onClick(original),
            complexId: `${char}${original.id}`,
            date: article ? original.published_at : original.start_date,
        }));
        let allEvents = events.concat(filteredEvents);
        allEvents = allEvents.sort((a, b) => {
            const aValue = new Date(a.date).valueOf();
            const bValue = new Date(b.date).valueOf();
            return bValue - aValue;
        });
        this.setState({ events: allEvents });
    }

    render() {
        const {
            events,
        } = this.state;
        return (
            <div className={styles.center}>
                <div className={styles.title}>{texts ? texts.media.pictures : 'Képek'}</div>
                <div className={styles.grid}>
                    {
                        events.map(event => (
                            <MediaAlbum
                                link={event.spot}
                                src={event.spot_cover}
                                name={event.title}
                                date={event.date}
                                icon={SpotIcon}
                            />
                        ))
                    }
                </div>
                <div className={styles.title}>{texts ? texts.media.videos : 'Videók'}</div>
                <div className={styles.grid}>
                    {
                        events.map(event => (
                            <MediaAlbum
                                link={event.bss}
                                src={event.bss_cover}
                                name={event.title}
                                date={event.date}
                                icon={BssIcon}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default MediaComponent;
