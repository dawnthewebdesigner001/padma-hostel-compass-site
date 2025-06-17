
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with us for bookings and inquiries</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone Number</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-gray-600">+91 87654 32109</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@padmahostel.com</p>
                      <p className="text-gray-600">bookings@padmahostel.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800">Physical Address</h3>
                      <p className="text-gray-600">
                        Padma Hostel Complex,<br />
                        University Road,<br />
                        Near Medical College,<br />
                        City - 123456
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800">Office Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Emergency contact available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="hostelType">Hostel Type</Label>
                    <select id="hostelType" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select hostel type</option>
                      <option value="boys">Boys Hostel</option>
                      <option value="girls">Girls Hostel</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your requirements, preferred dates, or any questions you have..." 
                      className="mt-1"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
