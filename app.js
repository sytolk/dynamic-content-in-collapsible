import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { renewTimes, handleOneCollapsed, handleTwoCollapsed, handleStartTimer } from './actions'
import Collapsible from 'react-native-collapsible'
import Moment from 'moment'

let styles

class App extends React.Component {

  constructor (props) {
    super(props)
    this.timeoutTimer = null
  }

  render () {

    const {container} = styles
    const {handleOneCollapsed, handleTwoCollapsed, isOneCollapsed, isTwoCollapsed, renewTimes, timeOne, timeTwo, timeThree, isTimerRunning, startTimer} = this.props

    Moment.locale('de')

    if (isTimerRunning) {
      setTimeout(renewTimes, 1000)
    }

    return (
      <View style={container}>

        <TouchableOpacity onPress={handleOneCollapsed}>
          <Text>Press me to open/close collapsible 1</Text>
        </TouchableOpacity>

        <Collapsible collapsed={isOneCollapsed}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', height: 50}}>
            <Text>Germany</Text>
            <Text>{Moment(timeOne).format('HH:mm:ss')}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', height: 50}}>
            <Text>USA</Text>
            <Text>{Moment(timeTwo).format('HH:mm:ss')}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', height: 50}}>
            <Text>Russland</Text>
            <Text>{Moment(timeThree).format('HH:mm:ss')}</Text>
          </View>
        </Collapsible>

        <TouchableOpacity onPress={handleTwoCollapsed}>
          <Text>Press me to open/close collapsible 2</Text>
        </TouchableOpacity>

        <Collapsible collapsed={isTwoCollapsed}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', height: 50}}>
            <Text>Germany</Text>
            <Text>{Moment(timeOne).format('HH:mm:ss')}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', height: 50}}>
            <Text>USA</Text>
            <Text>{Moment(timeTwo).format('HH:mm:ss')}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', height: 50}}>
            <Text>Russland</Text>
            <Text>{Moment(timeThree).format('HH:mm:ss')}</Text>
          </View>
        </Collapsible>

        <TouchableOpacity onPress={startTimer}>
          <Text>Start Timer</Text>
        </TouchableOpacity>

      </View>
    )
  }

}

styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  }
})

function mapStateToProps (state) {
  console.log(state)
  return {
    timeOne: state.times.timeOne,
    timeTwo: state.times.timeTwo,
    timeThree: state.times.timeThree,
    isOneCollapsed: state.collapsed.isOneCollapsed,
    isTwoCollapsed: state.collapsed.isTwoCollapsed,
    isTimerRunning: state.times.isTimerRunning
  }
}

function mapDispatchToProps (dispatch) {
  return {
    renewTimes: () => dispatch(renewTimes()),
    handleOneCollapsed: () => dispatch(handleOneCollapsed()),
    handleTwoCollapsed: () => dispatch(handleTwoCollapsed()),
    startTimer: () => dispatch(handleStartTimer())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
