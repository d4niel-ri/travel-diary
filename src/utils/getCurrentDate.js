const getCurrentDate = () => {
  // Create a new Date object for the current date
  const currentDate = new Date();

  // Get the day, month, and year from the Date object
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
  const year = currentDate.getFullYear();

  // Create functions to add leading zeros if needed
  const addLeadingZero = (value) => {
    return value < 10 ? "0" + value : value;
  };

  // Format the date as "dd-mm-yyyy"
  return`${addLeadingZero(day)}-${addLeadingZero(month)}-${year}`;
}

export default getCurrentDate;