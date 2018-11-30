import React from 'react';
import './Card.css';
import './EventList.css';
import FacebookLogo from './facebook-app-logo.svg';
import Boritokep from './boritokep2.png';

function EventSummary(props) {

    const detailsrows = [];
    if (props.details.formlink) {
        detailsrows.push(<div key="form"><a href={props.details.formlink} target="_blank" key="FormLink" onClick={(event) => event.stopPropagation()}>Link a formhoz</a></div>)
    }

    if (props.details.music) {
        detailsrows.push(<div key="music"> <strong>{props.details.music} </strong></div>)
    }

    const date = props.details.start_date;
    const dateString = date.split('T')[0] + ' ' + date.split('T')[1];

    const facebookLink = []
    if (props.details.facebook) {
        facebookLink.push(
            <a href={props.details.facebook} target="_blank" key="FacebookLink" onClick={(event) => event.stopPropagation()}>
                <img src={FacebookLogo} alt="" />
            </a>
        )
    }

    return (
        <div className={"card" + (props.old ? " eventList-old" : "")} key={props.details.id}
            onClick={props.details.onClick ? props.details.onClick : ""}>
            <div className="eventSummary">
                <div className="poster-cropper">
                    <img alt=""
                        src={props.details.poster ? props.details.poster : Boritokep} />
                </div>
                <div className="eventSummary-details">
                    <div className="title">{props.details.title}</div>
                    <div>{dateString}</div>
                    {detailsrows}
                </div>
                <div className="eventSummary-facebook-link">
                    {facebookLink}
                </div>
            </div>
        </div>
    )
}

export default EventSummary;