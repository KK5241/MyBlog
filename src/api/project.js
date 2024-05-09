import {ax} from '@/api/index'

export async function getProject(){
    return await ax.get('/api/project')
}