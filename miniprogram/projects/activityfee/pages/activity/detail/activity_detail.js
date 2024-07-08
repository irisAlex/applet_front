const cloudHelper = require('../../../../../helper/cloud_helper.js');
const pageHelper = require('../../../../../helper/page_helper.js');
const ProjectBiz = require('../../../biz/project_biz.js');
const projectSetting = require('../../../public/project_setting.js');
const PassportBiz = require('../../../../../comm/biz/passport_biz.js');
const ActivityBiz = require('../../../biz/activity_biz.js');

Page({
    /**
     * 页面的初始数据
     */
    data: {
        isLoad: true,
        repairs: [{
                id: 1,
                title: '考情分析',
                status: '未解决',
                type: '卫浴设施',
                desc: '卫生间顶部漏水整个单元维修',
                time: '2023-04-14 11:00'
              },
              {
                id: 2,
                title: '岗位信息',
                status: '未解决',
                type: '卫浴设施',
                desc: '卫生间顶部漏水整个单元维修',
                time: '2023-04-14 11:00'
              },
              {
                  id: 3,
                  title: '报考条件',
                  status: '未解决',
                  type: '卫浴设施',
                  desc: '卫生间顶部漏水整个单元维修',
                  time: '2023-04-14 11:00'
                },
                {
                  id: 4,
                  title: '上岸课程',
                  status: '未解决',
                  type: '卫浴设施',
                  desc: '卫生间顶部漏水整个单元维修',
                  time: '2023-04-14 11:00'
                }
            ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        ProjectBiz.initPage(this);
        if (!pageHelper.getOptions(this, options)) return;
        this._loadDetail();

        wx.setNavigationBarColor({
            backgroundColor: '#fffff',
            // frontColor: '#00000',
        })
    },

    _loadDetail: async function () {
        let id = this.data.id;
        if (!id) return;

        let params = {
            id,
        };
        let opt = {
            title: 'bar'
        };
        let activity = await cloudHelper.callCloudData('activity/view', params, opt);
        // if (!activity) {
        //     this.setData({
        //         isLoad: null
        //     })
        //     return;
        // }

        this.setData({
            isLoad: true,
            activity,
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () { },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () { },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () { },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () { },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: async function () {
        await this._loadDetail();
        wx.stopPullDownRefresh();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () { },

    bindJoinTap: async function (e) {
        if (!await PassportBiz.loginMustCancelWin(this)) return;

        wx.navigateTo({
            url: '../join/activity_join?id=' + this.data.activity._id,
        });
    },

    bindCancelJoinTap: async function (e) {
        if (!await PassportBiz.loginMustCancelWin(this)) return;
        let cb = () => {
            wx.redirectTo({
                url: 'activity_detail?id=' + this.data.id,
            })
        }

        let isPay = this.data.activity.ACTIVITY_METHOD ? true : false;
        await ActivityBiz.cancelMyActivityJoin(this.data.activity.myActivityJoinId, cb, isPay);
    },

    bindOpenMapTap: function (e) {
        let address = pageHelper.dataset(e, 'address');
        let geo = pageHelper.dataset(e, 'geo');
        ActivityBiz.openMap(address, geo);
    },
    url: function (e) {
        pageHelper.url(e, this);
    },

    onPageScroll: function (e) {
        // 回页首按钮
        pageHelper.showTopBtn(e, this);

    },

    onShareAppMessage: function (res) {
        return {
            title: this.data.activity.ACTIVITY_TITLE,
            imageUrl: this.data.activity.ACTIVITY_OBJ.cover[0]
        }
    }
})