import Mock from "mockjs";
import url from '@/assets/Snipaste_2024-04-05_12-25-41.png'
Mock.mock('/api/setting','get',{
	code: 0,
	msg: "",
	data: {
    avatar: "//img1.baidu.com/it/u=3947481270,847894381&fm=253&fmt=auto&app=138&f=JPEG?w=480&h=480", 
    siteTitle: "白小白的个人博客", 
    github: "https://github.com/settings/profile", 
    qq: "11076632",
    qqQrCode:  url, 
    weixin: "XXXXXXXXXX", 
    weixinQrCode:url,
    mail: "11076632@qq.com", 
    icp: "冀ICP备000000号", 
    githubName: "白小白", 
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
	}
})