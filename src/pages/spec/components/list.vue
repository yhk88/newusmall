<template>
  <div>
    <el-table :data="slist" border style="width: 100%">
      <el-table-column prop="id" label="规格编号" width="90"> </el-table-column>
      <el-table-column prop="specsname" label="规格名称" width="250">
      </el-table-column>
      <el-table-column label="规格属性" width="250">
        <template slot-scope="scope">
          <el-tag v-for="item in scope.row.attrs" :key="item">{{
            item
          }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="status" label="状态" width="267">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1"
            >启用</el-button
          >
          <el-button type="danger" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="操作" width="280">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <!-- <el-pagination
      :page-size="2"   
      layout="prev, pager, next"
      :total="total"
      @current-change="changeCurrenPage"
    >
    </el-pagination> -->
    <div class="you">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :current-page="page"
          :page-size="size"
          @current-change="changeCurrenPage"
        >
        </el-pagination>
      </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {
  specscount,
  specslist,
  specsinfo,
  specsdelete,
} from "../../../util/request";

export default {
  computed: {
    ...mapGetters({
      slist: "spec/list",
      total:'spec/total',
      page:'spec/page',
      size:'spec/size'
    }),
  },
  components: {},
  data() {
    return {
      // total: null,
    };
  },

  methods: {
    edit(id) {
      this.$emit("edit", id);
    },
    del(id) {
      specsdelete({ id: id }).then((res) => {
        alert("删除成功");
           this.changeCountPape(1)
        this.reqspecslist();
        this.requestuserCount()
     
        
      });
    },
    ...mapActions({
      reqspecslist: "spec/reqspecslist",
      requestuserCount: "spec/requestuserCount",
      changeCountPape: "spec/changeCountPape",
    }),
    changeCurrenPage(a) {
      this.changeCountPape(a)
      this.reqspecslist()
    },
  },
  mounted() {
    // this.specscount()
    this.reqspecslist();
    this.requestuserCount()
    
  },
  
};
</script>
<style>
</style>