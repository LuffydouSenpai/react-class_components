import React from 'react';
import PropTypes from 'prop-types';
import styles from './BoutonCount.module.css';

/* const BoutonCount = (props) => (
  <div className={styles.BoutonCount}>
    <button onClick={props.action}>+1</button>
  </div>
); */

class BoutonCount extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className={styles.BoutonCount}>
      <button onClick={this.props.action}>{this.props.children}</button>
    </div>
    )
  }
}

BoutonCount.propTypes = {};

BoutonCount.defaultProps = {};

export default BoutonCount;
