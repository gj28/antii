import Link from 'next/link';
import React from 'react';
import NavBar from '../(components)/NavBar';

export default async function CareerPage() {
  let positions = [];

  try {
    // Fetch positions data directly
    const response = await fetch("https://aws.antiai.ltd/api/fetchAllPosition", {
      next: { revalidate: 10 }, // Revalidate data every 10 seconds
    });
    positions = await response.json();
  } catch (error) {
    console.error("Error fetching positions: ", error);
  }

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-white text-3xl font-bold mb-6">Open Positions</h1>
        {positions.length === 0 ? (
          <p className="text-red-500">No positions available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position) => (
              <div key={position.id} className="bg-white rounded-lg shadow-md p-6 text-black">
                <h2 className="text-xl font-bold underline mb-2">{position.role}</h2>
                <p className="mb-1"><strong>Location:</strong> {position.location}</p>
                <p className="mb-1"><strong>Business Area:</strong> {position.business_area}</p>
                <p className="mb-4"><strong>Posted on:</strong> {new Date(position.created_at).toLocaleDateString()}</p>
                <Link href={`/career/${position.id}`}>
                  <button className="bg-black text-white w-full py-2 rounded">Apply</button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
