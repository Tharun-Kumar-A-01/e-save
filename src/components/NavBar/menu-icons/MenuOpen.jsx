const MenuOpen = (props) => {

	const fill = props.fill | "white"

	return (
		<svg
							width="279"
							height="225"
							viewBox="0 0 279 225"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								width="279"
								height="31"
								rx="15.5"
								fill={fill}
							/>
							<rect
								y="97"
								width="279"
								height="31"
								rx="15.5"
								fill={fill}
							/>
							<rect
								y="194"
								width="279"
								height="31"
								rx="15.5"
								fill={fill}
							/>
						</svg>
	)

}
export default MenuOpen;