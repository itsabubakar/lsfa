import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, id } = feature;

  return (
    <Link href={`/player/${id}`} key={id} className="block">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 w-[230px] rounded-lg border border-white bg-white shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark "
      >
        <div className="relative flex  h-[230px] items-center justify-center">
          <img src={icon} className="rounded-md" alt="player image" />
        </div>
        <div className="flex flex-col p-2">
          <h3 className="mb-2 mt-4 text-lg font-semibold text-black dark:text-white xl:text-xl">
            {title}
          </h3>
          <p>{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default SingleFeature;
