/**
 * Notes: 错误代码定义
 * Date: 2020-09-05 04:00:00 
 */
module.exports = {
	SUCC: 200,
	SVR: 500, // 服务器错误  
	LOGIC: 1600, //逻辑错误 
	DATA: 1301, // 数据校验错误 
	HEADER: 1302, // header 校验错误  


	//2000开始为业务错误代码，

	ADMIN_ERROR: 2401, //管理员错误
	WORK_ERROR: 2501 //服务者错误
}