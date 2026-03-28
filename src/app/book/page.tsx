"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Wrench,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Phone,
  Loader2,
} from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";
import { PHONE_BRANDS, WHATSAPP_URL } from "@/lib/utils";

interface Service {
  id: string;
  name: string;
  duration: number;
}

interface TimeSlotData {
  id: string;
  time: string;
}

const steps = [
  { icon: Smartphone, label: "Device" },
  { icon: Wrench, label: "Repair" },
  { icon: Calendar, label: "Date & Time" },
  { icon: User, label: "Details" },
  { icon: CheckCircle2, label: "Confirm" },
];

export default function BookPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [services, setServices] = useState<Service[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlotData[]>([]);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [blockedDates, setBlockedDates] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const [form, setForm] = useState({
    phoneBrand: "",
    phoneModel: "",
    serviceId: "",
    date: "",
    timeSlot: "",
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    notes: "",
  });

  useEffect(() => {
    fetch("/api/services")
      .then((r) => r.json())
      .then((data) => Array.isArray(data) ? setServices(data) : setServices([]))
      .catch(() => {});
    fetch("/api/timeslots")
      .then((r) => r.json())
      .then((data) => Array.isArray(data) ? setTimeSlots(data) : setTimeSlots([]))
      .catch(() => {});
    fetch("/api/blocked-dates")
      .then((r) => r.json())
      .then((data) => Array.isArray(data) ? setBlockedDates(data) : setBlockedDates([]))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (form.date) {
      fetch(`/api/bookings/slots?date=${form.date}`)
        .then((r) => r.json())
        .then((data) => setBookedSlots(data.bookedSlots || []))
        .catch(() => {});
    }
  }, [form.date]);

  const selectedService = services.find((s) => s.id === form.serviceId);

  const updateForm = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return form.phoneBrand && form.phoneModel;
      case 1: return form.serviceId;
      case 2: return form.date && form.timeSlot;
      case 3: return form.customerName && form.customerEmail && form.customerPhone;
      case 4: return true;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setBookingId(data.id);
        setBookingComplete(true);
      } else {
        alert(data.error || "Booking failed. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  };

  const generateDates = () => {
    const dates: string[] = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() + i);
      if (d.getDay() !== 0) {
        const dateStr = d.toISOString().split("T")[0];
        if (!blockedDates.includes(dateStr)) {
          dates.push(dateStr);
        }
      }
    }
    return dates;
  };

  const formatDateLabel = (dateStr: string) => {
    const d = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (d.toDateString() === today.toDateString()) return "Today";
    if (d.toDateString() === tomorrow.toDateString()) return "Tomorrow";
    return d.toLocaleDateString("en-ZA", { weekday: "short", day: "numeric", month: "short" });
  };

  if (bookingComplete) {
    return (
      <section className="py-20 sm:py-28">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <div className="glass-card rounded-3xl p-8 sm:p-12">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your repair has been booked successfully. We&apos;ll see you at your appointment.
              </p>
              <div className="glass rounded-2xl p-5 text-left space-y-3 mb-8 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Booking ID</span>
                  <span className="font-mono font-medium">{bookingId.slice(0, 8)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Device</span>
                  <span className="font-medium">{form.phoneBrand} {form.phoneModel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Repair</span>
                  <span className="font-medium">{selectedService?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">{formatDateLabel(form.date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">{form.timeSlot}</span>
                </div>
              </div>
              <a
                href={`https://wa.me/27617353919?text=${encodeURIComponent(
                  `Hi Cell Doctor, I just booked a repair (ID: ${bookingId.slice(0, 8)}). ${form.phoneBrand} ${form.phoneModel} - ${selectedService?.name}. Looking forward to my appointment on ${form.date} at ${form.timeSlot}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5
                  rounded-xl bg-green-500 text-white font-semibold
                  shadow-lg shadow-green-500/25 hover:bg-green-600 transition-all"
              >
                <Phone className="w-4 h-4" />
                Confirm on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
              Book a <span className="gradient-text">Repair</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose your device, select a repair, and pick a time. It takes less than 2 minutes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps indicator */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center
                      transition-all duration-300 ${
                        i <= currentStep
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : "bg-secondary text-muted-foreground"
                      }`}
                  >
                    {i < currentStep ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span className={`text-[10px] sm:text-xs mt-1.5 font-medium ${
                    i <= currentStep ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-0.5 w-6 sm:w-12 lg:w-20 mx-1 sm:mx-2 mb-5 rounded-full transition-colors ${
                    i < currentStep ? "bg-primary" : "bg-border"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card rounded-3xl p-6 sm:p-8">
                {/* Step 0: Device */}
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-1">Select Your Device</h2>
                      <p className="text-sm text-muted-foreground">Choose your phone brand and enter the model.</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-3">Phone Brand</label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {PHONE_BRANDS.map((brand) => (
                          <button
                            key={brand}
                            onClick={() => updateForm("phoneBrand", brand)}
                            className={`px-3 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                              form.phoneBrand === brand
                                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                                : "bg-secondary border-border hover:border-primary/50"
                            }`}
                          >
                            {brand}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Model</label>
                      <input
                        type="text"
                        value={form.phoneModel}
                        onChange={(e) => updateForm("phoneModel", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border
                          focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                        placeholder="e.g. iPhone 15 Pro, Galaxy S24 Ultra"
                      />
                    </div>
                  </div>
                )}

                {/* Step 1: Repair Type */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-1">Choose Repair Type</h2>
                      <p className="text-sm text-muted-foreground">Select the repair service you need.</p>
                    </div>
                    <div className="space-y-2">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => updateForm("serviceId", service.id)}
                          className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-200 text-left ${
                            form.serviceId === service.id
                              ? "bg-primary/5 border-primary shadow-lg shadow-primary/10"
                              : "bg-secondary border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="font-semibold text-sm">{service.name}</div>
                          <div className="text-xs text-muted-foreground">~{service.duration} min</div>
                        </button>
                      ))}
                      {services.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground text-sm">
                          <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
                          Loading services...
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-1">Pick Date & Time</h2>
                      <p className="text-sm text-muted-foreground">Select your preferred appointment slot.</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-3">Date</label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {generateDates().map((date) => (
                          <button
                            key={date}
                            onClick={() => { updateForm("date", date); updateForm("timeSlot", ""); }}
                            className={`px-3 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                              form.date === date
                                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                                : "bg-secondary border-border hover:border-primary/50"
                            }`}
                          >
                            {formatDateLabel(date)}
                          </button>
                        ))}
                      </div>
                    </div>
                    {form.date && (
                      <div>
                        <label className="block text-sm font-medium mb-3">Time Slot</label>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                          {timeSlots.map((slot) => {
                            const isBooked = bookedSlots.includes(slot.time);
                            return (
                              <button
                                key={slot.id}
                                onClick={() => !isBooked && updateForm("timeSlot", slot.time)}
                                disabled={isBooked}
                                className={`px-3 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                                  isBooked
                                    ? "bg-muted text-muted-foreground/50 border-border cursor-not-allowed line-through"
                                    : form.timeSlot === slot.time
                                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                                    : "bg-secondary border-border hover:border-primary/50"
                                }`}
                              >
                                {slot.time}
                              </button>
                            );
                          })}
                          {timeSlots.length === 0 && (
                            <div className="col-span-full text-center py-4 text-muted-foreground text-sm">
                              <Loader2 className="w-5 h-5 animate-spin mx-auto mb-1" />
                              Loading...
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Customer Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-1">Your Details</h2>
                      <p className="text-sm text-muted-foreground">We&apos;ll use this to confirm your booking.</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          value={form.customerName}
                          onChange={(e) => updateForm("customerName", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border
                            focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          value={form.customerEmail}
                          onChange={(e) => updateForm("customerEmail", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border
                            focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={form.customerPhone}
                          onChange={(e) => updateForm("customerPhone", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border
                            focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                          placeholder="e.g. 061 234 5678"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Notes <span className="text-muted-foreground font-normal">(optional)</span>
                        </label>
                        <textarea
                          value={form.notes}
                          onChange={(e) => updateForm("notes", e.target.value)}
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border
                            focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm resize-none"
                          placeholder="Describe the issue with your phone..."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Confirm */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-1">Confirm Booking</h2>
                      <p className="text-sm text-muted-foreground">Review your details and confirm.</p>
                    </div>
                    <div className="glass rounded-2xl p-5 space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Device</span>
                        <span className="font-medium">{form.phoneBrand} {form.phoneModel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Repair</span>
                        <span className="font-medium">{selectedService?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date</span>
                        <span className="font-medium">{formatDateLabel(form.date)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time</span>
                        <span className="font-medium">{form.timeSlot}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Name</span>
                        <span className="font-medium">{form.customerName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Email</span>
                        <span className="font-medium">{form.customerEmail}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Phone</span>
                        <span className="font-medium">{form.customerPhone}</span>
                      </div>
                      {form.notes && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Notes</span>
                          <span className="font-medium text-right max-w-[200px]">{form.notes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-6 gap-4">
                {currentStep > 0 ? (
                  <button
                    onClick={() => setCurrentStep((s) => s - 1)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border
                      font-medium text-sm hover:bg-secondary/50 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < steps.length - 1 ? (
                  <button
                    onClick={() => canProceed() && setCurrentStep((s) => s + 1)}
                    disabled={!canProceed()}
                    className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm
                      transition-all duration-300 ${
                        canProceed()
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:scale-105"
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                      }`}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm
                      bg-primary text-primary-foreground shadow-lg shadow-primary/25
                      hover:scale-105 transition-all duration-300 disabled:opacity-70"
                  >
                    {submitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4" />
                    )}
                    {submitting ? "Booking..." : "Confirm Booking"}
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
