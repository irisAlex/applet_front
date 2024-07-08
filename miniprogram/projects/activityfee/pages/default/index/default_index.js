const pageHelper = require('../../../../../helper/page_helper.js');
const cloudHelper = require('../../../../../helper/cloud_helper.js');
const ProjectBiz = require('../../../biz/project_biz.js');
const ProjectSetting = require('../../../public/project_setting.js');
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		cur: 'hot',
		cateList:ProjectSetting.ACTIVITY_CATE,
		repairs: [
			{
			  id: 1,
			  title: '燕保-朝新家园1号楼1单元',
			  status: '未解决',
			  type: '卫浴设施',
			  desc: '卫生间顶部漏水整个单元维修',
			  time: '2023-04-14 11:00'
			},
			{
			  id: 2,
			  title: '燕保-朝新家园2号楼1单元402',
			  status: '未解决',
			  type: '卫浴设施',
			  desc: '卫生间顶部漏水整个单元维修',
			  time: '2023-04-14 11:00'
			},
			{
				id: 3,
				title: '燕保-朝新家园2号楼1单元402',
				status: '未解决',
				type: '卫浴设施',
				desc: '卫生间顶部漏水整个单元维修',
				time: '2023-04-14 11:00'
			  },
			  {
				id: 4,
				title: '燕保-朝新家园2号楼1单元402',
				status: '未解决',
				type: '卫浴设施',
				desc: '卫生间顶部漏水整个单元维修',
				time: '2023-04-14 11:00'
			  },
			  {
				id: 5,
				title: '燕保-朝新家园2号楼1单元402',
				status: '未解决',
				type: '卫浴设施',
				desc: '卫生间顶部漏水整个单元维修',
				time: '2023-04-14 11:00'
			  },
			  {
				id: 6,
				title: '燕保-朝新家园2号楼1单元402',
				status: '未解决',
				type: '卫浴设施',
				desc: '卫生间顶部漏水整个单元维修',
				time: '2023-04-14 11:00'
			  },
			  {
				id: 7,
				title: '燕保-朝新家园2号楼1单元402',
				status: '未解决',
				type: '卫浴设施',
				desc: '卫生间顶部漏水整个单元维修',
				time: '2023-04-14 11:00'
			  },
			  {
				id: 8,
				title: '燕保-朝新家园2号楼1单元402',
				status: '未解决',
				type: '卫浴设施',
				desc: '卫生间顶部漏水整个单元维修',
				time: '2023-04-14 11:00'
			  },	{
				id: 9,
				title: '燕保-朝新家园2号楼1单元402',
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
	},

	_loadList: async function () {
		let opts = {
			title: 'bar'
		}
		await cloudHelper.callCloudSumbit('home/list', {}, opts).then(res => {
			this.setData({
				...res.data
			});
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () { },

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: async function () {
		this._loadList();
	},

	onPullDownRefresh: async function () {
		await this._loadList();
		wx.stopPullDownRefresh();
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	url: async function (e) {
		console.log(4444)
		pageHelper.url(e, this);
	},


	bindCurTap: function (e) {
		let cur = pageHelper.dataset(e, 'cur');
		this.setData({ cur });
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},
})