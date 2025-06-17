
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin } from "lucide-react";

const BoysHostel = () => {
  const facilities = [
    "High-Speed WiFi",
    "Dining Hall", 
    "24/7 Security Guard",
    "Writing Table & Chair",
    "Fully Furnished Room",
    "Laundry Services"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 animate-slide-in-right">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(37, 99, 235, 0.8), rgba(37, 99, 235, 0.8)), url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&h=400&fit=crop')"
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Padma Boys Hostel</h1>
          <p className="text-xl font-semibold">"Discipline, Comfort, and Care for Every Student."</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Facilities Section */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Facilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                  <CheckCircle className="text-blue-600 flex-shrink-0" size={24} />
                  <span className="text-gray-800 font-medium">{facility}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gallery Section */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                  <span className="text-gray-500 font-medium">Image/Video Placeholder {item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Map Section */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="text-blue-600 mr-2" size={28} />
              <h2 className="text-3xl font-bold text-gray-800">Location</h2>
            </div>
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <div className="text-gray-600 text-lg mb-4">
                <MapPin className="mx-auto mb-4 text-blue-600" size={48} />
                <strong>Map Embed Placeholder</strong>
              </div>
              <p className="text-gray-500">
                {/* Paste Boys Hostel Google Map Embed Link Here */}
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Replace this section with your Google Maps embed code
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Book Now Section */}
        <div className="text-center">
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoysHostel;
