<template>
  <div>
    <el-table
      :data="items"
      style="width: 100%"
      highlight-current-row
      @current-change="handleCurrentChange">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
        <el-table-column
          prop="label"
          label="名称"
          width="180"
        >
        </el-table-column>
    </el-table>
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinished(item)">
        {{item.label}}
      </li>
    </ul>
    <el-input v-model="newItem" placeholder="Add items">
    </el-input>
    <el-button type="primary" v-on:click="addItems(newItem)">点击添加TodoList</el-button>
  </div>
</template>

<script>
  import Store from '../js/localStorage';

  export default {
    name: "LocalStorageTodoList",
    data() {
      return {
        items: Store.fetch(),
        newItem: '',
        currentRow: null
      }
    },
    methods: {
      addItems: function (newItem) {
        this.items.push({
          label: newItem,
          isFinished: false
        })
        this.newItem = '';
      },
      toggleFinished: function (item) {
        item.isFinished = !item.isFinished;
      },
      handleCurrentChange: function (val) {
        this.currentRow = val;
        this.currentRow.isFinished = !this.currentRow.isFinished
      }
    },
    watch: {
      items: {
        handler: function (items) {
          Store.save(items);
        }
        ,
        deep: true
      }
    }
  }
</script>

<style scoped>
  .finished {
    text-decoration: underline;
  }
</style>
