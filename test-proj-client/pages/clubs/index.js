import Link from "next/link"

function Clubs({ clubs }){

    return (
        <>
                <h1 className="lg:mx-10 mx-4 mt-8 mb-12 font-semibold text-2xl text-center">Clubs Page</h1>

                <div className="lg-mx-10 mx-4">
                    {clubs.map(club => (
                        <div key={club.id}>
                            <Link legacyBehavior href={`/clubs/${[club.id]}`} as={`/clubs/${[club.id]}`}><h3 className=" font-spaceMono font-semibold cursor-pointer hover:text-cyan-600">{club.name}</h3></Link>
                        </div>
                    ))}
                </div>
        </>
    )
}

export default Clubs

export async function getServerSideProps(){

    const res = await fetch("http://localhost:4300/clubs")

    const data = await res.json() 

    return {
        props: {
            clubs: JSON.parse(JSON.stringify(data))
        }
    }
}