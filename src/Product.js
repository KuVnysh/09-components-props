function Product (props) {
        console.log(props);
        return (
            <div className="Body">
                <div className="left_side">
                    <div className="first_line"> 
                        <img id="author" src={props.author_img} alt=''/> 
                        <p>{props.authors_name} in {props.topic} · {props.date}</p> 
                    </div>
                    <h3>{props.title}</h3> 
                    <p>{props.summary}</p> 
                </div>
                <img id="img" src={props.img} alt=''/>
            </div>
        )
    }
export default Product;