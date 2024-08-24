import Faq from "./Faq"
import faqArray from "./questions"

const Index = () => {
  return (
    <div className="container mx-auto mb-16">
      <h1 className="py-10 text-4xl text-center font-bold">Frequently Asked Questions</h1>
      {
        faqArray.map((faq, index) => {
          return (
            <Faq key={index} {...faq} className="mb-6" />
          )
        })
      }
    </div>
  )
}

export default Index
