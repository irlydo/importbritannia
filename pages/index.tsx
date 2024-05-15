import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import LinkForm from "../components/linkform";

export default function Home() {
  return (
    <>
    <Head>
      <title>Import Britannia</title>
    </Head>
      <Header />



      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div>
                <h1 class="text-4xl font-semibold text-center mb-8 text-black">
                  How it works:
                </h1>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <ol class="list-decimal space-y-4 pl-6">
                    <li>
                      <p class="font-medium text-gray-900">
                        Paste a link from eBay or Amazon UK
                      </p>
                      <p class="text-gray-500">
                        Simply copy and paste the product link into the input
                        box.
                      </p>
                    </li>
                    <li>
                      <p class="font-medium text-gray-900">
                        Adjust quantity and calculate price
                      </p>
                      <p class="text-gray-500">
                        Change the quantity and instantly see the updated price.
                      </p>
                    </li>
                    <li>
                      <p class="font-medium text-gray-900">Submit and pay</p>
                      <p class="text-gray-500">
                        Proceed to checkout and complete your payment securely.
                      </p>
                    </li>
                    <li>
                      <p class="font-medium text-gray-900">
                        Check emails for order updates
                      </p>
                      <p class="text-gray-500">
                        Stay informed about your order status through email
                        notifications.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LinkForm />

      <Footer />
    </>
  );
}
