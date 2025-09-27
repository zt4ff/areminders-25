"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, User } from "lucide-react"

export function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "",
    guests: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("RSVP submitted:", formData)
    alert("Thank you for your RSVP! We look forward to celebrating with you.")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-serif text-primary">RSVP</CardTitle>
          <p className="text-muted-foreground">Please let us know if you'll be joining us</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="attendance">Will you attend? *</Label>
                <Select
                  value={formData.attendance}
                  onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your response" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, I'll be there!</SelectItem>
                    <SelectItem value="no">Sorry, can't make it</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests (including yourself)</Label>
              <Select value={formData.guests} onValueChange={(value) => setFormData({ ...formData, guests: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select number of guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5+">5+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Special Message (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your wishes for the couple..."
                rows={3}
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Send RSVP
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
  )
}
