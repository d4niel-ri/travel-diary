export const formatDate = (inputDate) => {
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];
  
  // Split the inputDate into day, month, and year
  const parts = inputDate?.split("-");
  const day = parts[0];
  const month = months[parseInt(parts[1]) - 1]; // Subtract 1 because JavaScript months are 0-based
  const year = parts[2];
  
  // Format the date in "dd Month, yyyy" format
  const formattedDate = `${day} ${month} ${year}`;
  
  return formattedDate;
}