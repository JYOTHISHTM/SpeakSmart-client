import { useState } from "react";
import { Briefcase, Utensils, Stethoscope, Phone, Plane, Hotel, ShoppingCart, Map, Users, PartyPopper } from "lucide-react";
import Navbar from "../components/Navbar";
import AppFooter from "../components/AppFooter";


const scenarios = [
  { id: "job", label: "Job Interview", icon: Briefcase },
  { id: "restaurant", label: "Restaurant", icon: Utensils },
  { id: "doctor", label: "Doctor Visit", icon: Stethoscope },
  { id: "phone", label: "Phone Call", icon: Phone },
  { id: "airport", label: "Airport Check-in", icon: Plane },
  { id: "hotel", label: "Hotel Reception", icon: Hotel },
  { id: "grocery", label: "Grocery Shopping", icon: ShoppingCart },
  { id: "directions", label: "Asking for Directions", icon: Map },
  { id: "meeting", label: "Business Meeting", icon: Users },
  { id: "social", label: "Social Mixer", icon: PartyPopper },
];

export default function RolePlay() {
  const [selected, setSelected] = useState<string>("job");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#eef1ff]">
  
  {/* ✅ Navbar at top */}
  <Navbar />

  {/* ✅ Content */}
  <div className="flex flex-col items-center px-4 py-10">
    
    <div className="max-w-4xl w-full text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Choose your scenario
      </h1>
      <p className="text-gray-500 mb-8">
        Select a real-world situation to practice your English skills.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {scenarios.map((item) => {
          const Icon = item.icon;
          const isActive = selected === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className={`relative flex flex-col items-center justify-center p-5 rounded-2xl border transition-all duration-200
                ${
                  isActive
                    ? "bg-indigo-100 border-indigo-400 shadow"
                    : "bg-white border-gray-200 hover:shadow"
                }`}
            >
              {isActive && (
                <span className="absolute top-2 right-2 w-4 h-4 bg-indigo-500 rounded-full"></span>
              )}

              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-3
                ${isActive ? "bg-indigo-200" : "bg-gray-100"}`}
              >
                <Icon className="w-6 h-6 text-gray-700" />
              </div>

              <span
                className={`text-sm font-medium text-center
                ${isActive ? "text-indigo-600" : "text-gray-700"}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Button */}
      <button className="mt-10 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-md transition">
        Confirm Selection
      </button>
    </div>

  </div>
  <AppFooter/>
</div>
  );
}
