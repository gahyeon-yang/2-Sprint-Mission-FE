export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("ko-KR", options);

  return formattedDate
    .replace(/\//g, " .")
    .replace(/\s/g, " ")
    .replace(/\.$/, "");
};
