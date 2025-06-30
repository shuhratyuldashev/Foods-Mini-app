import HeaderExtraCardPage from "./ui/header-extra-card-page"
import card from "../../shared/assets/images/Card.png"
import mastercard from "../../shared/assets/images/mastercard.png"
import paypal from "../../shared/assets/images/paypal.png"
import applepay from "../../shared/assets/images/apple-pay.png"
import { useState } from "react"
import { Link } from "react-router-dom"

const cards_list = [
  {
    id: 1,
    title: "MasterCard",
    number: "**** **** 0783 7873",
    img: mastercard
  },{
    id: 2,
    title: "Paypal",
    number: "**** **** 0783 7873",
    img: paypal
  },{
    id: 3,
    title: "Apple Pay",
    number: "**** **** 0783 7873",
    img: applepay
  }
]

const ExtraCardPage = () => {
  const [currentCard, setCurrentCard] = useState<string>("")
  return (
    <main className="p-4">
        <HeaderExtraCardPage />

        <section>
          <div className="w-full h-[200px] mt-10 mx-auto">
            <img className="w-full h-full object-cover rounded-md" src={card} alt="" />
          </div>

          <h3 className="mt-6 font-medium">Credit Card</h3>

          <div className="flex flex-col mt-5 gap-2">
            {cards_list.map((c) => (
            <div onClick={() => setCurrentCard(c.title)} className={`flex items-center gap-2 w-full px-2 py-3 border-1 ${currentCard === c.title && "border-primary border-2"} rounded-md`}>
              <div className="rounded-full py-1 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold">{c.title}</p>
                <span className="font-medium text-gray-400 text-sm">{c.number}</span>
              </div>
              <div className="px-2 ml-auto object-cover">
                <img src={c.img} alt="" />
              </div>
            </div>
          ))}
          </div>
          <Link to="/profile/extra-card/new">
          <button className="w-full bg-primary mt-20 text-white rounded-full font-semibold p-4 transition hover:scale-75">
            Add New Card
          </button>
          </Link>
        </section>
    </main>
  )
}

export default ExtraCardPage