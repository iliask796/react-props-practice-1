function NameReversed(props) {
    return <p className="name-reversed">Also, {props.name} backwards is {props.reverse(props.name)}</p>
}

export default NameReversed