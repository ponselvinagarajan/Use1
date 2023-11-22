function Use2(props){
    const {data3}=props
    const store=data3.map((e)=>{
    return(
         <div className="items">
            <li>{e.name}</li>
            <li>{e.skills[0].name}</li>
            {/* <h2>{e.skills[0].type}</h2>
            <h2>{e.skills[1].name}</h2>
            <h2>{e.skills[1].type}</h2> */}

         </div>
    )
    })
    return(
        <div  className="items">
            <ol>
            {store}
            </ol>

        </div>
    )
}
export default Use2;