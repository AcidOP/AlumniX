import cn from "@/utils/cn";

interface IProps {
  question: string;
  answer: string;
  className?: string;
}

const Faq = ({ question, answer, className }: IProps) => {
  return (
    <details className={cn("open:bg-green-50 duration-300 mx-5 lg:mx-0", className)}>
      <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer font-medium">{question}</summary>
      <div className="bg-white px-5 py-3 leading-relaxed">
        <p>{answer}</p>
      </div>
    </details>
  )
}

export default Faq
