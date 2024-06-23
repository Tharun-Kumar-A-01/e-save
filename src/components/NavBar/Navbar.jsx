"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link.js";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image.js";
import MenuClose from "./menu-icons/MenuClose.jsx";
import MenuOpen from "./menu-icons/MenuOpen.jsx";
import { Button } from "@nextui-org/react";
import Account from "./menu-icons/Account.jsx";

const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weights: ["400", "700"], // You can specify the weights you need
});


const links = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Savings",
		path: "/savings",
	},
	{
		title: "About",
		path: "/about",
	},
];

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const pathName = usePathname();
  const [session, setSession] = React.useState(true)
  
	return (
		<nav className="w-screen h-16 bg-transparent backdrop-blur-sm z-50 border-b-[1px] border-[#5c5c5c] fixed">
			<div className="bg-background bg-opacity-85 w-full h-full flex items-center justify-between px-5  md:px-10 lg:px-32 ">
				<div className="font-bold flex flex-row items-center">
					<button
						onClick={() => setIsMenuOpen((prev) => !prev)}
						className={`sm:hidden mr-3 animate-appearance-in`}
					>
						{" "}
						{isMenuOpen ? <MenuClose /> : <MenuOpen />}
					</button>
          <Image src="/Logo.png" alt="Logo" className="rounded-full mr-2 border-[2px] border-primary" width={40} height={40}/>
					<p>E-Save</p>
				</div>
				<div className="hidden sm:block animate-appearance-in">
					{links.map((link) => {
						return (
							<Link
								key={link.path}
								href={link.path}
								className={`${
									link.path == pathName ? "text-primary font-semibold" : "text-text"
								} px-4 `}
							>
								{link.title}
							</Link>
						);
					})}
				</div>
				<div className="flex flex-row gap-3 items-center">
					{
						session ? (
							<Account className={`h-12 w-12`}/>
						):(
							<Button endContent={<Account/>} variant="flat" color="primary" className="rounded-full">Sign Up</Button>
						)
					}
				</div>
			</div>
			{isMenuOpen && (
				<div className="sm:hidden absolute top-20 z-20 left-5 min-w-1/5 max-w-fit flex flex-col shadow-xl shadow-black bg-background rounded-lg animate-appearance-in">
					{links.map((link) => {
						return (
							<>
								<Link
									key={link.path}
									href={link.path}
									className={`${
										link.path == pathName ? "text-primary" : "text-text"
									} px-4 py-2 font-semibold`}
								>
									{link.title}
								</Link>
								{!(links.at(-1).path === link.path) && <></>}
							</>
						);
					})}
				</div>
			)}
		</nav>
	);
}
