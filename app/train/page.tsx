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
      {/* Header Section */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Meet The Train
          </h1>
          <p className="text-lg text-muted-foreground">
            Our amazing bridal party and groomsmen
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                style={{ borderColor: member.favoriteColor }}
                onClick={() => setSelectedMember(member)}
              >
                <div className="text-center">
                  <div className="mb-4 relative overflow-hidden rounded-full w-32 h-32 mx-auto">
                    <img
                      src={member.photo}
                      alt={member.fullName}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h2 className="text-xl font-serif text-primary mb-1">
                    {member.fullName}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    "{member.nickname}"
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {member.occupation}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Instagram className="h-4 w-4" />
                    <span>{member.instagram}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Dialog
        open={!!selectedMember}
        onOpenChange={() => setSelectedMember(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-center font-serif text-2xl text-primary mb-4">
              {selectedMember?.fullName}
            </DialogTitle>
          </DialogHeader>
          <div
            className="aspect-video w-full overflow-hidden rounded-lg"
            style={{
              border: `6px solid ${selectedMember?.favoriteColor ?? "#e5e7eb"}`,
              boxSizing: "border-box",
            }}
          >
            <img
              src={selectedMember?.photo}
              alt={selectedMember?.fullName}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="text-center space-y-2 mt-4">
            <p className="text-lg text-primary">"{selectedMember?.nickname}"</p>
            <p className="text-muted-foreground">
              {selectedMember?.occupation}
            </p>
            <div className="flex items-center justify-center gap-2">
              <Instagram className="h-4 w-4" />
              <span>{selectedMember?.instagram}</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif mb-4">Blessing & Iyanuoluwa</h3>
          <p className="text-primary-foreground/80 mb-6">
            Our amazing bridal party and groomsmen
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
