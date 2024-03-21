// pages/article/[id].js
import ArticlePage from "../../components/ArticlePage";

function Article({ article, id }){

  console.log(article[0])

  return (
    <>
      {article.map( page => (
        <div key={page.id}>
          <ArticlePage
          id={id}
          headline={page.headline}
          imageMain={page.image}
          description={page.description}
          author={page.author}
          imageContent={page.image}
          imageContentDescription={page.description}
          />
        </div>
      ))}
    </>
  )
}

export default Article

export async function getServerSideProps(context){
  const { params } = context
  const { id } = params

  const response = await fetch(`http://localhost:4100/articleMeta/?id=${id}`)

  const data = await response.json()

  return {
    props: {
      article: data,
      id
    }
  }

}