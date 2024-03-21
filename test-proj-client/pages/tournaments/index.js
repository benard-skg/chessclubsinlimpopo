import Link from "next/link"

// function Tournaments({ tournaments }){

//     return (
//         <>
//             <h1 className="lg:mx-10 mx-4">Tournaments List Page</h1>

//             <div className="mt-8 lg:mx-10 mx-4">
//                 {tournaments.map( data => (
//                     <div key={data.id}>
//                         <Link legacyBehavior href={`/tournaments/${[data.id]}`} as={`/tournaments/${[data.id]}`}>
//                             <h3 className="font-bold cursor-pointer hover:text-cyan-600">{data.name}</h3>
//                         </Link>
                        
//                     </div>
//                 ))}
//             </div>
//         </>
//     )
// }




const TournamentCard = ({ tournament }) => {
  return (
    <div className="bg-white shadow-lg rounded-sm overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src={`${tournament.image}`} alt={tournament.name} />
      <div className="p-4">
        <Link legacyBehavior href={`/tournaments/${[tournament.id]}`} as={`/tournaments/${[tournament.id]}`}><h2 className="text-xl font-semibold mb-2 cursor-pointer hover:text-sky-600 tracking-tightest leading-tight">{tournament.name}</h2></Link>
        <p className="text-sm text-gray-600 mb-2">Date: {tournament.date}</p>
        <p className="text-sm text-gray-600">Location: {tournament.location}</p>
      </div>
    </div>
  );
};

const Tournaments = ({ tournaments }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {tournaments.map((tournament, index) => (
          <TournamentCard key={index} tournament={tournament} />
        ))}
      </div>
    </div>
  );
};












export async function getServerSideProps(context){

    const res = await fetch("http://localhost:4200/tournaments")

    const data = await res.json()

    return {
        props: {
            tournaments: JSON.parse(JSON.stringify(data))
        }
    }
}

export default Tournaments