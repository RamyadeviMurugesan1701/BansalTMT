import AxiosInstance from "../axiosservice";

export const RewardsApi = {
        getState: async function () {
                return await AxiosInstance.get('core/state/')
        },
        addAddress: async function(data){
                return await AxiosInstance.post('account/address/',data)
        },
        getRedeemtion: async function(data){
                return await AxiosInstance.post(`purchase/redemption/${data}/`)
        },
        updateAddress :  async function(data,id){
                return await AxiosInstance.put('account/address-update/'+id+'/', data)
        },
        deleteAddress :  async function(id){
                return await AxiosInstance.delete('account/address-delete/'+id+'/')
        }
}

