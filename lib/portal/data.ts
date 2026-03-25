import {
  portalAnnouncements,
  portalAssignments,
  portalCalendarItems,
  portalCourses,
  portalQuizQuestions,
  portalResources,
  portalStudents,
  portalSummary,
} from "@/lib/mock-data/portal";

export async function getPortalDashboardData() {
  return {
    summary: portalSummary,
    announcements: portalAnnouncements,
  };
}

export async function getPortalStudents() {
  return portalStudents;
}

export async function getPortalStudentById(studentId: string) {
  return portalStudents.find((student) => student.id === studentId) ?? null;
}

export async function getPortalCourses() {
  return portalCourses;
}

export async function getPortalCourseBySlug(courseSlug: string) {
  return portalCourses.find((course) => course.slug === courseSlug) ?? null;
}

export async function getPortalAssignments() {
  return portalAssignments;
}

export async function getPortalQuizQuestions() {
  return portalQuizQuestions;
}

export async function getPortalAnnouncements() {
  return portalAnnouncements;
}

export async function getPortalResources() {
  return portalResources;
}

export async function getPortalCalendarItems() {
  return portalCalendarItems;
}

export async function getStudentPreviewData() {
  return {
    student: portalStudents[0],
    announcements: portalAnnouncements,
    assignments: portalAssignments.slice(0, 2),
    courses: portalCourses.slice(0, 3),
    resources: portalResources.slice(0, 3),
    calendarItems: portalCalendarItems.slice(0, 3),
  };
}

// TODO: Replace these mock-returning functions with Supabase-backed queries.
// Suggested next step:
// - students -> student_profiles table
// - courses -> course_modules table
// - lessons -> lessons table
// - assignments -> assignments and submissions tables
// - announcements -> announcements table
// - resources -> resources table + storage buckets
