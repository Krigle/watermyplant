import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import { Sprout, PenLine, Droplets, MailOpen, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src="/logo-1.png"
                  alt="logo"
                  width={45}
                  height={45}
                  className="w-full"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Water Your{" "}
                <span className="bg-green-600 px-2 text-white ">Plants</span>{" "}
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Never miss another watering,
                <span className="font-semibold"> your personalised</span>{" "}
                watering reminder. Simply sign up, enter your plants details,
                and we'll take care of the rest, sending you a reminder when
                it's time to water.
              </p>
              <div className="flex justify-center">
                <ul className="flex pt-10 pb-10 space-x-10">
                  <li className="flex flex-col items-center space-y-2">
                    <span className="text-5xl">1.</span>
                    <p>Sign Up</p>
                    <PenLine className="h-[60px] w-20 stroke-[1px]" />
                  </li>
                  <li className="flex flex-col items-center space-y-2">
                    <span className="text-5xl">2.</span>
                    <p>Add Your Plants</p>
                    <Sprout className="h-[60px] w-20 stroke-[1px] text-green-600" />
                  </li>
                  <li className="flex flex-col items-center space-y-2">
                    <span className="text-5xl">3.</span>
                    <p>Get Reminders</p>
                    <MailOpen className="h-[50px] w-20 stroke-[1px]" />
                  </li>
                  <li className="flex flex-col items-center space-y-2">
                    <span className="text-5xl">4.</span>
                    <p>Water Your Plants</p>
                    <Droplets className="h-[60px] w-20 stroke-[1px] text-blue-600" />
                  </li>
                </ul>
              </div>
              <div className="flex flex-row items-center mt-8 ">
                <h1 className="text-2xl">
                  ...and then watch them...{" "}
                  <span className="text-4xl  relative before:absolute before:bg-green-600/50 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500 cursor-none">
                    <span className="relative">Grow</span>
                  </span>
                </h1>
                <Flower2 className="h-[80px] w-20 stroke-[1px] text-green-600  mt-4 ml-4 " />
                <Button className=" bg-green-600 hover:bg-green-600/50 ml-5">
                  <Link href="/signup"> Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* <section>
        <MaxWidthWrapper> More Marketing Copy</MaxWidthWrapper>
      </section> */}
    </div>
  );
}
