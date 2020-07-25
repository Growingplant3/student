var headerTemplate = `
  <div>
    <slot name="header">初期設定ヘッダー表示</slot>
  </div>
`

var contentTemplate = `
  <div>
    <slot name="content">初期設定コンテンツ一覧表示</slot>
  </div>
`

Vue.component('page-header', {
  template: headerTemplate
})

Vue.component('page-content', {
  template: contentTemplate
})

new Vue({
  el: "#fruits-list"
})
