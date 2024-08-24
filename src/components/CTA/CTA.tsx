import Box from "./Box"

import functions from "./functions"

const CTA = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Raw Denim Heirloom Man Braid
          <p className="hidden sm:block">Selfies Wayfarers</p>
        </h1> */}
        <div className="flex flex-wrap -m-4">
          {
            functions.map((func, index) => {
              return <Box key={index} {...func} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default CTA
