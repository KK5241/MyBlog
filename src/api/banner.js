import {ax} from './index'

export async function getBanner(){
    return await ax.get('/api/banner')
}
