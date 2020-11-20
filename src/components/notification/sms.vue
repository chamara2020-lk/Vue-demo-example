<template>
    <div class="container">
        <div class="title">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">通知管理</el-breadcrumb-item>
                <el-breadcrumb-item><b>通知公告</b></el-breadcrumb-item>
                <el-breadcrumb-item><b>短信记录</b></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="box">
            <div class="iptBox">
                <el-button @click="goAdd('notification')">返回</el-button>
            </div>
            <el-table
                    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                    hight="250"
                    border
                    stripe
                    max-height="650"
                    style="width: 100%">
                <el-table-column prop="type" label="类型" width=""></el-table-column>
                <el-table-column prop="sendTime" label="发送时间" width=""></el-table-column>
                <el-table-column prop="content" label="短信内容" width=""></el-table-column>
                <el-table-column prop="sender" label="发送人" width=""></el-table-column>
                <el-table-column prop="result" label="发送结果" width=""></el-table-column>
                <el-table-column prop="quality" label="发送数量" width=""></el-table-column>
            </el-table>
            <div class="pageBox">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[5, 10, 15, 30]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="currentTotal">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                currentPage: 1,
                pageSize: 6,
                currentTotal: 2,
                tableData: [{
                    sendTime: '2016-05-02',
                    type: '类型',
                    content: '上海市普陀区金沙江路 1518 弄',
                    sender: '作者',
                    result: '紧急程度',
                    quality: '10'
                }, {
                    sendTime: '2016-05-03',
                    type: '类型',
                    content: '上海市普陀区金沙江路 1516 弄',
                    sender: '作者',
                    result: '紧急程度',
                    quality: '23'
                }]
            }
        },
        methods:{
            handleSizeChange(val) {
                this.pageSize = val;
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
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
</style>
