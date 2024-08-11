export function getInitials(fullName) {
  if (!fullName) return "AB"; // Handle case when fullName is empty or undefined

  const names = fullName.trim().split(" ").filter(Boolean);

  const initials = names.slice(0, 2).map((name) => name[0].toUpperCase());

  const initialsStr = initials.join("");

  return initialsStr;
}
