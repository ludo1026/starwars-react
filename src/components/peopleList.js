import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../actions/actions';
import PropTypes from 'prop-types';
import React from 'react';

class peopleList extends React.Component {
  componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
     this.props.peopleActions.fetchPeople();
   }
  
  renderData() {
    return <div>{this.props.peoples.map(({name}, index) => {
      return <div>{name}</div>
    })}</div>;
  }
  
  
  render() {
    return (
      <div className="">
          {this.props.peoples.length > 0 ?
            this.renderData()
            :
            <div className="">
              No Data
            </div>
          }
      </div>
    );
  }
}
peopleList.propTypes = {
  peopleActions: PropTypes.object,
  peoples: PropTypes.array
};
function mapStateToProps(state) {
  return {
    peoples: state.peoples
  };
}
function mapDispatchToProps(dispatch) {
  return {
    peopleActions: bindActionCreators(peopleActions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(peopleList);