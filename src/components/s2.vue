<template>
  <div id="schedule">
    <el-card class="box-card">
      <div slot="header">
        <el-row>
          <el-col :span="4">
            <div class="demo-image">
              <el-image
                  style="width: 100%;height:100%"
                  :src="url"
                  :fit="fit"></el-image>
            </div>
          </el-col>
          <el-col :span="20">
            <span style="color: white;">孙笑川</span><el-divider direction="vertical"></el-divider><span style="font-size: x-small;color: Linen;">主任医师</span><el-divider direction="vertical"></el-divider><span style="font-size: x-small;color: Linen;">神经外科介入</span>
            <el-row>
              <el-col :span="24"><span style="font-size: x-small;color:Linen;">浙江大学医学院附属第二医院</span></el-col>
            </el-row>
            <span style="font-size: x-small;color:Linen;">预约量 1428</span>
            <el-divider direction="vertical"></el-divider>
            <span style="font-size: x-small;color:Linen">咨询量 12</span>
            <el-divider direction="vertical"></el-divider>
            <span style="font-size: x-small;color: Linen;">评分量 100</span>
          </el-col>
        </el-row>
      </div>
      <el-row>
        <el-col :span="2"> <span style="font-size: x-small">擅长:</span></el-col>
        <el-col :span="22"><span style="font-size: x-small">擅长脑血管 (动脉瘤、动静脉畸形、动静脉瘘、动脉狭窄) 的诊断和血管内介入 (微创) 治疗。</span></el-col>
      </el-row>
    </el-card>
    <el-tabs v-model="activeName">
      <el-tab-pane label="神经外科介入" name="first" >
        <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column
              fixed
              prop="date">
          </el-table-column>
          <el-table-column
              prop="beforeNoon"
              label="上午">
            <template slot-scope="scope">
              <el-popover trigger="click" placement="top">
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.beforeNoon }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
              prop="afterNoon"
              label="下午">
            <template slot-scope="scope">
              <el-popover trigger="click" placement="top">
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.afterNoon }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "s2",
  data() {
    return{
      fit:'fill',
      url: require('@/assets/timg.jpg'),
      activeName: 'first',
      tableData: [{
        date:'2020/10/30',
        beforeNoon:'总18/余4',
        afterNoon:'总12/余6'
      },{
        date:'2020/10/31',
        beforeNoon:'总18/余4',
        afterNoon:'总12/余6'
      },
        {
          date:'2020/11/1',
          beforeNoon:'总18/余4',
          afterNoon:'总12/余6'
        }]
    }
  }
}
</script>

<style>
.el-card__header{
  background: SlateGray;
}
.el-image__inner{
  border-radius: 5px;
}

</style>