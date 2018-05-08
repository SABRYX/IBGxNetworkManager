//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { ibgx } = NativeModules

export default {
  exampleMethod () {
    return ibgx.exampleMethod()
  },

  EXAMPLE_CONSTANT: ibgx.EXAMPLE_CONSTANT
}
