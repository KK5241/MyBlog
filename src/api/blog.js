import {ax} from './index'
export  async function getBlogType(){
    return await ax.get('/api/blogtype')
}

export async function getBlog(page=1,limit=10,categoryid = -1){
    console.log(page,limit,categoryid);
    return await ax.get('/api/blog',{
        params:{
            page,
            limit,
            categoryid
        }
    })
}

export async function getongBlog(id){
    return await ax.get(`/api/blog/${id}`)
}

export async function postComment(commentInfo){
    return await ax.post('/api/comment',commentInfo)
}

export async function getComment(page=1,limit=10,blogid=-1,keyword=''){
    return await ax.get('/api/comment',{
        params:{
            page,
            limit,
            blogid,
            keyword
        }
    })
}