import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const services = [
  {
    id: "private-dining",
    title: "Private Dining",
    summary: "Intimate dinners, celebrations, or gourmet meals at home.",
    details: [
      "Custom 3-5 course menus",
      "Wine & cocktail pairing",
      "Interactive chef’s table experience",
    ],
  },
  {
    id: "meal-prep",
    title: "Meal Prep & Coaching",
    summary: "Healthy, chef-crafted meals tailored to your lifestyle.",
    details: [
      "Weekly gourmet meal plans",
      "Dietary-specific menus (Keto, Vegan, Gluten-Free)",
      "Cooking tutorials included",
    ],
  },
  {
    id: "corporate",
    title: "Corporate & Events",
    summary: "Impress clients or treat your team to elevated catering.",
    details: [
      "Executive luncheons",
      "Interactive food stations",
      "Global cuisine themes",
    ],
  },
];

export default function ServiceOffers() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div id="services" className="max-w-6xl mx-auto p-4 mt-24">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Chef Travis’ Culinary Services
      </h2>

      {/* Row-Based Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {services.map((service) => (
          <motion.div
            key={service.id}
            layoutId={service.id} // Shared layoutId for transition
            onClick={() => setSelectedId(service.id)}
            className="w-72 cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-lg"
            whileHover={{ y: -5 }}
          >
            <motion.h3 className="text-xl font-semibold">
              {service.title}
            </motion.h3>
            <motion.p className="text-gray-600 mt-2">
              {service.summary}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Modal-like Detailed View */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {services.map(
              (service) =>
                service.id === selectedId && (
                  <motion.div
                    layoutId={selectedId} // Matches the clicked card's layoutId
                    className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl"
                    key={service.id}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.h3 className="text-2xl font-bold">
                      {service.title}
                    </motion.h3>
                    <motion.p className="text-gray-600 mt-2">
                      {service.summary}
                    </motion.p>
                    <ul className="mt-4 space-y-2 list-disc pl-5">
                      {service.details.map((detail, i) => (
                        <li key={i} className="text-gray-700">
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <button
                      className="mt-6 w-full py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
                      onClick={() => setSelectedId(null)}
                    >
                      Close
                    </button>
                  </motion.div>
                )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}