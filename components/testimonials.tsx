import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  return (
    <section id="team">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Partners</h2>
            {/* <p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p> */}
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <div className="text-gray-700 font-medium flex justify-center mt-6 pt-5 border-t border-gray-700">
                {/* <cite className="text-gray-200 not-italic"></cite>  */}
                <a
                  className="text-[#EB5161] text-center hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#team"
                >
                  ARB
                </a>
              </div>
            </div>

            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img
                src="https://images.ctfassets.net/c5bd0wqjc7v0/3dFdY6GvgLgCIXmBiN6eiA/d4acc5d4c5d557566cf0e46f9b58de43/icon-buy-and-sell.svg"
                alt=""
              />
              <div className="text-gray-700 font-medium flex justify-center mt-6 pt-5 border-t border-gray-700">
                <a
                  className="text-[#EB5161] text-center hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#team"
                >
                  Coinbase
                </a>
              </div>
            </div>

            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <img
                src="https://th.bing.com/th/id/R.95bf06d513ed7ae2ea7ee2457a8daf91?rik=IfsTHJ7lZxWswQ&pid=ImgRaw&r=0"
                alt=""
              />
              <div className="text-gray-700 font-medium flex justify-center mt-6 pt-5 border-t border-gray-700">
                <a
                  className="text-[#EB5161] text-center hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#team"
                >
                  1inch
                </a>
              </div>
            </div>

            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEXwuQv////wuADvtQD++u3++uvyxE3ywj3vswD436P0ylnwuQD+/PX///399+f///z99eH66sP++/L88db10nv77Mn43Z310HPyxEX546/0zm388NT21oj325fzylz66L3xwDL55bTxvR/44aj0zGX21YX32Y/ywjbteRBFAAAP3UlEQVR4nNWd62KqOBCAQ+JqLbVeW7UXi9S27/+GG0CRkJkkkwy2Z/7tnip8DiRzj8iGlvlqsfx8f9u8jCdFWQohyrL8GZ82b8/H5etoNvj1xYDfPV9/vJ+KXFUiaxFnqf+j/v/i5/R+XA94E4MRLo6boiETTskb0slmvxjoToYgXHyecj+bIRWnuJ8OoUxuwvlyW2q6nEB3VadS+Xb5wHxHrISr44GoO4jysB9x3hQf4ezjXuMl0F1EQ46Pc7b74iJ83fLgtZAvr0x3xkI43xeMeBfI4pNFkQyEiw2n+rqMasOwhSQTvt4PgneBPCQ/rImEr7sB+RrG3dMvEq7HA/OdGZP0mEC4GPL5NBnHCe9jNOFqeyO+hvEl2gqIJZzekK9hfL8p4VOpbspXiRJxS04M4ezlxgpsRD+qMSZABOEyybZOYpTLGxDOf0eBZ8QINVIJn/Lf46tE5dS3kUj49YsKbESqtwEJRz+3X0JtUZPVUIS/t8SYQltwCITfKib6MoTk6nsAwtnhLzyhF1Hj4DU1lHBU/CVA/aSWoYZqIOH6j7yCV5EyMLgaRvj065uELVKFrTdBhPu/9YReRH1yEU7/JqBGfOYh/P6rgBoxwL7xE/5hQI34lU74pwFDEH2E79yA3Iuy90H1EHIvMlKduDcenwXnJmTeJqQ6/Jc9cgdZ1TSecMkLqMrGe/0QzN/7EUu4Zr0R2dm9vnnVqFxBcQfhiNMW1S9g11T+78DJKKXDDMcJZyXjPaii/zOzhlxliTtTOOE9Y0pXQhbkM2fSeEwn5NvppdrC9RWrlzs2Rnznxwj5llE1wR25V77QFrqgIoSjqIoY6MLyiPJV8sn2qGKrDUL4w3Ndqb58pXnzDROj/KEQfrE8PIGZzcWEhxGxUEHCJxZAJZy2RkeOOc8FwYA/RDjnyE1I9R1eOzp/41CjzKFdESI8pV9N29iPwXyVsNjj8hRG+JH+yFxsbIosGYwcaMuwCefJv6UMihDZ8p6uRmnbFjbhNvEyUr2QckMdGSW7x8BzahG+pj0ruW1jGzLN965/TrbH7fXUIkzzKBRoY3cBpCqc4fhpms8mSx/hc8pviNrYjayah1A/xq6/ekgrRbLWgB7hKgFQqp1TO9eFRLpDK+skI0f1VoEeYcIyo/Kj67bNzUAVzu0kxciRWxfhIuGL31w5y8d+lV8vqtGX+VvCT20awybhIfp75e4/xw1DkSd3pdrjLv5W7nHClJ1CO0qYErHooSqxDOA8qarFDL0ZhPG/W/3FsLO7wC1O7V6B1utRJu2KcocRJm72erffWf7gzK0NqP5HL6WJAQZj2+8SpqmwvuG7jbnV+bXR1/xqmx6eMpTYIYxQoa0fJTtW2WJnaUNaHzE1/2mbNBFGjlqDhOQAqfYhgELF1ip72NjaUMXetjyvmn8F/lFt6DkAeYAIqXths6M92XU2Z+dibz+gjS0DOEmN5leAa6F+XoHd1CudPfFKuKF9SWuVAKayVJ9rOxIq77aNQTU6Acr9WQOl4+0zT3WPO4ZNS/hA+gopr5YlZCoDfUKa4frKQ5qHHtDrukXMAaj2ky0hJdvbauMsAaZy363y1/rLXrAc0rzjeq0GWkKCXwjE6T2msqENXPPGRWxDHtA8fsXWT7wQhm8Vxn5wvWFg4bzyTaDIsH5VHR/ZQLFIQg6gNd0uhC+BH9WXRsxP1DrD3ao9onnMmqO4x+1acyacBapQ2nbZVZbgky6/cbcKdpJk4ajJW4daXnJmEIbGSPsOtCGvE/DiLn9+Ct6bs1ktNAxxiZ2eCUPtGYW7rSMsNY+Hh7FdThsT+C/5X+jjdugSBodncEKHaVWX0djislQc7nEo4eV5awiDK4MwQo/NIe3CpZknGYNqPpxw3yEMjl7AhAF2oyrNlMLRWzWkNQ9eLJjw/JjWhOEWG0QIpcZsJ8lIly7s9uEc+hIoQRdMeLbcasLwsgSAENCGtuo+7K1O+/PNDUOJbe0IQ85WaSeTCITLljA8SmoRQiZpY2MDS0/jz+8hG/sN1iyQKA8nbDb9mjC86LNHOAO1cbbqHu3tI1fj5QTgu5gwoOZ7lTIEQnEhJPi+PcLHO/uGOlYdsMLaL6gRVJwBmr8zjfZwwsYPrgg/4wl7n5T9aJvfq+vvfLbmVTzh55mQEOl2EwI2NhSZMPjs4H5f8/GEdb60IszDw5MuwnatNMXl1SHpVDOSE0+Y5w0hJQSFE0p1j1VfYP48XLJYieHPxxPWL6ImPHIQSjQHkSFenTud+lS0n0ghPNaElCAbSujpQbL8ecTvv8p1+UsglF81IezVIYSmV9MhdBfM9/15JY6ev0cJRxTCSU1ICSMq88YIhF1bTa9J3hZQlJDyUglVEdJi3aYVRSFsIzmONclPqC070u0uNCGxyMvIhNIIG6sMz4v6CcnFqOpDE5I7mzrhRCphZZUFTmGBCD/JmVN9NRFRiZi3AXoyoWYM/DubkBIQvoi2akRWkAmve1kEYaj0CT3mH3ajRSbmcRnlJlF2O8LYusV8LqKroKr02n/DEe67hPG1p2ol4ouEpDo83YJQpgxNUwuRUrXeyY0OSAhUCxAInwTJRHB804CESfe1F0yNvuyEXL/8uyCWyGGZ0JsREquJ5JugFSioBVLjdCNCbTP2Y0Mewo0ITY2eQUZQVFN4/UO6QOZyHeiieE/6Iy+CVuqlqiQSVGsoD7EF+rA8AL9802ZEJNwJWpdaTajtZzsAL2VckwUse6BI567JYhAJfwTNLFXnRCAQz45qlIFlXQD1cBenkkhYiJLy9y1hli2BhAycCaUKWIEkWqeSRqj5YglBY5jUsIYIEHs04uJkQpp0CasmHvsPgpsOYYGcQDMuTiSkijIfQ2BJt1IXFAEHEfQa0m5LCF4NKPEKEyjxJKwYLZkw/j3M7NzT5a/AwjCfoCX9ZmTuhisNTlh1sFGPqoBNJeCatyXEI+ye9q2+QMlk5JpkwhibJuhqlE5SoGK6c82U91DbNGMmwjLeyHmFUvvXZyuNcCxo4VKUUO3XUGVzQEc3NP9Dv8adSFQS4YnqH6KEU8Qa8Rk5z1CDxbRblZ1GuBFffIRaHcCjOnEC2lNRz9FmLsI3QWuLdRNC41ikm7Bf9plfisg7hKbnSSNUz8RYW49w1Se0l0Ua4bULiovwKGijdvyE2YO5tVEIu5k7LsIlMeYdQNgbxxJOaNrsXIQLYt4iiLBqv2hvPJhQimP3H7gIV8TcUyBhNmuDI6GEsjC3lQ5hfKVCnXui5Q97hA8YYTYmE/bmkfEQVvlDWg74nyM8UfP4/xphncen1af8a4RHTUiacPnPEa7JNVH/GmFd9UXxgf8xwnNdG6k2ESXs5Z6SCXkq9zY1ISWfjBL2O+pSCZdofSmFsGoMotYIY4T9erw0QqPNKIWwqRHOBKHOGyXs1XmnEPaavuIJ85ouo9XqOwhFt1Y/gbDfZhRPWPd2VYSERnU3YccBiia0I8PxhPUCT+2Z6RFCPTMPCYQPQGT4Lp7w0jOThc+67BFCJ1w1swXiCIECUqvvKZzw2vdE6V3rJ3mhHvWqTySGEJwlYfWuEQivvWvhhdAWof4wNI5luyMT7oDRO1DFdDhhp/8wPJIBEIJpv2uYNzyK4U5uxxBee0iz4OQFROieIU+Ml3b54IluwYTnqWYNYXB/Hkzo6uWOJUSn8gUTGr3c4Z9Cy0mwTsM4wu78m2jCbj9+8GOKE4JJi0hCZ9NXKKE5UyE4lOGei2GXMnkJAYuxP3qnJ8FzMY4G4Tz0h3E39EDjWCTYd3mWd6C4xD1D8zHUilZzg5Awn8Z5Ng84wUxgtwx2QqPjF2sJnmwmXzKTkDBjyP0bg0314GMHjPD2NX0R5pq2Q+ki5kT5qp7ApnqriAia/OFJ/OMFKcBNFpdPRc76clc9gUaOGcgBtOEp3nBNorIFmPUVutacv8A98/kR2AS6fdtrQBvSPQac2LcGzGujz9xzzu0Giqvl3dkMA7XhOCkmo/etVUE2i5BWA4/bjY2AJkRjSgPjLT2E9FntnVq4zuxL8hBh14uDGEmq3CPacBDS+9bg2ZdR80sF1vGKmYHA5I/zP2CEQLm1/77g+aUxM2jRDYxWTCZQwqhzL4zv6hJGtbEhnedXQucI2Y6nDBHOv6JG7hrDoBlmQYNGzjVOs8PHZEl1uEY7AEJs6qBH8FnQscOgoQkQV8J7vPhXfOCZGffkSKc45nlHn7VmO3RdwiyDZrM1M9xQwgfY3Qy5mYPxRVxz9ftOuUkIzdVvuk8wwoRj53p14YxnIxhmc4/QOhvh8scwYcpRJe6zERLPt+g0BVmE5vkWrakAEaYd/yjd51uknlHS+vMAIXhGiU3oG6joEavVk/ucGXHECS/nzHSXOovQP1DRKVe/ECVMPHPt4s/DhPZZQT3CtANYhGmvIYTBERtMGn8eI+yLQZh4iI4WtbWuAJ3ZlXq4YzUzI4bQP+Pbe2Vpx/UGOndtUlx+plDCvLC7LujXBVydoc7Oa5+DUELBcCRhG0H0EbKcf9heNZSQ4VIy9PxD1vO4b0gYfoZllm34EG9HiBwjj5wlGzNaCZabEZpeoZdwNPiFz5J+es/lOn171EPI+CrKHzxXtmY6d1hgL6GDkPNc7jskms16Ljca2LzR2epQzhroy4sWBZ0i6yOc8a02UN1B8nmcXem3o4QRZivG37ifA0APUoj78tyR1HEQ0qr4/bfRqf+hn1HlFNtlCiTMllbpYdqNnGu4sOhi9Pc686pOQsqk7xCpIzks51N3xTPAyU2YFrYBRL+OzHzeGVweQsZt8SzMfMI7D9VHyI/IK4i5TSHM3v4yoh8wgPAvazFk9EYAIftywyZBY/BCCLk3DSbJVdCcnyBC7UtxL4HpIt0bPZEwW3PaqCwi88CBW4GE2Spi1PSQoorQEUahhNns/i8hqlPw5LtgwmpjTA33s0noYHciYbb8Iy+jhIL3LITZyD4C9xdETUjzJ0mEYCfXjcVThp1M+OtPqpTUIalUwuzBnux0Qz714j3cJJmwOhH+t9SocsoSE0+YzaPLlZJEqo3/3ngIwVPeBxf6sMkUwqSqrDg+d+n8AIRYI9cwEj30NYVQ+xvcYUGc7xRwfNIAhFn2RGhiSeC7jx9MnEqol5yh9aj54hYYLkL9rLLmWCy+QyIfA2GWLbZqEEip1Cbh/WMk1JbctGBnlKqYki00SFgItbyyKlKr7+RsqyIIF2GWzT4OPJAab7yP3v4s4SPUsjpWkCmUucbbTR0dY3RhJdQyX25LTRkT0ano8u0Hn/Ya4SasZPF5yom6lJpO3E+TtwZAhiCsZHHcFEoFcMoKTk02+yTDxSFDEVYyX3+8H4pcNaSVdLBqMP3/y/vv/RCqa2VIwkbmq/Vy//62eRlPirLUeGVZ/oxPm7fn43K94n7rbPkf9yHqg9qgyN4AAAAASUVORK5CYII="
                alt=""
              />
              <div className="text-gray-700 font-medium flex justify-center mt-6 pt-5 border-t border-gray-700">
                <a
                  className="text-[#EB5161] text-center hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#team"
                >
                  BNB Chain
                </a>
              </div>
            </div>

            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <img
                src="https://th.bing.com/th/id/OIP.mleb5_jAlRxR3Yj8Zksc2gHaHa?pid=ImgDet&rs=1"
                alt=""
              />
              <div className="text-gray-700 font-medium flex justify-center mt-6 pt-5 border-t border-gray-700">
                <a
                  className="text-[#EB5161] text-center hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#team"
                >
                  Chain Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
