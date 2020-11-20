import Vue from 'vue'
import Router from 'vue-router'
import productionSubject from '@/components/productionSubject/productionSubject'
import home from '@/components/common/home'
import threeProductsCertification from '@/components/threeProductsCertification/threeProductsCertification'
import addThreeProducts from '@/components/threeProductsCertification/addThreeProducts'
import regulatoryRecord from '@/components/regulatoryRecord/regulatoryRecord'
import addRegulatoryRecord from '@/components/regulatoryRecord/addRegulatoryRecord'
import rectificationRecord from '@/components/regulatoryRecord/rectificationRecord'
import management from '@/components/management/management'
import businessProducts from '@/components/management/businessProducts'
import companyDetails from '@/components/management/companyDetails'
import notification from '@/components/notification/notification'
import no_notice from '@/components/notification/notice'
import no_sms from '@/components/notification/sms'
import no_detail from '@/components/notification/detail'

// 企业
import cp_productionSubject from '@/components/company/productionSubject/productionSubject' //生产主体
import cp_editProduction from '@/components/company/productionSubject/editProduction' // 修改生产主体
import cp_businessProducts from '@/components/company/businessProducts/businessProducts' // 主营产品 goProductBatch
import cp_productBatch from '@/components/company/businessProducts/productBatch' //产品批次
import cp_jobDefinition from '@/components/company/businessProducts/jobDefinition' //作业定义
import cp_varietyDefinition from '@/components/company/businessProducts/varietyDefinition' //品种定义
import cp_editProduct from '@/components/company/businessProducts/editProduct' //修改产品
import cp_thirdRecords from '@/components/company/businessProducts/thirdRecords' //第三方抽检记录
import cp_attributeManagement from '@/components/company/businessProducts/attributeManagement' //属性管理
import cp_definitionLevel from '@/components/company/businessProducts/definitionLevel' //定义等级
import cp_inventoryDynamics from '@/components/company/businessProducts/inventoryDynamics' //库存动态

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            redirect:"cp_productionSubject",
            children:[
                {
                    path: '/notification',
                    name: 'notification',
                    component: notification
                },
                {
                    path: '/no_sms',
                    name: 'no_sms',
                    component: no_sms
                },
                {
                    path: '/no_notice',
                    name: 'no_notice',
                    component: no_notice
                },
                {
                    path: '/no_detail',
                    name: 'no_detail',
                    component: no_detail
                },
                {
                    path: '/productionSubject',
                    name: 'productionSubject',
                    component: productionSubject
                },
                // {
                //     path: '/threeProductsCertification',
                //     name: 'threeProductsCertification',
                //     component: threeProductsCertification
                // },
                {
                    path: '/addThreeProducts',
                    name: 'addThreeProducts',
                    component: addThreeProducts
                },
                {
                    path: '/regulatoryRecord',
                    name: 'regulatoryRecord',
                    component: regulatoryRecord
                },
                {
                    path: '/addRegulatoryRecord',
                    name: 'addRegulatoryRecord',
                    component: addRegulatoryRecord
                },
                {
                    path: '/rectificationRecord',
                    name: 'rectificationRecord',
                    component: rectificationRecord
                },
                {
                    path: '/management',
                    name: 'management',
                    component: management
                },
                {
                    path: '/businessProducts',
                    name: 'businessProducts',
                    component: businessProducts
                },
                {
                    path: '/companyDetails',
                    name: 'companyDetails',
                    component: companyDetails
                },
                {
                    path: '/cp_productionSubject',
                    name: 'cp_productionSubject',
                    component: cp_productionSubject
                },
                {
                    path: '/cp_editProduction',
                    name: 'cp_editProduction',
                    component: cp_editProduction
                },
                {
                    path: '/cp_businessProducts',
                    name: 'cp_businessProducts',
                    component: cp_businessProducts
                },
                {
                    path: '/cp_productBatch',
                    name: 'cp_productBatch',
                    component: cp_productBatch
                },
                {
                    path: '/cp_jobDefinition',
                    name: 'cp_jobDefinition',
                    component: cp_jobDefinition
                },
                {
                    path: '/cp_varietyDefinition',
                    name: 'cp_varietyDefinition',
                    component: cp_varietyDefinition
                },
                {
                    path: '/cp_editProduct',
                    name: 'cp_editProduct',
                    component: cp_editProduct
                },
                {
                    path: '/cp_thirdRecords',
                    name: 'cp_thirdRecords',
                    component: cp_thirdRecords
                },
                {
                    path: '/cp_attributeManagement',
                    name: 'cp_attributeManagement',
                    component: cp_attributeManagement
                },
                {
                    path: '/cp_definitionLevel',
                    name: 'cp_definitionLevel',
                    component: cp_definitionLevel
                },
                {
                    path: '/cp_inventoryDynamics',
                    name: 'cp_inventoryDynamics',
                    component: cp_inventoryDynamics
                },
            ]
        },
        {
            path: '/threeProductsCertification',
            name: 'threeProductsCertification',
            component: threeProductsCertification,
        },
    ]
})
