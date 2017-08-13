import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { renewTimes, handleOneCollapsed, handleTwoCollapsed } from './actions'
import Collapsible from 'react-native-collapsible'

let styles

class App extends React.Component {

  render () {

    const {container} = styles
    const {handleOneCollapsed, handleTwoCollapsed, isOneCollapsed, isTwoCollapsed, renewTimes} = this.props

    console.log(isOneCollapsed)

    return (
      <View style={container}>

        <TouchableOpacity onPress={handleOneCollapsed}>
          <View><Text>Press me to open/close collapsible 1</Text></View>
        </TouchableOpacity>

        <Collapsible collapsed={isOneCollapsed}>
          <View>
            <Text>Time 1</Text>
            <Text>Time 2</Text>
          </View>
        </Collapsible>

        <TouchableOpacity onPress={handleTwoCollapsed}>
          <View><Text>Press me to open/close collapsible 2</Text></View>
        </TouchableOpacity>

        <Collapsible collapsed={isTwoCollapsed}>
          <View>
            <Text>Time 1</Text>
            <Text>Time 2</Text>
          </View>
        </Collapsible>

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
    isOneCollapsed: state.times.isOneCollapsed,
    isTwoCollapsed: state.times.isTwoCollapsed
  }
}

function mapDispatchToProps (dispatch) {
  return {
    renewTimes: () => dispatch(renewTimes()),
    handleOneCollapsed: () => dispatch(handleOneCollapsed()),
    handleTwoCollapsed: () => dispatch(handleTwoCollapsed())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
