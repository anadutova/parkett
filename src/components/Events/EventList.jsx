import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import EditButton from '../EditButton';
import { fetchAll } from '../../utils/FetchFunctions';
import { dateToString } from '../../utils/DateFunctions';
import text from '../../utils/Descriptions';
import styles from './EventList.module.css';
import EventSummary from './Event';

function goToParty(id) {
    window.location = `/event-party?${id}`;
}
function goToWorkshop(id) {
    window.location = `/event-workshop?${id}`;
}
function goToArticle(id) {
    window.location = `/event-article?${id}`;
}

function filterEvent(search, event) {
    const date = event.start_date;
    const dateString = dateToString(date);
    return event.title.toUpperCase().includes(search.toUpperCase())
        || dateString.includes(search.toUpperCase());
}

class EventList extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            events: [],
            party: true,
            workshop: true,
            article: true,
        };
    }

    componentDidMount() {
        this.fetchEvents(this.state);
    }

    fetchEvents = ({ party, workshop, article }) => {
        this.setState({
            events: [],
        });
        if (party) this.fetchParties();
        if (workshop) this.fetchWorkshops();
        if (article) this.fetchArticles();
    }

    fetchParties = () => {
        fetchAll('parties').then((myJson) => {
            const { events } = this.state;
            const newEvents = events.concat(myJson.map(original => ({
                ...original,
                onClick: () => goToParty(original.id),
                path: `/event-party/?${original.id}`,
                complexId: `P${original.id}`,
            })));
            this.setState({ events: newEvents });
        });
    }

    fetchWorkshops = () => {
        fetchAll('workshops').then((myJson) => {
            const { events } = this.state;
            const newEvents = events.concat(myJson.map(original => ({
                ...original,
                onClick: () => goToWorkshop(original.id),
                path: `/event-workshop/?${original.id}`,
                complexId: `W${original.id}`,
            })));
            this.setState({ events: newEvents });
        });
    }

    fetchArticles = () => {
        fetchAll('articles').then((myJson) => {
            const { events } = this.state;
            const newEvents = events.concat(myJson.map(original => ({
                ...original,
                start_date: original.published_at,
                onClick: () => goToArticle(original.id),
                path: `/event-article/?${original.id}`,
                complexId: `A${original.id}`,
            })));
            this.setState({ events: newEvents });
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = ({ target }) => {
        this.setState({
            search: target.value ? target.value : '',
        });
    }

    invertParty = () => {
        this.setState(prevState => ({
            party: !prevState.party,
        }), () => this.fetchEvents(this.state));
    }

    invertWorkshop = () => {
        this.setState(prevState => ({
            workshop: !prevState.workshop,
        }), () => this.fetchEvents(this.state));
    }

    invertArticle = () => {
        this.setState(prevState => ({
            article: !prevState.article,
        }), () => this.fetchEvents(this.state));
    }

    render() {
        const today = new Date();
        const {
            events, search, party, workshop, article,
        } = this.state;
        events.sort((a, b) => {
            const aValue = new Date(a.start_date).valueOf();
            const bValue = new Date(b.start_date).valueOf();
            return Math.abs(aValue - today.valueOf())
                - Math.abs(bValue - today.valueOf());
        });
        let middleMan = [];
        middleMan.push(
            <div className={styles.eventListOldEvents} key="oldevents">{text.eventlist.oldevents}</div>,
        );
        if (!events.find(event => (
            filterEvent(search, event)
        ))) {
            middleMan = [];
            middleMan.push(
                <div className={styles.eventListOldEvents} key="oldevents">{text.eventlist.noevents}</div>,
            );
        }
        return (
            <div className={styles.main}>
                <EditButton link="/edit-events/" />
                <div className={styles.types}>
                    <div className={styles.title}>{text.eventlist.selectevents}</div>
                    <button
                        type="button"
                        onClick={this.invertParty}
                        className={party ? styles.selectedType : styles.type}
                    >
                        {text.eventlist.parties}
                    </button>
                    <button
                        type="button"
                        onClick={this.invertWorkshop}
                        className={workshop ? styles.selectedType : styles.type}
                    >
                        {text.eventlist.workshops}
                    </button>
                    <button
                        type="button"
                        onClick={this.invertArticle}
                        className={article ? styles.selectedType : styles.type}
                    >
                        {text.eventlist.news}
                    </button>
                </div>
                <form autoComplete="off" className={styles.eventListCardForm} onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="search"
                            value={search}
                            onChange={this.handleChange}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                            <path d="M7 2.01c-2.761 0-5 2.24-5 5.003a5.002 5.002 0 0 0 5 5.002A5.002 5.002 0 1 0 7 2.01m8.708 13.705a.996.996 0 0 1-1.412 0l-3.095-3.11A6.961 6.961 0 0 1 7 14.017c-3.866 0-7-3.135-7-7.003A7.002 7.002 0 0 1 7 .009c3.866 0 7 3.135 7 7.004 0 1.565-.52 3.007-1.388 4.173l3.096 3.112a1.003 1.003 0 0 1 0 1.417" />
                        </svg>
                    </div>
                </form>
                <ReactCssTransitionGroup
                    transitionName="fade"
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={500}
                    transitionAppear
                    transitionLeaveTimeout={500}
                    style={{ width: '100%' }}
                >
                    {events.filter(
                        event => (
                            filterEvent(search, event)
                            && new Date(event.start_date).valueOf() - today.valueOf() >= 0
                        ),
                    ).map(event => (
                        <EventSummary
                            {...event}
                            key={event.complexId}
                            start_date={event.start_date}
                        />
                    ))}
                    {middleMan}
                    {events.filter(
                        event => (
                            filterEvent(search, event)
                            && new Date(event.start_date).valueOf() - today.valueOf() < 0
                        ),
                    ).map(event => (
                        <EventSummary
                            old
                            {...event}
                            start_date={event.start_date}
                            key={event.complexId}
                        />
                    ))}
                </ReactCssTransitionGroup>
            </div>
        );
    }
}

export default EventList;
