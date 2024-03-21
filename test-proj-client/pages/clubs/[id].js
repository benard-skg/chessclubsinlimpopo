function Club({ club, id }){

    return (
        <>
            <h1>Club Page</h1>

            <div>
                {club.map(club => (
                    <div key={id}>
                        {club.name}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Club

export async function getServerSideProps(context){

    const { params } = context

    const { id } = params

    const res = await fetch(`http://localhost:4300/clubs/?id=${id}`)

    const data = await res.json()

    return {
        props: {
            club: data,
            id
        }
    }
}