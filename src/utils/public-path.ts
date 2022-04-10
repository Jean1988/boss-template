type winType = Window & {
  [x: string]: any
}
if ((window as winType).__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = (window as winType).__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
