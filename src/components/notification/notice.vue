<template>
    <div class="container">
        <div class="title">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">通知管理</el-breadcrumb-item>
                <el-breadcrumb-item><b>发布公告</b></el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="box">
            <el-form ref="form" :model="form" label-width="100px">
                <el-row>
                    <el-col :span="4">
                        <el-form-item label="定时发布">
                            <el-input v-model="form.time"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">
                        <el-form-item label="紧急程度">
                            <div class="iptBox" style="margin: 0px">
                                <el-select v-model="form.levelValue">
                                    <el-option
                                        v-for="item in type"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">
                        <el-form-item label="类型" >
                            <div class="iptBox" style="margin: 0px">
                                <el-select v-model="form.typeValue">
                                    <el-option
                                        v-for="item in type"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="日期" >
                            <el-input v-model="form.date"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="发布人" >
                            <el-input v-model="form.publisher"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="标题">
                            <el-input v-model="form.title"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="内容">
                            <el-input v-model="form.content" type="textarea" :rows="5"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label=''>
                            <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-change="handleChange"
                                :file-list="form.fileList">
                                <el-button size="small" type="primary">Click to upload</el-button>
                                <!-- <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div> -->
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-form-item>
                    <el-button type="success" plain @click="process(1)">保存</el-button>
                    <el-button type="danger" plain @click="process(0)">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                form:{
                    time: '',
                    typeValue: '',
                    levelValue: '',
                    date: '',
                    publisher: '',
                    title: '',
                    content:'',
                    fileList: [],
                },
                type: [
                    {
                        value:'1',
                        label:'低'
                    },
                    {
                        value:'2',
                        label:'中'
                    },
                    {
                        value:'3',
                        label:'高'
                    }],
                create: null
            }
        },
        created() {
            this.create = this.$route.params.id;
            console.log("________________", this.$route.params.id);
            if (this.create == undefined) return;
            let uri = `http://192.168.209.75:8080/api/notice/${this.create}`;
            // this.axios.get(uri).then((response) => {
            //     this.form = response.data;
            // });
        },
        methods:{
            process(flag) {
                if (flag) {
                    if (this.create === undefined) {
                        let uri = 'http://192.168.209.75:8080/api/notice/create';
                        // this.axios.post(uri, this.form).then(() => {
                        //     this.$router.push({name: 'notification'});
                        // });
                    } else {
                        let uri = `http://192.168.209.75:8080/api/notice/update/${this.create}`;
                        // this.axios.post(uri, this.form).then(() => {
                        //     this.$router.push({name: 'notification'});
                        // });
                    }
                }
                this.$router.push({name: 'notification'});
            },
            handleChange(file, fileList) {
                this.form.fileList = fileList.slice(-1);
            },
            handleClick(btn) {
                this.$router.push({path: 'notification'})
            }
        }
    }
</script>

<style scoped>

</style>
