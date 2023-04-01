import { api } from '../api'

export const getList = async () => {
    try {
        const resut = await api.get('/list-items')
        return resut.data;
    } catch (error) {
       // alert("erro ao retornar dados da lista")
        return {error}
    }
}