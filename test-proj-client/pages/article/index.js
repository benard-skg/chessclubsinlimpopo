import Article from "../../components/ArticleCard"

/**
 * export async function gSSP(context){
 *  const { params } = context
 *  const { categories } = params // from the dynamic route parameter name
 * 
 *  const response = await fetch 
 * }
 * 
 */

export async function getServerSideProps(){

    const res = await fetch("http://localhost:4100/articleMeta")

    const data = await res.json()

    return {
        props: { data: JSON.parse(JSON.stringify(data))}
    }
}

export default function ( { data }){

    return (
        <div className="max-w-2xl mx-auto p-4">

            <div className="mb-4">
                <h1 className="text-3xl text-gray-900 font-bold pl-4 tracking-tightest">LATEST NEWS</h1>
            </div>

            <div className="mb-4">
                {data.map( articleCard => (
                    <div key={articleCard.id}>
                       <Article 
                       id={articleCard.id}
                       image={articleCard.image}
                       tag={articleCard.tag}
                       headline={articleCard.headline}
                       textContent={articleCard.textContent}
                       />     
                    </div>
                ))}
            </div>
        </div>
    )
}