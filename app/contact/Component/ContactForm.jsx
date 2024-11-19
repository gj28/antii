import React from 'react'

function ContactForm() {
  return (
    <div className="bg-[#151617] p-6 rounded-lg ">
      <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
      <p className="mb-4">Our Team will get back to you shortly</p>
      <form>
        <input className="w-full mb-4 p-2 bg-gray-800 rounded" type="text" placeholder="First Name" />
        <input className="w-full mb-4 p-2 bg-gray-800 rounded" type="text" placeholder="Last Name" />
        <div className="flex mb-4">
          <input className="w-1/2 mr-2 p-2 bg-gray-800 rounded" type="email" placeholder="Email" />
          <input className="w-1/2 ml-2 p-2 bg-gray-800 rounded" type="tel" placeholder="Phone Number" />
        </div>
        <textarea className="w-full mb-4 p-2 bg-gray-800 rounded" rows="4" placeholder="Type message here"></textarea>
        <button className="w-full bg-blue-600 text-white py-2 rounded" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm