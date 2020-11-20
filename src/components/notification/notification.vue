<template>
    <div class="container">
        <div class="title">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"><b>通知管理</b></el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="box">
            <div class="iptBox">
                <div style="margin-bottom: 20px">通知公告</div>
                <div>
                    <router-link :to="{name: 'no_notice'}"><el-button>发布公告</el-button></router-link>
                    <router-link :to="{name: 'no_sms'}"><el-button style="margin-left: 20px;">短信记录</el-button></router-link>
                    <el-select v-model="filterValue" @change="handleChange()" placeholder="请选择" style="margin-left: 20px">
                        <el-option
                                v-for="item in options"
                                :key="item"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <el-table
                    :data="filter_tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                    hight="250"
                    border
                    stripe
                    max-height="650"
                    style="width: 100%">
                <el-table-column prop="type" label="类型"></el-table-column>
                <el-table-column prop="title" label="标题"></el-table-column>
                <el-table-column prop="date" label="日期"></el-table-column>
                <el-table-column prop="author" label="作者"></el-table-column>
                <el-table-column prop="emergency" label="紧急程度"></el-table-column>
                <el-table-column label="操作" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <!-- <router-link :to="{name: 'no_notice', params: { id: scope.$index }}"><el-button style="margin-left: 20px;" >修改</el-button></router-link> -->
                        <el-button style="margin-left: 20px;" @click="goAdd('no_detail', scope.$index)">查看</el-button>
                        <el-button style="margin-left: 20px;" @click="goAdd('no_notice', scope.$index)">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
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
</template>

<script>
    export default {
        data(){
            return{
                options: [0, 1, 2, 3],
                filterValue: 0,
                currentPage: 1,
                pageSize: 5,
                currentTotal: 2,
                tableData: [{
                    date: '2016-05-02',
                    type: '类型',
                    title: '上海市普陀区金沙江路 1518 弄',
                    author: '作者',
                    emergency: '高'
                }, {
                    date: '2016-05-03',
                    type: '类型',
                    title: '上海市普陀区金沙江路 1516 弄',
                    author: '作者',
                    emergency: '低'
                }],
                filter_tableData: [{
                    date: '2016-05-02',
                    type: '类型',
                    title: '上海市普陀区金沙江路 1518 弄',
                    author: '作者',
                    emergency: '高'
                }, {
                    date: '2016-05-03',
                    type: '类型',
                    title: '上海市普陀区金沙江路 1516 弄',
                    author: '作者',
                    emergency: '低'
                }],
            }
        },
        created () {
            // axios.get('http://192.168.209.75:8080/api/notification')
            // .then(response => {
            //     this.tableData = response.data,
            //     this.filter_tableData = response.data;
            //     this.currentTotal = response.data.length;
            // })
            // .catch(e => {
            //     this.errors.push(e)
            // })
        },
        methods:{
            handleChange() {
                if (this.filterValue == 0) this.filter_tableData = this.tableData;
                else {
                    const filterValue = this.filterValue == 1 ? '低' : this.filterValue == 2 ? '中' : '高';
                    this.filter_tableData = this.tableData.filter(row => row.emergency == filterValue);
                }
                this.currentTotal = this.filter_tableData.length;
            },
            handleSizeChange(val) {
                this.pageSize = val;
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
            },
            goAdd(url, value) {
                console.log("value =======>",  value);
                this.$router.push({name: url, params: { id: value }});
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
