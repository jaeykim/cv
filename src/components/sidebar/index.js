import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfileContainer from './profileContainer';
import ContactDetails from './contactDetails';
import EducationDetails from './educationDetails';
import LanguageDetails from './languageDetails';
import Interests from './interests';

export default class Sidebar extends Component {
  renderInterests() {
    if (this.props.interests) {
      return (<Interests list={this.props.interests.list} title={this.props.interests.sectionTitle} />);
    }
    return null;
  }
  renderLanguages() {
    if (this.props.languages) {
      return (<LanguageDetails list={this.props.languages.list} title={this.props.languages.sectionTitle} />);
    }
    return null;
  }
  renderEducationDetails() {
    if (this.props.educationDetails) {
      return (<EducationDetails list={this.props.educationDetails.list} title={this.props.educationDetails.sectionTitle} />);
    }
    return null;
  }

  renderProfileContainer() {
    return (<ProfileContainer
      name={this.props.name}
      title={this.props.title}
      imagePath={this.props.imagePath}
    />);
  }

  renderContactDetails() {
    return (<ContactDetails
      mail={this.props.mail}
      mail1={this.props.mail1}
      mail2={this.props.mail2}
      phoneNumber={this.props.phoneNumber}
      website={this.props.website}
      linkedin={this.props.linkedin}
      github={this.props.github}
      title={this.props.title}
      twitter={this.props.twitter}
      facebook={this.props.facebook}
    />);
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        {this.renderProfileContainer()}
        {this.renderContactDetails()}
        {this.renderEducationDetails()}
        {this.renderLanguages()}
        {this.renderInterests()}
      </div>
    );
  }
}

Sidebar.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
  mail: PropTypes.string.isRequired,
  mail1: PropTypes.string,
  mail2: PropTypes.string,
  phoneNumber: PropTypes.string,
  website: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  twitter: PropTypes.string,
  facebook: PropTypes.string,
  educationDetails: PropTypes.shape().isRequired,
  languages: PropTypes.shape().isRequired,
  interests: PropTypes.shape().isRequired,
};

Sidebar.defaultProps = {
  imagePath: null,
  phoneNumber: null,
  website: null,
  linkedin: null,
  github: null,
  twitter: null,
  facebook: null
};
