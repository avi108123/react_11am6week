

function Card({data}){

    let a ="john";



    return (
        <div style={{
            height:"400px",
            width:"300px",
            border:"2px solid black",
            borderRadius:"12px",
            backgroundColor:"lightgray",
            overflow:"hidden",
        }} >

          
            <img style={{width:"100%",height:"35%"}} src={data.thumbnail} alt="" />
            <div>

                  <h1>{a}</h1>
                <h2>{data.title}</h2>
                <p>{data.price}</p>
                <p>{data.description}</p>
            </div>
        </div>
    )
}


export default Card;