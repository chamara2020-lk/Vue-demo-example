<template>
    <div class="container" >
        <div class="title">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">通知管理</el-breadcrumb-item>
                <el-breadcrumb-item><b>通知公告</b></el-breadcrumb-item>
                <el-breadcrumb-item><b>详情</b></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="box">
            <el-row :gutter="24">
                <el-col :span="16" :offset="4">
                    <div class="textCenter mt-30">
                        <h1>{{title}}</h1>
                    </div>
                    <div class="mt-30">
                        <el-row :gutter="24">
                            <el-col :span="12"><div class="mr-30 tr">发布日期 : {{time}}</div></el-col>
                            <el-col :span="12"><div class="ml-30 tl">发布者 : {{publisher}}</div></el-col>
                        </el-row>
                    </div>
                    <div class="mt-30"><p style="line-height: 30px;">{{content}}</p></div>
                    <div class="mt-30 d-flex">
                        <!-- <el-button @click="handleDownload()">附件下载</el-button> -->
                        <el-upload action="#" list-type="picture-card" :auto-upload="false">
                            <i slot="default" class="el-icon-plus"></i>
                            <div slot="file" slot-scope="{file}">
                                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" >
                                <span class="el-upload-list__item-actions">
                                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)" >
                                        <i class="el-icon-zoom-in"></i>
                                    </span>
                                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)" >
                                        <i class="el-icon-download"></i>
                                    </span>
                                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                        <i class="el-icon-delete"></i>
                                    </span>
                                </span>
                            </div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                        <div style="padding: 12px 30px"><p>{{upload}}</p></div>
                    </div>
                    <div class="mt-30">
                        <el-button @click="goAdd('notification')">返回</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                title: '全市农产品质量安全工作半年度工作交流会',
                content: '全市农业部门认真贯彻各级党委、政府关于加强农产品质量安全的一系列决策部署，深入实施农产品质量安全“1213行动计划”和“1333行动计划”，坚持产出来、管理出来“两手抓”，农产品质量安全工作取得新成效。2017年，上级对我市主要农产品例行监测总体合格率达99%以上，市本级监督抽样合格率也达99%以上，均高于全省平均水平。金砖国家厦门会晤等重大活动，农产品供应和质量安全工作实现预期目标。但也存在产地环境不洁净等问题，必须在下一阶段工作中予以解决，增强生产经营主体质量安全管理水平和诚信意识，实现农产品质量安全全程监管。',
                time: '2019-08-20',
                publisher: '常熟市农产品质量安全监督科',
                upload: 'DB41∕T 977-2014',
                url: "blob:http://192.168.209.75:8080/ba50c553-31f3-4f08-996d-eef066f27765",
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false
            }
        },
        created() {
            let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
            console.log('----------------->',  this.$route.params.id);
            // this.axios.get(uri).then((response) => {
            //     this.data = response.data;
            // });
        },
        methods:{
            handleRemove(file) {
                console.log(file);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleDownload(file) {
                console.log(file.url);
                console.log(this.url);
                const fileLink = document.createElement('a');
                fileLink.href = file.url;
                fileLink.setAttribute('download', 'copy_file');
                document.body.appendChild(fileLink);
                fileLink.click();
            },
            aaaaaaaaaaa() {
                // let url = 'http://192.168.209.75:8080/src/assets/logo.png';
                // axios({
                //     url: url,
                //     method: 'GET',
                //     responseType: 'blob',
                // }).then((response) => {
                //      var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                //      var fileLink = document.createElement('a');
   
                //      fileLink.href = fileURL;
                //      fileLink.setAttribute('download', 'copy_logo.png');
                //      document.body.appendChild(fileLink);
   
                //      fileLink.click();
                // });
            },
            goAdd(url) {
                this.$router.push({path: url});
            }
        }
    }
</script>

<style scoped>
    .allCompany{
        display: inline-block;
        line-height: 40px;
        margin: 0 20px;
    }
    .wrapper {
        width: 70%;
        text-align: center;
    }
    .mt-30 {
        padding-top: 30px;
    }
    .d-flex {
        display: flex;
    }
    .textCenter {
        text-align: center;
    }
    .ml-30 {
        margin-left: 30px;
    }
    .mr-30 {
        margin-right: 30px;
    }
    .tl {
        text-align: left;
    }
    .tr {
        text-align: right;
    }
</style>
