import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers :{
        Authorization: 'Client-ID i_o1D9w-iXycmTaXPsmFkPerFEneS4KIDMzdbUM9-O0'
    }
})
