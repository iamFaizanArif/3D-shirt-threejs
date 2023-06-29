import React from 'react';
import {motion, AnimatePresence} from "framer-motion";
import {useSnapshot} from "valtio";
import {headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation} from "../config/motion.js";
import state from "../store";
import {CustomButton} from "../components"

const Home = () => {
    const snap = useSnapshot(state);
    return (
        // It enables the animation of component
        <AnimatePresence>
            {/* If we are on home page then we will display the jsx*/}
            {snap.intro && (
                // Some animation attached with this section
                <motion.section className="home" {...slideAnimation("left")}>
                    <motion.header {...slideAnimation("down")}>
                        <img
                            src="./threejs.png"
                            alt="logo"
                            className="w-8 h-8 object-contain"
                        />
                    </motion.header>
                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                LET'S <br className="xl:block hidden"/> DO IT.
                            </h1>
                        </motion.div>
                        <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
                            <p className="max-w-md font-normal text-gray-600 text-base">
                                Create your unique and exclusive shirt with our brand-new 3D customization
                                tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
                            </p>

                            {/* handleClick Update valito state*/}
                            <CustomButton
                                type="filled"
                                title="Customize It"
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                                handleClick={() => state.intro = false}
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default Home;
