import React from 'react'
// import * as ReactRedux from 'react-redux' // * 裝好 Redux 記得開啟相關參數
import whyDidYouRender from '@welldone-software/why-did-you-render'

const useLog = true
const useReduxVersion = false

const baseSetting = {
  // include: [/^$/], // Regex
  // exclude: [/^BaseCheckBoxGroup$/, /^BaseRadioGroup$/, /^BaseSelect$/], // Regex
  // logOnDifferentValues: true, // 預設只會顯示相同值且渲染的情況，亦可開啟完整
  trackAllPureComponents: true, // 自動追蹤 React.memo (functional) & PureComponent (class)
  trackHooks: [
    // [ReactRedux, 'useSelector'] // 追蹤 useSelector
  ],
  logOwnerReasons: true, // 顯示為何父元件渲染 (更易查詢為何渲染)
  collapseGroups: true, // 預設 collapse 出來的 console
  diffNameColor: '#eee' // titleColor / diffNameColor / diffPathColor log 顏色調整
}

if (process.env.NODE_ENV === 'development' && !useReduxVersion && useLog) {
  whyDidYouRender(React, {
    ...baseSetting
  })
}

if (process.env.NODE_ENV === 'development' && useReduxVersion && useLog) {
  whyDidYouRender(React, {
    ...baseSetting,
    trackExtraHooks: [
      // [ReactRedux, 'useSelector']
    ]
  })
}
