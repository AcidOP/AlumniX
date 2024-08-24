import React from 'react'

const Stats = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-0">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Alumni Success Stories</h2>

        <p className="mt-4 text-gray-500 sm:text-xl">
          Remarkable achievements of our alumni who have made impacts in their own fields and communitites.
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg bg-green-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Registered Alumni</dt>

          <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">35,245</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-green-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Annual Donations</dt>

          <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">₹96 lakh</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-green-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Placements</dt>

          <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">98%</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-green-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Annual Events</dt>

          <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">6</dd>
        </div>
      </dl>
    </div>
  )
}

export default Stats
