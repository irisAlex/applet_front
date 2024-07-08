/**
 * Notes: 定时器模块控制器
 * Date: 2023-04-15 19:20:00 
 * 
 */

const BaseProjectController = require('./base_project_controller.js');
const ActivityService = require('../service/activity_service.js');

class JobController extends BaseProjectController {
	// 定时器执行
	minuteJob() {
		console.log('DO minuteJob Begin...')

		let service = new ActivityService();
		service.minuteJob();

		console.log('DO minuteJob END.')
	}
}

module.exports = JobController;