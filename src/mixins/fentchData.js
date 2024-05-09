export function fentchData(typeData = null) {
    return {
        data(){
            return {
                isLoading:true,
                dataList:typeData
            }
        },
        async created(){
            const resp = await this.fentch()
            this.dataList = resp
            this.isLoading = false
        }
    }
}