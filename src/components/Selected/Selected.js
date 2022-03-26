import './Selected.css'

const Selected = (props) => {
    const {name} = props.itemName;
    
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default Selected;