import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create admin user
  const hashedPassword = await bcrypt.hash("celldoctor2024", 12);
  await prisma.admin.upsert({
    where: { email: "admin@celldoctor.co.za" },
    update: {},
    create: {
      email: "admin@celldoctor.co.za",
      password: hashedPassword,
      name: "Qaiser Ali",
    },
  });
  console.log("Admin user created: admin@celldoctor.co.za / celldoctor2024");

  // Create services
  const services = [
    { name: "Screen Repair", description: "Cracked or broken screen replacement for all brands", price: 350, duration: 45, icon: "smartphone", sortOrder: 1 },
    { name: "Battery Replacement", description: "Restore your phone's battery life to like-new condition", price: 250, duration: 30, icon: "battery", sortOrder: 2 },
    { name: "Charging Port Repair", description: "Fix loose or damaged charging ports quickly", price: 200, duration: 35, icon: "plug", sortOrder: 3 },
    { name: "Water Damage Repair", description: "Expert water damage assessment and repair", price: 400, duration: 120, icon: "droplets", sortOrder: 4 },
    { name: "Speaker & Mic Repair", description: "Restore clear audio with speaker and mic repairs", price: 200, duration: 35, icon: "volume2", sortOrder: 5 },
    { name: "Camera Repair", description: "Fix blurry, cracked, or non-functioning cameras", price: 300, duration: 45, icon: "camera", sortOrder: 6 },
    { name: "Software Issues", description: "Resolve crashes, bugs, and software-related problems", price: 150, duration: 45, icon: "code", sortOrder: 7 },
    { name: "Diagnostics", description: "Comprehensive phone health check and diagnostics", price: 0, duration: 20, icon: "search", sortOrder: 8 },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { id: service.name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and") },
      update: service,
      create: { id: service.name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and"), ...service },
    });
  }
  console.log(`${services.length} services created`);

  // Create time slots
  const times = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
    "17:00", "17:30",
  ];

  for (let i = 0; i < times.length; i++) {
    const id = `slot-${times[i].replace(":", "")}`;
    await prisma.timeSlot.upsert({
      where: { id },
      update: { time: times[i], sortOrder: i },
      create: { id, time: times[i], sortOrder: i, active: true },
    });
  }
  console.log(`${times.length} time slots created`);

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
