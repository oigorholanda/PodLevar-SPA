import { color1, color12, color14 } from "@/constants/colors";
import { styled } from "styled-components";

export default styled.button`
    background-image: linear-gradient(to right, ${color12}, ${color1}, ${color14}, ${color12});  
    background-size: 300% 100%;
    width: 100%;
    height: 40px;
    box-shadow: 0 4px 13px 0 rgba(229, 66, 10, 0.6);
    color: black;
    border: none;
	border-radius: 10px;
	text-transform: uppercase;
	font-size: 0.65em;
    font-weight: 600;
    margin: 20px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
	&:hover {
        color: black;
        text-shadow: 2px 2px 4px white;
        transition: all .4s ease-in-out;
        background-position: 110% 0;
    }
`
