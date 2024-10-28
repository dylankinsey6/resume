import React from "react"

const Contact: React.FC = () => {
    return (
      <section className="p-8 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>
          Feel free to reach out via email:{" "}
          <a href="mailto:your.email@example.com" className="text-blue-500 underline">
            your.email@example.com
          </a>
        </p>
      </section>
    )
  }
export default Contact