<template>
  <div>
    <el-table
      :data="cateList"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="分类编号" sortable width="180">
      </el-table-column>
      
      <el-table-column prop="catename" label="分类名称" sortable width="180">
      </el-table-column>



<el-table-column prop="specsname" label="规格名称" width="100">
      </el-table-column>
      <el-table-column prop="specsname" label="规格名称" width="100">
      </el-table-column>
      <el-table-column prop="specsname" label="规格名称" width="100">
      </el-table-column>




      <el-table-column label="图片" width="250">
        <template slot-scope="scope">
          <img :src="$preImg + scope.row.img" />
        </template>
      </el-table-column>



       <el-table-column prop="id" label="分类编号" sortable width="180">
      </el-table-column>
      
      <el-table-column prop="catename" label="分类名称" sortable width="180">
      </el-table-column>



      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1"
            >启用</el-button
          >
          <el-button type="danger" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
  </div>
</template>
<script>
import { reqCatelist, reqCateinfo, cateDelete } from "../../../util/request";
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    // 获取，暴露
    ...mapGetters({
      cateList: "cate/list",
    }),
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    edit(id) {
      this.$emit("edit", id);
    },
    // 方法
    del(id) {
      cateDelete({ id: id }).then((res) => {
        alert("删除成功");
        this.requseCatelist();
      });
    },
    // 调方法的
    ...mapActions({
      requseCatelist: "cate/requseCatelist",
    }),
  },
  mounted() {
    this.requseCatelist();
  },
};
</script>
<style>
img {
  width: 80px;
}
</style>