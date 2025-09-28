"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Phone, User } from "lucide-react";

export function RSVPForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzNaTAbVjfYlUp-eGaJKc69W7nJH-qWBuNkqsH3grgapt4fecO9so3XK1airZJ0xAVW/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: formData?.fullname,
          message: formData?.message,
          timestamp: new Date().toISOString(),
        }),
        mode: "no-cors",
      });

      alert("Message sent successfully! Thanks for your well wishes");
      setFormData({
        fullname: "",
        message: "",
      });
      setIsLoading(false);
    } catch (err) {
      alert("Error sending report, please try again later");
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-serif text-primary">💌</CardTitle>
          <p className="text-muted-foreground">
            We look forward to hearing from you
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.fullname}
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Special Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Share your wishes for us 💌..."
                rows={9}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 cursor-pointer"
              disabled={isLoading}
            >
              Send Message
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="font-semibold text-center mb-4">RSVP Contacts</h3>
            <div className="grid md:grid-cols-2 gap-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <span>Samuel: 08088994877</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>Tobi: 07069686310</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
