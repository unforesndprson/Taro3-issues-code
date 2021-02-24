export default {
  pages: [
    'pages/index/index'
  ],
  "subPackages": [//分包
    {
      "root": "packageSecond",
      "pages": [
        'pages/second/index',
      ],
    }
  ],
  // "preloadRule": {
  //   "pages/index": {
  //     "network": "all",
  //     "packages": ["packageSecond"]
  //   },
  // },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
