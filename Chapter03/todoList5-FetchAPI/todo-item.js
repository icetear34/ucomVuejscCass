export default {
    //使用陣列設定樣式
  data(){
    return { 
      styleObj: {  listStyleType: 'none' },
      colorObj :{  background: '#e6b88b'},
    }
  },
  props: ['title'],
  emits: ['remove'],
  // Add the style binding to the li element in the template section
  //但inline style會覆蓋掉CSS樣式且不易公用，所以不建議使用
  template: `
  <li v-bind:style="[styleObj,colorObj]">
  {{ title }}
  <button @click="$emit('remove')">Remove</button>
  </li>
  `,
}
