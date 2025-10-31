"use client";

import { Card } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { TeamMember, teamMembers } from "./teamMember";

export default function TrainPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <section className="py-12 px-4 sm:px-6 bg-primary/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-4 sm:mb-6">
            Meet The Train
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Our amazing bridal party and groomsmen
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                style={{ borderColor: member.favoriteColor }}
                onClick={() => setSelectedMember(member)}
              >
                <div className="text-center">
                  <div className="mb-4 relative overflow-hidden rounded-full w-28 h-28 sm:w-32 sm:h-32 mx-auto">
                    <img
                      src={member.photo}
                      alt={member.fullName}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl font-serif text-primary mb-1">
                    {member.fullName}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-2 sm:mb-3">
                    "{member.nickname}"
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                    {member.occupation}
                  </p>
                  <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Instagram className="h-4 w-4" />
                    <span className="truncate max-w-[120px] sm:max-w-none">
                      {member.instagram}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={!!selectedMember}
        onOpenChange={() => setSelectedMember(null)}
      >
        <DialogContent className="max-w-[95vw] sm:max-w-5xl p-0 overflow-hidden">
          <DialogHeader className="hidden" />
          <div className="relative w-full h-[80vh] sm:h-[90vh]">
            <img
              src={selectedMember?.photo}
              alt={selectedMember?.fullName}
              className="w-full h-full object-cover"
              style={{
                border: `6px solid ${
                  selectedMember?.favoriteColor ?? "#e5e7eb"
                }`,
                boxSizing: "border-box",
              }}
            />
            <div className="absolute bottom-0 w-full bg-black/60 text-white py-4 text-center space-y-1">
              <p className="text-lg font-serif">{selectedMember?.fullName}</p>
              <p className="text-sm italic">"{selectedMember?.nickname}"</p>
              <p className="text-sm">{selectedMember?.occupation}</p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Instagram className="h-4 w-4" />
                <span>{selectedMember?.instagram}</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="py-10 sm:py-12 px-4 sm:px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4">
            Blessing & Iyanuoluwa
          </h3>
          <p className="text-primary-foreground/80 mb-4 sm:mb-6 text-sm sm:text-base">
            Our amazing bridal party and groomsmen
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8 text-xs sm:text-sm">
            <span>November 8th, 2025</span>
            <span className="hidden sm:block">•</span>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
