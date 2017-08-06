var loginNotAllowView = ['/admin/login', '/admin/register'];
var visitorAllowView = ['^/$', '^/article/?.*', '/admin/(login|register)', '/api/(login|register)'];

module.exports = {
	accessControl(req, res, next) {					  //基本的权限控制
		if (req.session && req.session.user) {
			if (loginNotAllowView.indexOf(req.url) > -1) {   //登录情况下不能访问 登录和注册页面
				res.redirect('/admin/list');
			} else {
				next();
			}
		} else {
			var isMatch = visitorAllowView.some((reg) => {
				return new RegExp(reg).test(req.url);
			});
			if (isMatch) {   //未登录时只能访问 注册和登录接口
				next();
			} else {
				res.json({ code: 1000, data: { msg: "请登录操作" } });
			}
		}
	}
}