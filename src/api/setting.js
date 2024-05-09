import {ax} from './index'


export async function getSetting(){
    return await ax.get('/api/setting')
}