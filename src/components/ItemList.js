import Item from './Item';

const ItemList = ({items}) => {
  return (
        <div>
            {items.map((el,i)=>(
                <Item
                    id={el.id}
                    title={el.title}
                    description={el.description}
                    price={el.price}
                    image={el.image}
                    key={i}
                />
            ))} 
        </div>
  );
};

export default ItemList