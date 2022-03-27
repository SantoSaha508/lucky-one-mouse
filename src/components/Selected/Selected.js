import './Selected.css'

const Selected = (props) => {
    const {name} = props.itemName;

        return (
            <div className='select-container'>
                <p>{name}</p>
            </div>
        );
};

export default Selected;