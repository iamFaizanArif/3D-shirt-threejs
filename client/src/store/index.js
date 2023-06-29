import {proxy} from "valtio";

// It is just like as useContext, that we can use it globally
const state=proxy({
    // It means we are in home page or not
    intro:true,
    color:"#EFBD4E",
    isLogoTexture:true,         // Currently we are displaying logo or not
    isFullTexture:false,
    logoDecal:"./threejs.png",  // Initial logo
    fullDecal:"./threejs.png",   // Initial shirt texture
});
export default state;