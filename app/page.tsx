import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CountdownTimer } from "@/components/countdown-timer";
import { RSVPForm } from "@/components/rsvp-form";
import { WeddingGallery } from "@/components/wedding-gallery";
import { Heart, MapPin, Clock, Calendar, Quote } from "lucide-react";
import { InteractiveStories } from "@/components/interactive-stories";

export default function WeddingWebsite() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center floral-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-lg md:text-xl text-muted-foreground mb-4 font-serif italic">
              November 8th, 2025
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary mb-6 text-balance">
              Blessing Elizabeth
              <span className="block text-accent font-sans text-2xl md:text-3xl my-4">
                &
              </span>
              Iyanuoluwa Isaiah
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-8 font-serif">
              {"Holy Solemnization in Holy Matrimony"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                RSVP Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                View Events
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-primary/20 rounded-full blur-xl" />
        </div>
        <div
          className="absolute bottom-32 right-16 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-12 h-12 bg-accent/30 rounded-full blur-lg" />
        </div>
        <div
          className="absolute top-1/3 right-8 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-8 h-8 bg-secondary/40 rounded-full blur-md" />
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">
            Counting Down to Our Special Day
          </h2>
          <CountdownTimer />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-primary text-center mb-12">
            AREMINDERS ‘25
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="p-6 bg-card/80 backdrop-blur-sm">
                <p className="text-muted-foreground leading-relaxed">
                  Every love story deserves a name — something that carries the
                  essence of two hearts becoming one. For us, that name is{" "}
                  <span className="font-bold text-black">AREMINDERS ‘25</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The name was birthed from a mix of laughter, friendship, and
                  meaning.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Blessing’s full name in church is Abraham Blessing. During one
                  of our fellowship meetings, when Blessing introduced herself
                  as “Abraham Blessing,” Iyanuoluwa playfully echoed, “Are
                  Mine,” and everyone laughed. He had picked it from the popular
                  chorus:
                </p>
                <p className="text-muted-foreground leading-relaxed italic">
                  🎶 “Abraham’s blessings are mine, Abraham’s blessings are
                  mine, I am blessed in the morning, I am blessed in the
                  evening, Abraham’s blessings are mine…”
                </p>
                <p className="text-muted-foreground leading-relaxed italic">
                  It wasn’t a serious moment at the time — just Iyanuoluwa’s
                  usual way of keeping the room lively — but the phrase stuck.
                </p>
                <p className="text-muted-foreground leading-relaxed italic">
                  On the other side, Iyanuoluwa is popularly called “Wonders,”
                  since that’s the English translation of his name.
                </p>
                <p className="text-muted-foreground leading-relaxed italic">
                  Now, as we come together in the year 2025, we combined these
                  two pieces —{" "}
                  <span className="font-bold text-black">ARE MINE</span> and{" "}
                  <span className="font-bold text-black">WONDERS</span> — to
                  create something uniquely ours:
                </p>
              </Card>
            </div>
            <div className="relative">
              <img
                src="/pictures/01.jpeg"
                alt="Blessing and Iyanuoluwa"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Events Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-primary text-center mb-12">
            Wedding Events
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Engagement */}
            <Card className="p-6 text-center bg-secondary/20 border-secondary">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">
                Engagement
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>7:00 AM</span>
                </div>
                <div className="flex items-start justify-center gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="text-center">
                    Chris College Hall
                    <br />7 Sholanke Close, Kosofe Mile 12
                    <br />
                    Ketu, Lagos
                  </span>
                </div>
              </div>
            </Card>

            {/* Church Ceremony */}
            <Card className="p-6 text-center bg-primary/20 border-primary">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">
                Church Ceremony
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>11:00 AM</span>
                </div>
                <div className="flex items-start justify-center gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="text-center">
                    First Baptist Church Kosofe
                    <br />
                    592 Ikorodu Road
                    <br />
                    Lagos
                  </span>
                </div>
              </div>
            </Card>

            {/* Reception */}
            <Card className="p-6 text-center bg-accent/20 border-accent">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">
                Reception
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>After Ceremony</span>
                </div>
                <div className="flex items-start justify-center gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="text-center">
                    Chris College Hall 7<br />
                    Sholanke Close, Kosofe Mile 12
                    <br />
                    Ketu, Lagos
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Colors of the Day */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">
            Colors of the Day
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join us in celebrating with these beautiful colors
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-3 shadow-lg"></div>
              <p className="font-serif text-primary">Royal Blue</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-3 shadow-lg"></div>
              <p className="font-serif text-accent-foreground">Gold</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full mx-auto mb-3 shadow-lg"></div>
              <p className="font-serif text-secondary-foreground">Peach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-serif text-primary mb-4 text-balance leading-relaxed">
              {
                "So, they are no longer two, but one flesh, therefore what God has joined together, let no one separate."
              }
            </blockquote>
            <cite className="text-muted-foreground font-sans">
              — Matthew 19:6
            </cite>
          </Card>
        </div>
      </section>

      {/* Interactive Stories Section */}
      <section className="py-16 px-4 bg-muted/30">
        <InteractiveStories />
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-primary text-center mb-12">
            Our Journey in Pictures
          </h2>
          <WeddingGallery />
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-primary text-center mb-12">
            Join Our Celebration
          </h2>
          <RSVPForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif mb-4">Blessing & Iyanuoluwa</h3>
          <p className="text-primary-foreground/80 mb-6">
            {"Thank you for being part of our love story"}
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
