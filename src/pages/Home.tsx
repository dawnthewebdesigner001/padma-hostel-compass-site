
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Welcome to <span className="text-blue-600">Padma Hostel</span>
          </h1>
          <p className="text-2xl md:text-3xl text-orange-600 font-semibold mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            "Your second home away from home."
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            Experience comfort, safety, and community at Padma Hostel. We provide exceptional accommodation 
            for students with modern facilities, 24/7 security, and a nurturing environment that helps you focus on your academic journey.
          </p>
          
          {/* Central Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Link to="/boys-hostel">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[200px]">
                Boys Hostel
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/girls-hostel">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[200px]">
                Girls Hostel
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Preview Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Padma Hostel?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide everything you need for a comfortable and successful academic experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Comfortable Living</h3>
              <p className="text-gray-600">Fully furnished rooms with modern amenities</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Security</h3>
              <p className="text-gray-600">Round-the-clock security for your safety</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Study Environment</h3>
              <p className="text-gray-600">Quiet spaces perfect for academic focus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
