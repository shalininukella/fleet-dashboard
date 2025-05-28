module.exports = {
  7: [
    { day: "Mon", usage: 40 },
    { day: "Tue", usage: 55 },
    { day: "Wed", usage: 60 },
    { day: "Thu", usage: 50 },
    { day: "Fri", usage: 70 },
    { day: "Sat", usage: 30 },
    { day: "Sun", usage: 20 },
  ],
  15: [
    { day: "Day 1", usage: 40 },
    { day: "Day 2", usage: 45 },
    { day: "Day 3", usage: 55 },
    { day: "Day 4", usage: 50 },
    { day: "Day 5", usage: 60 },
    { day: "Day 6", usage: 70 },
    { day: "Day 7", usage: 65 },
    { day: "Day 8", usage: 55 },
    { day: "Day 9", usage: 45 },
    { day: "Day 10", usage: 50 },
    { day: "Day 11", usage: 60 },
    { day: "Day 12", usage: 70 },
    { day: "Day 13", usage: 65 },
    { day: "Day 14", usage: 55 },
    { day: "Day 15", usage: 50 },
  ],
  30: [
    ...Array.from({ length: 30 }, (_, i) => ({
      day: `Day ${i + 1}`,
      usage: Math.floor(30 + Math.random() * 50),
    })),
  ],
};
