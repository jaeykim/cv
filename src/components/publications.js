import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';

export default class Publications extends Component {
  renderListItem(item, i) {
    return (
      <div className="item" key={`exp_item_${i}`}>
        <div className="meta">
          <div className="upper-row">
            <h3 className="paper-title">{item.title}</h3>
            <div className="time">{item.date}</div>
          </div>
          {this.renderPublicationSection(item.authors, item.paperLink, item.publish)}
        </div>
        <div className="details">
          <p dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      </div>
    );
  }
  renderPublicationSection(authors, paperLink, publish) {
    if (authors && paperLink) {
      return (<div className="paper"> <a href={paperLink} target="_blank">{publish}</a> {authors}</div>);
    }
    return null;
  }
  render() {
    const { icon, sectionTitle, list } = this.props;
    return (
      <Section
        className="publications-section"
        icon={icon || 'graduation-cap'}
        title={sectionTitle || 'Publications'}
        id="publications"
      >
        {list.map((item, i) => {
          return this.renderListItem(item, i);
        })}
      </Section>
    );
  }
}

Publications.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string
};

