import Navbar from "./NavBar"

export default function Layout ({children}){

    return (
        <div className="font-mono tracking-tighter leading-tight"> {/* For testing remove when decided on fonts for projects */}
            <Navbar />
            {children}
        </div>
    )
}