import Faq from "./Faq"
import faqArray from "./questions"

const Index = () => {
  return (
    <div className="container mx-auto">
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
