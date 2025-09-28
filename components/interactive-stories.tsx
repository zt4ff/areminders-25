"use client";

import type React from "react";

import { useState, useEffect, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Calendar,
  MapPin,
  Sparkles,
} from "lucide-react";

interface Story {
  id: number;
  title: string;
  image: string;
  content: string | ReactNode;
  icon: React.ReactNode;
}

const stories: Story[] = [
  {
    id: 1,
    title: "How We Met",
    image: "/pictures/02.jpeg",
    content: `Every great story has a beginning, and ours started in church — at the Baptist Students’ Fellowship (BSF). We attended regularly from different churches: Blessing, a proud member of Salem Baptist Church Agiliti, and Iyanuoluwa from First Baptist Church Alapere — both under Gideon 1 Baptist Association.
From our very first conversations, there was a spark — sometimes subtle, sometimes undeniable. Whether it was a funny/awkward moment or the quiet way we connected over shared values, we knew something special was unfolding.
What began as simple friendship and casual conversations soon grew into a bond neither of us could ignore.`,
    icon: <Heart className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "The Journey",
    image: "/pictures/03.jpeg",
    content: (
      <div>
        <p>
          Love has a way of growing in the little moments. From countless calls,
          to dates, and road trips, we discovered the joy of each other’s
          company.
        </p>
        <p className="mt-3">Our relationship has been built on:</p>
        <ul className="list-disc">
          <li>Prayers 🙏🏽</li>
          <li>Laughter 😂</li>
          <li>Support 💪🏽</li>
          <li>Faith & Shared Dreams 🌟</li>
        </ul>
        <p className="mt-3">
          Together, we’ve celebrated milestones — graduations, career moves,
          birthdays, travels, and more. But beyond the big moments, it has been
          the everyday ones that defined us: the late-night conversations, the
          quiet prayers, and the comfort of knowing we always have each other.
        </p>
        <p className="mt-3">
          What makes our bond truly special is the way we bring out the best in
          one another. We are teammates, best friends, and now — soon to be —
          partners for life.
        </p>
      </div>
    ),
    icon: <Calendar className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "The Proposal",
    image: "/pictures/04.jpeg",
    content: `On Blessing’s birthday, in her parent’s house and right in front of her mother, Iyanuoluwa decided it was time to make the forever promise. With the help of Blessing’s younger sibling Mary, and two dear friends Johnson and Michael, it was all set up perfectly.
That morning, filled with joy, laughter, and emotion, he got down on one knee and asked the question that would change everything:
“Will you marry me?”
Blessing’s answer came with a radiant smile, happy tears, and a resounding “YES!” 💍 It was a moment of love
`,
    icon: <MapPin className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Looking Ahead",
    image: "/pictures/05.jpeg",
    content: `Now, we stand on the threshold of a new chapter — marriage. With grateful hearts, we are excited to build a home filled with love, laughter, and purpose.
We are endlessly thankful for our families and friends who have walked alongside us — for the prayers, encouragement, and love that surround us. Our wedding is not just about the two of us, but about the beautiful community of love that has shaped us.
Here’s to forever — hand in hand, heart to heart. 💕
`,
    icon: <Sparkles className="h-6 w-6" />,
  },
];

export function InteractiveStories() {
  const [currentStory, setCurrentStory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextStory = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToStory = (index: number) => {
    if (isAnimating || index === currentStory) return;
    setIsAnimating(true);
    setCurrentStory(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentStory]);

  // Auto-advance stories every 8 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isAnimating) {
  //       nextStory();
  //     }
  //   }, 8000);

  //   return () => clearInterval(interval);
  // }, [isAnimating]);

  const story = stories[currentStory];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif text-primary text-center mb-12">
        Our Love Store
      </h2>

      <div className="flex justify-center gap-3 mb-8">
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToStory(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentStory
                ? "bg-primary scale-125"
                : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to story ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Story Card */}
      <div className="relative overflow-hidden">
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-96 overflow-hidden">
              <img
                src={story.image || "/placeholder.svg"}
                alt={story.title}
                className={`w-full h-full object-cover object-top transition-all duration-500 ${
                  isAnimating ? "scale-110 opacity-0" : "scale-100 opacity-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Story Icon */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground">
                {story.icon}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <div
                className={`transition-all duration-500 ${
                  isAnimating
                    ? "translate-x-8 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl lg:text-3xl font-serif text-primary">
                    {story.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {story.content}
                </p>

                {/* Navigation Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevStory}
                    disabled={isAnimating}
                    className="border-primary/30 hover:bg-primary/10 bg-transparent"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextStory}
                    disabled={isAnimating}
                    className="border-primary/30 hover:bg-primary/10 bg-transparent"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Floating Hearts Animation */}
        <div className="absolute -top-2 -right-2 animate-float">
          <Heart className="h-6 w-6 text-primary/30" />
        </div>
        <div
          className="absolute -bottom-2 -left-2 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Heart className="h-4 w-4 text-accent/40" />
        </div>
      </div>

      {/* Story Timeline */}
      <div className="mt-12 hidden md:block">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
          <div className="grid grid-cols-4 gap-8">
            {stories.map((timelineStory, index) => (
              <div
                key={timelineStory.id}
                className={`text-center cursor-pointer transition-all duration-300 ${
                  index === currentStory ? "scale-105" : "hover:scale-102"
                }`}
                onClick={() => goToStory(index)}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center transition-all duration-300 ${
                    index === currentStory
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-primary/20 text-primary hover:bg-primary/30"
                  }`}
                >
                  {timelineStory.icon}
                </div>
                <h4
                  className={`font-serif text-sm mb-1 transition-colors duration-300 ${
                    index === currentStory
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {timelineStory.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
