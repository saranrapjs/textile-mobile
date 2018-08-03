export type DebugConfig = {
  showDevScreens: boolean,
  useFixtures: boolean,
  ezLogin: boolean,
  yellowBox: boolean,
  reduxLogging: boolean,
  includeExamples: boolean,
  useReactotron: boolean
}

const config: DebugConfig = {
  showDevScreens: __DEV__,
  useFixtures: false,
  ezLogin: false,
  yellowBox: __DEV__,
  reduxLogging: __DEV__,
  includeExamples: __DEV__,
  useReactotron: __DEV__
}

export default config
