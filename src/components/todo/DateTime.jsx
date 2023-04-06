export const DateTime = () => {
  const showDate = new Date();
  const displayTodayDate =
    showDate.getDate() +
    "/" +
    showDate.getMonth() +
    "/" +
    showDate.getFullYear();

  return (
    <div>
      <span>{displayTodayDate}</span>
    </div>
  );
};
