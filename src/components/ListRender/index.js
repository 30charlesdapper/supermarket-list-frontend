import "./index.css";
import { ListCard } from "../ListCard";

export const ListRender = ({list, onEdit}) => {
    if (list?.length === 0) {
    return (
        <h3> Sua lista esta vazia, clique em "Adicionar" para incluir novos itens</h3>
    )
}

return ( 
    <div className="list-render-container">
    {
        list.map((item) => (
             <ListCard onClick={onEdit} item={item} key={item?._id} />
        ))
    }    
</div>
)
}