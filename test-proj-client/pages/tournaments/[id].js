

function Tournament({ tournament, id}){

    return (
        <>
            <div className="mt-8">
                {tournament.map( tourney => (
                    <div key={id} className="ml-4">
                        <h1 className="text-center font-sans font-bold text-2xl">{tourney.name}</h1>
                    </div>
                ))}
            </div>  
        </>

    )
}

export default Tournament

export async function getServerSideProps(context){

    const { params } = context

    const { id } = params

    const res = await fetch(`http://localhost:4200/tournaments/?id=${id}`)

    const data = await res.json()

    console.log(data)

    return {
        props: { 
            tournament: JSON.parse(JSON.stringify(data)), 
            id
        }
    }
}