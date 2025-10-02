import { Card } from "@/components/ui/card";
import { Phone, Instagram } from "lucide-react";

export default function VendorsPage() {
  const vendors = [
    {
      category: "Groom and Groom's Friends Attire",
      name: "JayJohnson Outfit",
      phone: "",
      social: "",
    },
    {
      category: "Photography/Videography",
      name: "Msquare lumiere",
      phone: "",
      social: "",
    },
    {
      category: "Bride's Attire",
      name: "Everfaithful Couture",
      phone: "",
      social: "",
    },
    {
      category: "Cake",
      name: "FollyBee",
      phone: "",
      social: "",
    },
    {
      category: "Make Up",
      name: "Tinland Beauty",
      phone: "",
      social: "",
    },
    {
      category: "Catering",
      name: "Joyful Caters",
      phone: "",
      social: "",
    },
    {
      category: "Bride's Hair",
      name: "********",
      phone: "",
      social: "",
    },
    {
      category: "Printing",
      name: "De-Wonders Tech",
      phone: "09078015889",
      social: "",
    },
    {
      category: "Music (Live Band)",
      name: "Ademola Destiny",
      phone: "",
      social: "",
    },
    {
      category: "Sound Engineer",
      name: "*********",
      phone: "",
      social: "",
    },
    {
      category: "Music (DJ)",
      name: "DJ ATM",
      phone: "",
      social: "",
    },
    {
      category: "MC",
      name: "Chinko Sounds",
      phone: "",
      social: "",
    },
    {
      category: "Interior Decorations",
      name: "Abideco",
      phone: "",
      social: "",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Meet Our Vendors
          </h1>
          <p className="text-lg text-muted-foreground">
            The amazing team helping us create our perfect day
          </p>
        </div>
      </section>

      {/* Vendors Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-primary/20"
              >
                <div className="text-center">
                  <h3 className="text-sm text-muted-foreground mb-2">
                    {vendor.category}
                  </h3>
                  <h2 className="text-xl font-serif text-primary mb-4">
                    {vendor.name}
                  </h2>
                  <div className="space-y-2">
                    {vendor.phone && (
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>{vendor.phone}</span>
                      </div>
                    )}
                    {vendor.social && (
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Instagram className="h-4 w-4" />
                        <span>{vendor.social}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif mb-4">Blessing & Iyanuoluwa</h3>
          <p className="text-primary-foreground/80 mb-6">
            Thank you to all our amazing vendors
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <span>November 8th, 2025</span>
            <span>•</span>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
