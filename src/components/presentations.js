import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';

export default class Presentations extends Component {
  renderListItem(item, i) {
    return (
      <div className="item" key={`exp_item_${i}`}>
        <div className="meta">
          <div className="upper-row">
						{this.renderPresentationData(item.dataLink, item.title)}
            <div className="time">{item.date}</div>
          </div>
          {this.renderPresentationSection(item.institute, item.eventLink, item.eventName)}
        </div>
        <div className="details">
          <p dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      </div>
    );
  }
  renderPresentationData(dataLink, title){
		if (dataLink) {
			return (<a href={dataLink} target="_blank"><h3 className="presentation-title">{title}</h3></a>);
		}
		return (<h3 className="presentation-title">{title}</h3>);
	}
  renderPresentationSection(institute, eventLink, eventName) {
    if (eventLink) {
      return (<div className="presentation"> <a href={eventLink} target="_blank">{eventName}</a> {institute}</div>);
    } else {
      return (<div className="presentation"> <a href='' target="_blank">{eventName}</a> {institute}</div>);
		}
    return null;
  }
  render() {
    const { icon, sectionTitle, list } = this.props;
    return (
      <Section
        className="presentations-section"
        icon={icon || 'microphone'}
        title={sectionTitle || 'Presentations'}
        id="presentations"
      >
        {list.map((item, i) => {
          return this.renderListItem(item, i);
        })}
      </Section>
    );
  }
}

Presentations.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string
};

