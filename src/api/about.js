import {ax} from '@/api/index'

export async function getAbout(){
    return await ax.get('/api/about')
}