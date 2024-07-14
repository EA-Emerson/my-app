import React, { useState } from "react";

const TabComponent = ({products}) => {
  const [openTab, setOpenTab] = useState(null);
  const { id } = useParams();

  // Find the product using unique_id instead of id
  const product = products.find((p) => p.unique_id === id);
  const toggleTab = (tab) => {
    if (openTab === tab) {
      setOpenTab(null);
    } else {
      setOpenTab(tab);
    }
  };

  const renderContent = (tab) => {
    switch (tab) {
      case "Description":
        return (
          <p>
            {product.description}
          </p>
        );
      case "Shipping":
        return <p>This product ships to your location.</p>;
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
    <div className="w-full mx-auto pt-8">
      <div className="hidden lg:flex justify-between border-b-2 border-gray-200 mb-4">
        {["Description", "Shipping", "Reviews", "Return Policy"].map((tab) => (
          <button
            key={tab}
            className={`lg:px-4 lg:py-2 lg:text-2xl font-semibold ${
              openTab === tab
                ? "text-[#27493E] border-b-4 border-[#27493E]"
                : "text-gray-600"
            }`}
            onClick={() => toggleTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="lg:hidden">
        {["Description", "Shipping", "Reviews", "Return Policy"].map((tab) => (
          <div key={tab} className="border-b border-gray-300 px-[4vw] mb-4">
            <button
              className="w-full flex justify-between items-center py-4 px-2 font-semibold text-lg text-gray-800"
              onClick={() => toggleTab(tab)}
            >
              <span className="">{tab}</span>
              <span>{openTab === tab ? "-" : "+"}</span>
            </button>
            {openTab === tab && (
              <div className="py-4 px-2 text-sm text-gray-800">
                {renderContent(tab)}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Content for Desktop */}
      <div className="hidden lg:block text-gray-800">
        {openTab && renderContent(openTab)}
      </div>
    </div>
  );
};

export default TabComponent;
