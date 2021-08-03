<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>

  <h2>计数情况</h2>
  <p>{{ count }}</p> 
  <button @click="setCount5">5</button>
  <br/>
  <button @click="addCount(1)"> ++ </button>
  <br/>
  <button @click="minusCount(1)"> -- </button>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState, useStore } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  computed: {
    ...mapState([
      // 映射的计算属性名称与state的子节点名称相同，可以给mapState 传一个字符串数组
      'count'
    ]),
    // ...mapState({
      // 映射义对象形式传递
      // count: state => state.count
      // 传递字符串参数
      // count: 'count'
    // })
  },

  methods: {
    ...mapActions(['setCount5', 'addCount', 'minusCount']),
    // ...mapMutations(['setCountIs5'])
  }

}
</script>