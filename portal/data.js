// TODO: replace with API call to /api/auth/login
export const CUSTOMERS = {
  "customer@proagrar.si": {
    password: "demo2024",
    name: "Janez Novak",
    reports: [
      // TODO: replace with API call to /api/customer/:id/reports
      { id: 1, title: "Spring Soil Analysis 2024",       date: "2024-03-15", category: "Soil",       url: "/reports/soil-2024.pdf" },
      { id: 2, title: "Pesticide Application Report Q2", date: "2024-06-01", category: "Protection", url: "/reports/pest-q2-2024.pdf" },
      { id: 3, title: "Harvest Summary — North Field",   date: "2024-09-20", category: "Harvest",    url: "/reports/harvest-2024.pdf" },
    ],
    actions: [
      // TODO: replace with API call to /api/customer/:id/actions
      { type: "completed", action: "Herbicide spraying",   field: "North Field", ha: 12.5, date: "2024-05-10" },
      { type: "completed", action: "Soil sampling",        field: "South Field", ha:  8.0, date: "2024-03-02" },
      { type: "planned",   action: "Autumn fertilization", field: "South Field", ha:  8.0, date: "2024-10-10" },
      { type: "planned",   action: "Winter wheat seeding", field: "East Parcel", ha:  5.3, date: "2024-10-25" },
    ],
  },
};
