"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  Wrench,
  Users,
  LogOut,
  RefreshCw,
  Ban,
  CheckCircle2,
  XCircle,
  Loader2,
  DollarSign,
  ChevronDown,
  Plus,
  Trash2,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface Booking {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  phoneBrand: string;
  phoneModel: string;
  date: string;
  timeSlot: string;
  notes: string;
  status: string;
  paymentStatus: string;
  totalPrice: number;
  createdAt: string;
  service: { name: string; price: number };
}

interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  active: boolean;
}

interface TimeSlotItem {
  id: string;
  time: string;
  active: boolean;
}

interface BlockedDate {
  id: string;
  date: string;
  reason: string;
}

type Tab = "bookings" | "services" | "timeslots" | "blocked";

export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("bookings");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlotItem[]>([]);
  const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([]);
  const [loading, setLoading] = useState(true);
  const [newBlockDate, setNewBlockDate] = useState("");
  const [newBlockReason, setNewBlockReason] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const [b, s, t, bd] = await Promise.all([
        fetch("/api/admin/bookings").then((r) => r.json()),
        fetch("/api/admin/services").then((r) => r.json()),
        fetch("/api/admin/timeslots").then((r) => r.json()),
        fetch("/api/admin/blocked-dates").then((r) => r.json()),
      ]);
      if (Array.isArray(b)) setBookings(b);
      if (Array.isArray(s)) setServices(s);
      if (Array.isArray(t)) setTimeSlots(t);
      if (Array.isArray(bd)) setBlockedDates(bd);
    } catch (e) {
      console.error("Fetch error:", e);
    }
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const updateBookingStatus = async (id: string, status: string) => {
    await fetch("/api/admin/bookings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    fetchData();
  };

  const updateBookingPayment = async (id: string, paymentStatus: string) => {
    await fetch("/api/admin/bookings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, paymentStatus }),
    });
    fetchData();
  };

  const updateServicePrice = async (id: string, price: number) => {
    await fetch("/api/admin/services", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, price }),
    });
    fetchData();
  };

  const toggleServiceActive = async (id: string, active: boolean) => {
    await fetch("/api/admin/services", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, active }),
    });
    fetchData();
  };

  const toggleSlotActive = async (id: string, active: boolean) => {
    await fetch("/api/admin/timeslots", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, active }),
    });
    fetchData();
  };

  const blockDate = async () => {
    if (!newBlockDate) return;
    await fetch("/api/admin/blocked-dates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: newBlockDate, reason: newBlockReason }),
    });
    setNewBlockDate("");
    setNewBlockReason("");
    fetchData();
  };

  const unblockDate = async (id: string) => {
    await fetch("/api/admin/blocked-dates", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchData();
  };

  const statusColor = (s: string) => {
    switch (s) {
      case "pending": return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400";
      case "confirmed": return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
      case "in-progress": return "bg-purple-500/10 text-purple-600 dark:text-purple-400";
      case "completed": return "bg-green-500/10 text-green-600 dark:text-green-400";
      case "cancelled": return "bg-red-500/10 text-red-600 dark:text-red-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const paymentColor = (s: string) => {
    switch (s) {
      case "paid": return "bg-green-500/10 text-green-600 dark:text-green-400";
      case "pending": return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400";
      case "pay-in-store": return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.status === "pending").length,
    today: bookings.filter((b) => b.date === new Date().toISOString().split("T")[0]).length,
    revenue: bookings.filter((b) => b.paymentStatus === "paid").reduce((a, b) => a + b.totalPrice, 0),
  };

  const tabs: { id: Tab; label: string; icon: typeof Calendar }[] = [
    { id: "bookings", label: "Bookings", icon: Calendar },
    { id: "services", label: "Services", icon: Wrench },
    { id: "timeslots", label: "Time Slots", icon: Clock },
    { id: "blocked", label: "Blocked Dates", icon: Ban },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-sm text-muted-foreground">Cell Doctor Management</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchData}
            className="w-9 h-9 rounded-xl glass flex items-center justify-center hover:scale-110 transition-all"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
              border border-border hover:bg-secondary/50 transition-all"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Bookings", value: stats.total, icon: Calendar, color: "text-blue-500" },
          { label: "Pending", value: stats.pending, icon: Clock, color: "text-yellow-500" },
          { label: "Today", value: stats.today, icon: Users, color: "text-purple-500" },
          { label: "Revenue (Paid)", value: formatPrice(stats.revenue), icon: DollarSign, color: "text-green-500" },
        ].map((stat) => (
          <div key={stat.label} className="glass-card rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-secondary flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap
              transition-all ${
                tab === t.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
          >
            <t.icon className="w-4 h-4" />
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : (
        <>
          {/* Bookings Tab */}
          {tab === "bookings" && (
            <div className="space-y-3">
              {bookings.length === 0 ? (
                <div className="glass-card rounded-2xl p-12 text-center text-muted-foreground">
                  No bookings yet
                </div>
              ) : (
                bookings.map((booking) => (
                  <div key={booking.id} className="glass-card rounded-2xl p-5">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="font-bold">{booking.customerName}</span>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${paymentColor(booking.paymentStatus)}`}>
                            {booking.paymentStatus}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                          <span>{booking.phoneBrand} {booking.phoneModel}</span>
                          <span>{booking.service.name}</span>
                          <span>{booking.date} at {booking.timeSlot}</span>
                          <span>{formatPrice(booking.totalPrice)}</span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 text-xs text-muted-foreground">
                          <span>{booking.customerEmail}</span>
                          <span>{booking.customerPhone}</span>
                          {booking.notes && <span className="italic">{booking.notes}</span>}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        <select
                          value={booking.status}
                          onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                          className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs
                            focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="in-progress">In Progress</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                        <select
                          value={booking.paymentStatus}
                          onChange={(e) => updateBookingPayment(booking.id, e.target.value)}
                          className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs
                            focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="unpaid">Unpaid</option>
                          <option value="pending">Pending</option>
                          <option value="paid">Paid</option>
                          <option value="pay-in-store">Pay In-Store</option>
                          <option value="refunded">Refunded</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Services Tab */}
          {tab === "services" && (
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service.id} className="glass-card rounded-2xl p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="font-bold">{service.name}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          service.active
                            ? "bg-green-500/10 text-green-600 dark:text-green-400"
                            : "bg-red-500/10 text-red-600 dark:text-red-400"
                        }`}>
                          {service.active ? "Active" : "Inactive"}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Duration: {service.duration} min
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-muted-foreground">R</span>
                        <input
                          type="number"
                          defaultValue={service.price}
                          onBlur={(e) => {
                            const val = parseFloat(e.target.value);
                            if (!isNaN(val) && val !== service.price) {
                              updateServicePrice(service.id, val);
                            }
                          }}
                          className="w-20 px-2 py-1.5 rounded-lg bg-secondary border border-border text-sm text-right
                            focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <button
                        onClick={() => toggleServiceActive(service.id, !service.active)}
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        title={service.active ? "Deactivate" : "Activate"}
                      >
                        {service.active ? (
                          <ToggleRight className="w-5 h-5 text-green-500" />
                        ) : (
                          <ToggleLeft className="w-5 h-5 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Time Slots Tab */}
          {tab === "timeslots" && (
            <div className="glass-card rounded-2xl p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => toggleSlotActive(slot.id, !slot.active)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                      slot.active
                        ? "bg-primary/5 border-primary text-primary"
                        : "bg-secondary border-border text-muted-foreground line-through"
                    }`}
                  >
                    {slot.time}
                    <div className="text-[10px] mt-0.5">
                      {slot.active ? "Active" : "Disabled"}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Blocked Dates Tab */}
          {tab === "blocked" && (
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-5">
                <h3 className="font-semibold mb-3">Block a Date</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="date"
                    value={newBlockDate}
                    onChange={(e) => setNewBlockDate(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-secondary border border-border
                      focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                  <input
                    type="text"
                    value={newBlockReason}
                    onChange={(e) => setNewBlockReason(e.target.value)}
                    placeholder="Reason (optional)"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-secondary border border-border
                      focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                  <button
                    onClick={blockDate}
                    disabled={!newBlockDate}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl
                      bg-primary text-primary-foreground font-semibold text-sm
                      disabled:opacity-50 transition-all"
                  >
                    <Plus className="w-4 h-4" /> Block
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {blockedDates.length === 0 ? (
                  <div className="glass-card rounded-2xl p-8 text-center text-muted-foreground text-sm">
                    No blocked dates
                  </div>
                ) : (
                  blockedDates.map((bd) => (
                    <div key={bd.id} className="glass-card rounded-2xl p-4 flex items-center justify-between">
                      <div>
                        <span className="font-medium">{bd.date}</span>
                        {bd.reason && (
                          <span className="text-sm text-muted-foreground ml-3">{bd.reason}</span>
                        )}
                      </div>
                      <button
                        onClick={() => unblockDate(bd.id)}
                        className="p-2 rounded-lg hover:bg-destructive/10 text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
