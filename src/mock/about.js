import Mock from 'mockjs'
Mock.mock('/api/about','get',{
    code: 0,
	msg: "",
	data: "https://juejin.cn/user/2412778390295128"
})