import Mock from 'mockjs'

Mock.mock('/api/project', 'get', {
    code: 0,
    msg: "",
    data:[
        {
            id: '001',
            name: "驾考宝典首页",
            url: "https://github.com/KK5241/drive",
            description: ["模仿驾考宝典首页", "技术栈：vue2"],
            thumb: "https://i-2.tts8.com/2021/0924/5c710417f7b54fbfa8a735387331d0bd.png",
            order: 1
          },
    ]
})