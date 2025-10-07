import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner2.css'

const Banner2 = (props) => {
  return (
    <div
      className={`banner2-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner2-max-width thq-section-max-width">
        <div className="banner2-container2">
          <h2 className="banner2-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner2-text4">
                  Transforming Urban Environments with AI
                </span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner2-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner2-text5">
                  Metamod Analytics specializes in creating AI systems and
                  digital twins for urban environments to drive decision-making
                  and progress.
                </span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="banner2-button thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner2-text3">Learn More</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner2.defaultProps = {
  action1: undefined,
  heading1: undefined,
  content1: undefined,
  rootClassName: '',
}

Banner2.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Banner2
