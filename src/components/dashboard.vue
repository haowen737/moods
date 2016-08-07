<template lang="html">
  <div class="dashboard">
    <card class="center" :header="{title:'情绪'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
          <div class="vux-1px-r">
            <span>1130</span>
            <br/>
            情绪
          </div>
          <div class="vux-1px-r">
            <span>15</span>
            <br/>
            听众
          </div>
          <div class="vux-1px-r">
            <span>0</span>
            <br/>
            在意
          </div>
          <div>
            <span>88</span>
            <br/>
            基纳
          </div>
        </div>
    </card>
  </div>
</template>

<script>
import card from 'vux-components/card'
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    card
  }
}
</script>

<style lang="css" scoped>
.center {
  text-align: center;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #cfcfcf;
}
/*********modify weui***********/
.weui_panel_hd:after {
  left: 0;
}
</style>
