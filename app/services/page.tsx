import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-[#00A651]">Services</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative">
                  <div className="relative h-[200px]">
                    <Image
                      src={`/home.png`}
                      alt="Medical Service"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Button
                      size="icon"
                      className="rounded-full bg-[#00A651] hover:bg-[#008c44] w-10 h-10"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Free Checkup</h3>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-bold text-3xl mb-12">Contact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Emergency",
                content: "+1 234 567 890",
                icon: Phone,
                color: "bg-[#00A651]",
              },
              {
                title: "Location",
                content: "123 Medical Center Dr",
                icon: MapPin,
                color: "bg-blue-100",
              },
              {
                title: "Email",
                content: "info@hospital.com",
                icon: Mail,
                color: "bg-blue-100",
              },
              {
                title: "Working Hours",
                content: "Mon-Fri: 9AM-5PM",
                icon: Clock,
                color: "bg-blue-100",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`text-center ${item.color} ${
                  index === 0 ? "text-white" : "text-gray-800"
                }`}
              >
                <CardContent className="p-6">
                  <item.icon
                    className={`w-8 h-8 mx-auto mb-4 ${
                      index === 0 ? "text-white" : "text-[#00A651]"
                    }`}
                  />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "24/7 Service",
                description: "Emergency care available round the clock",
              },
              {
                title: "Professional Staff",
                description: "Experienced and qualified medical professionals",
              },
              {
                title: "Modern Equipment",
                description: "State-of-the-art medical facilities",
              },
              {
                title: "Quality Care",
                description: "Patient-centered approach to healthcare",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-[#00A651]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1983ed] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Emergency Care?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Our emergency department is available 24/7 to provide immediate
            medical attention when you need it most.
          </p>
          <Button className="bg-white text-[#00A651] hover:bg-gray-100">
            Contact Emergency
          </Button>
        </div>
      </section>
    </div>
  );
}
