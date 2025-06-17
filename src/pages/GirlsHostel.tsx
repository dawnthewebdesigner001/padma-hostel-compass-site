
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin } from "lucide-react";

const GirlsHostel = () => {
  const facilities = [
    "High-Speed WiFi",
    "Dining Hall", 
    "24/7 Security Guard",
    "Writing Table & Chair",
    "Fully Furnished Room",
    "Laundry Services"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 animate-slide-in-right">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(234, 88, 12, 0.8), rgba(234, 88, 12, 0.8)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=400&fit=crop')"
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Padma Girls Hostel</h1>
          <p className="text-xl font-semibold">"A Safe & Supportive Space for Academic Growth."</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Facilities Section */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Facilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200">
                  <CheckCircle className="text-orange-600 flex-shrink-0" size={24} />
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
              <MapPin className="text-orange-600 mr-2" size={28} />
              <h2 className="text-3xl font-bold text-gray-800">Locations</h2>
            </div>
            
            {/* Map 1 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Main Building</h3>
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <div className="text-gray-600 text-lg mb-4">
                  <MapPin className="mx-auto mb-4 text-orange-600" size={48} />
                  <strong>Map Embed Placeholder 1</strong>
                </div>
                <p className="text-gray-500">
                  {/* Map 1: Main Building */}
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  Replace this section with your Google Maps embed code for Main Building
                </p>
              </div>
            </div>

            {/* Map 2 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Girls Hostel Extension / Dining Area</h3>
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <div className="text-gray-600 text-lg mb-4">
                  <MapPin className="mx-auto mb-4 text-orange-600" size={48} />
                  <strong>Map Embed Placeholder 2</strong>
                </div>
                <p className="text-gray-500">
                  {/* Map 2: Girls Hostel Extension / Dining Area / etc. */}
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  Replace this section with your Google Maps embed code for Extension/Dining Area
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Book Now Section */}
        <div className="text-center">
          <Link to="/contact">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GirlsHostel;
