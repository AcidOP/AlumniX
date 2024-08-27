import alumniData from "@/data/alumni"

const Heading = ({ ...props }) => {
  return (
    <th className="whitespace-nowrap text-start px-4 py-2 font-medium text-gray-900">
      {props.children}
    </th>
  )
}

const AlumniDir = () => {
  return (
    <div className="w-full">
      <div className="relative mb-10">
        <label htmlFor="Search" className="sr-only">Search</label>

        <input
          type="text"
          id="Search"
          placeholder="Search Name"
          className="w-full rounded-md border border-gray-200 py-2.5 px-3 shadow-sm sm:text-sm focus:outline-none focus:border-green-700"
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>

      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="bg-green-400">
          <tr>
            <Heading>Name</Heading>
            <Heading>Course Name</Heading>
            <Heading>Year of Passing</Heading>
            <Heading>Address</Heading>
            <Heading>Phone</Heading>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {
            alumniData.map((data, index) => {
              return (
                <tr className="even:bg-green-100" key={index}>
                  <Heading>{data.name}</Heading>
                  <Heading>{data.courseName}</Heading>
                  <Heading>{data.yearOfPassing}</Heading>
                  <Heading>{data.address}</Heading>
                  <Heading>{data.phoneNumber}</Heading>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AlumniDir
