export const totalAmount = (users) => {
    if(!users) {
        return 0
    }

    return users.reduce((acc, user) => {
    return acc + (user?.weight || 0) * 1000;
  }, 0);

};

export const weightedAmount = (totalAmount, success) => {
  return Math.round(totalAmount * success);;
};

export const formatDate = (dateString) => {
  if (!dateString) return "Not Available";
  
    return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const calculateTotalPages = (totalLength, pageSize) => {
  return Math.ceil(totalLength / pageSize) || 1;
};

