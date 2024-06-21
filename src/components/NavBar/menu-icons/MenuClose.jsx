const MenuClose = (props) => {

	const fill = props.fill | "white"

	return (
		<svg
							width="221"
							height="221"
							viewBox="0 0 221 221"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="22.9203"
								width="279"
								height="31"
								rx="15.5"
								transform="rotate(45 22.9203 0)"
								fill={fill}
							/>
							<rect
								x="0.898453"
								y="198.181"
								width="279"
								height="31"
								rx="15.5"
								transform="rotate(-45 0.898453 198.181)"
								fill={fill}
							/>
						</svg>
	)

}
export default MenuClose;