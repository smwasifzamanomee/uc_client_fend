import Link from "next/link"

const Index = () => {
    return (
        <>
            <nav>
                <ul className="flex gap-6 relative justify-center pt-10">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/OurFleet">Our Fleet</Link>
                    </li>
                    <li>
                        <Link href="/Services">Service Rates</Link>
                    </li>
                    <li>
                        <Link href="/todos">Feature</Link >
                    </li>
                    <li>
                        <Link href="/About">About Us</Link>
                    </li>
                    <li>
                        <Link href="/Contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
            <header>
                <div className="text-3xl text-center pt-16">
                    <h1 className="text-red-600">Welcome to my demo project</h1>
                    <p className="text-yellow-400 mt-4">Love with Next-js</p>
                    <a href="#">omeeDev</a>
                </div>
            </header>
        </>

    )
}

export default Index