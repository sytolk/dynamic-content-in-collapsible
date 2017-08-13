import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { renewTimes } from './actions'
import Collapsible from 'react-native-collapsible'

let styles

const App = (props) => {
  const {
    container
  } = styles
  const {timeOne, timeTwo} = props
  return (
    <View style={container}>

      <Text>{timeOne} / {timeTwo}</Text>

      <TouchableOpacity>
        <View><Text>Press me to open/close collapsible 1</Text></View>
      </TouchableOpacity>

      <Collapsible collapsed={false}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Time 1</Text>
          <Text>Time 2</Text>
        </View>
      </Collapsible>

      <TouchableOpacity>
        <View><Text>Press me to open/close collapsible 2</Text></View>
      </TouchableOpacity>

      <Collapsible collapsed={false}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Time 1</Text>
          <Text>Time 2</Text>
        </View>
      </Collapsible>

    </View>
  )
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
  return {
    timeOne: state.timeOne,
    timeTwo: state.timeTwo
  }
}

function mapDispatchToProps (dispatch) {
  return {
    renewTimes: () => dispatch(renewTimes())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
