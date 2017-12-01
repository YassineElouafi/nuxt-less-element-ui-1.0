<template>
  <div>
      <h1>用户 user</h1>
      <el-date-picker
        v-model="value2"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions1">
      </el-date-picker>
      <div style="height:200px;">
        <el-transfer v-model="value1" :data="data"></el-transfer>
      </div>
  </div>
</template>
<script>
  export default {
    data () {
      const generateData = _ => {
        const data = []
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${i}`,
            disabled: i % 4 === 0
          })
        }
        return data
      }
      return {
        data: generateData(),
        value1: [1, 4],
        value2: '',
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        }
      }
    }
  }
</script>
