import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Head from "next/head";
import Footer from "@/components/footer";
import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <div className="min-h-screen bg-gray-100 py-1 flex flex-col justify-center sm:py-6">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-2 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex justify-center">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden">
                      {/* Replace the src and alt attributes with the actual image */}
                      <Image
                        src="/me.jpg"
                        alt="Daniel"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-center text-xl font-semibold mb-2">
                      Daniel
                    </p>
                    <p className="text-center text-gray-500">Creator</p>
                  </div>
                  <div className="mt-8">
                    <blockquote className="italic text-center text-gray-600">
                      "Import Britannia is solely owned and created by me, Daniel. I have spent over six months of my life in Turkey, since 2021. When I arrived in Turkey, I quickly learned that import prices were extremely high, especially for cars. I realized that every imported car costs 2-3x more in Turkey than back home in the U.K. I was shocked, to say the least. I realized that imported products are taxed highly as well. Technology, even higher. I found it hard to find products with the same ease, so I wanted to use my 6 years of selling experience with eBay and Amazon to good use, by creating this service for Turks wanting to buy products from the U.K.
                      <br></br>
                      <br></br>
                      If we can find it, we can send it.
                      <br></br>
                      <br></br>
                      Once you have selected and priced up the items that you are interested in, you can complete the payment, I will make the order, prepare the labels/shipping, and send it out to you.
                      <br></br>
                      <br></br>
                      With this service, my aim is to connect you to a whole new world of variety, global trade, interesting products that you couldn't usually find elsewhere."
                    </blockquote>
                  </div>
                </div>
                <div className="flex justify-center">
                <Link href="/">
                  <button className="px-4 py-2 mt-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Get Started
                  </button>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;