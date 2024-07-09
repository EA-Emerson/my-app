import React, { useState } from "react";

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState("Description");

  const renderContent = () => {
    switch (selectedTab) {
      case "Description":
        return (
          <p>
            A modern table, designed to be nested when not in use, saving space
            and allowing for easy storage.The lift up mechanism allows you to
            raise the table's surface to a comfortable height.
          </p>
        );
      case "Shipping":
        return <p>This table ships to your location.</p>;
      case "Reviews":
        return <p>No reviews yet.</p>;
      case "Return Policy":
        return (
          <>
            <h2 className="font-bold text-lg">
              Our Return Policy and Guarantee
            </h2>
            <p>Exchange within 30 days from the date product was delivered.</p>
            <h3 className="font-bold text-md">Requirements</h3>
            <ol className="list-decimal pl-4">
              <li>
                Items shouldn’t stay more than 30 days from delivery date.
              </li>
              <li>
                Items should remain unused, not damaged and in the original
                package.
              </li>
              <li>Shipping fees won’t be covered by the company.</li>
            </ol>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full  mx-auto pt-8">
      <div className="flex justify-between border-b-2 border-gray-200 mb-4">
        {["Description", "Shipping", "Reviews", "Return Policy"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-2xl font-semibold ${
              selectedTab === tab
                ? "text-[#27493E] border-b-4 border-[#27493E]"
                : "text-gray-600"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="text-gray-800">{renderContent()}</div>
    </div>
  );
};

export default TabComponent;
