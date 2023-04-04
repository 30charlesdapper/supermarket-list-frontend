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

export const createItem = async (item) => {
    try {
        const resut = await api.post('/list-item', {
            ...item,
        })
        return resut.data;
    } catch (error) {
       // alert("erro ao salvar novo item na lista")
        return {error}
    }
}

export const updateItem = async (id, item) => {
    try {
        const resut = await api.put(`/list-item/${id}`, {
            ...item,
        })
        return resut.data;
    } catch (error) {
       // alert("erro ao salvar novo item na lista")
        return {error}
    }
}

export const deleteItem = async (id) => {
    try {
        const resut = await api.delete(`/list-item/${id}`)
        return resut.data;
    } catch (error) {
       // alert("erro ao deletar item da lista")
        return {error}
    }
}