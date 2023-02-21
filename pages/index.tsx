import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<>
			<Head>
				<title>WEGA</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Navbar />
				<h1 className="text-3xl font-bold underline">Hello World!</h1>
			</main>
		</>
	);
}