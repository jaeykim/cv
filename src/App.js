import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './assets/theme/styles-6.css';
import Section from './components/shared/section';
import Sidebar from './components/sidebar';
import Experiences from './components/experiences';
import Presentations from './components/presentations';
import Publications from './components/publications';
import Projects from './components/projects';
import Tags from './components/tags';

export default class CV extends Component {
  renderExperiencesSection() {
    if (this.props.experiences) {
      return (<Experiences {...this.props.experiences} />);
    }
    return null;
  }
  renderPresentationsSection() {
    if (this.props.presentations) {
      return (<Presentations {...this.props.presentations} />);
    }
    return null;
  }
  renderPublicationsSection() {
    if (this.props.publications) {
      return (<Publications {...this.props.publications} />);
    }
    return null;
  }
  renderProjectsSection() {
    if (this.props.projects) {
      return (<Projects {...this.props.projects} />);
    }
    return null;
  }
  renderTags() {
    if (this.props.tags) {
      return (<Tags {...this.props.tags} />);
    }
    return null;
  }
  renderOpenSourcePart() {
    return (<div>This page is made with an open source. <a href="https://github.com/sbayd/react-cv-template" target="_blank">access to the source code.</a></div>);
  }     
  renderCareerProfile() {
    const { icon, sectionTitle, description } = this.props.careerProfile;
    const innerContent = (<div className="summary" dangerouslySetInnerHTML={{ __html: description }} />);
    return (
      <Section
        className="summary-section"
        icon={icon || 'user'}
        title={sectionTitle || 'Career Profile'}
      >
        {innerContent}
      </Section>
    );
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props.profile}
        />
				<div className="shortcut">
					<a className="anchor" href="#experiences">Experiences</a> |
					<a className="anchor" href="#presentations"> Presentations</a> |
					<a className="anchor" href="#publications"> Publications</a> |
					<a className="anchor" href="#projects"> Projects</a> |
					<a className="anchor" href="#tags"> Skills</a>
				</div>

        <div className="main-wrapper">
          {this.renderCareerProfile()}
          {this.renderExperiencesSection()}
					{this.renderPresentationsSection()}
					{this.renderPublicationsSection()}
          {this.renderProjectsSection()}
          {this.renderTags()}
          {this.renderOpenSourcePart()}
        </div>
      </div>
    );
  }
}

CV.propTypes = {
  profile: PropTypes.shape().isRequired,
  careerProfile: PropTypes.shape().isRequired,
  experiences: PropTypes.shape().isRequired,
  presentations: PropTypes.shape().isRequired,
  publications: PropTypes.shape().isRequired,
  projects: PropTypes.shape().isRequired,
  tags: PropTypes.shape().isRequired
};
