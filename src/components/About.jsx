import React from "react";
import { motion } from "framer-motion";
import {Tilt} from "react-tilt";
import {styles} from "../styles.js";
import {services} from "../constants/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {useTranslation} from "react-i18next";
import {SectionWrapper} from "../hoc"


const ServiceCard = ({title, icon, index}) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right","spring",0.5 * index, 0,75)}
                className="w-full green-pink-gradient p-1 rounded-[20px]"
            >
                <div options={{
                    scale: 1,
                    max: 45,
                    speed: 1000,
                }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img
                        src={icon}
                        alt={title}
                        className="w-[60px] h-[60px] object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold">
                        {title}
                    </h3>
                </div>

            </motion.div>
        </Tilt>
    )
}
const About = () => {
    const {t} = useTranslation();

    return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>{t("Introduction")}</p>
            <h2 className={styles.sectionHeadText}>{t("OverView")}</h2>
        </motion.div>
        <motion.p variants={fadeIn("","",0.1,1)}
                  className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            {t("AboutDescription")}
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => (
               <ServiceCard key={service.title} index={index} {...service}/>
            ))}

        </div>
    </>
  );
};

export default SectionWrapper(About, "about")
