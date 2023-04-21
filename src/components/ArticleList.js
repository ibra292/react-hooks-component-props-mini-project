import React from "react";
import Article from "./Article";

function ArticleList(props){
    const {data } = props
    return(
        <main>
            {data.map(item =>{
                <Article key={data.id}
                title={item.title}
                date={item.date}
                preview={item.preview} />
            })}
        </main>
    )
}

export default ArticleList