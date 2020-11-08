<template>
  <div id="schedule">
    <el-card class="box-card">
      <div slot="header">
        <el-container>
          <el-aside width="20%">
            <div class="demo-image">
              <el-image
                  :src="url"
                  :fit="fit">
              </el-image>
            </div>
          </el-aside>
          <el-main>
            <span class="name">{{docProfile.docName}}</span><el-divider direction="vertical"></el-divider><span class="spanFont">{{docProfile.proTitle1}}</span><el-divider direction="vertical"></el-divider><span class="spanFont">{{docProfile.proTitle2}}</span>
            <el-row>
              <el-col :span="24"><span  class="spanFont">{{docProfile.hosp}}</span></el-col>
            </el-row>
            <span class="spanFont">{{docProfile.orderNum}}</span>
            <el-divider direction="vertical"></el-divider>
            <span class="spanFont">{{docProfile.adviceNum}}</span>
            <el-divider direction="vertical"></el-divider>
            <span class="spanFont">{{docProfile.markNum}}</span>
          </el-main>
        </el-container>
      </div>
      <el-row>
        <el-col :span="2"><span class="spanFontRow">擅长:</span></el-col>
        <el-col :span="22"><span class="spanFontRow">擅长脑血管 (动脉瘤、动静脉畸形、动静脉瘘、动脉狭窄) 的诊断和血管内介入 (微创) 治疗。</span></el-col>
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
  name: "Schedule11",
  data() {
    return{
      fit:'fill',
      url: '',
      activeName: 'first',
      tableData: [{
        date:'2020/10/30',
        beforeNoon:'总18/余4',
        afterNoon:'总12/余6'
      },{
        date:'2020/10/31',
        beforeNoon:'总18/余4',
        afterNoon:'总12/余6'
      },{
          date:'2020/11/1',
          beforeNoon:'总18/余4',
          afterNoon:'总12/余6'
        }],
      docProfile:{
        docName:'',
        proTitle1:'',
        proTitle2:'',
        hosp:'',
        orderNum:'',
        adviceNum:'',
        markNum:''
      }
    }
  },
  beforeCreate() {
    let _this = this;
    this.axios({
      headers:{
        'Content-Type':'application/json;charset=UTF-8'
      },
      transformRequest:[function (data){
        data = JSON.stringify(data)
        return data
      }],
      transformResponse: [function (data) {
        data = JSON.parse(data);
        return data
      }],
      method:'post',
      url: 'https://68f36554-0165-4179-90c0-7db09b23770a.mock.pstmn.io/kkk',
      data:{
        'arrange_id':'1314'
      }
    }).then(function (response){
      _this.url = response.data.url;
      _this.docProfile = response.data.docProfile;
    }).catch(function (error){
      console.log(error);
    })
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

span.spanFont{
  font-size: x-small;
  color:Linen;
}

span.name{
  color: white;
}

span.spanFontRow{
  font-size: x-small;
}

.el-image{
  width: 100%;
  height: 100%;
}

div.demo-image{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>