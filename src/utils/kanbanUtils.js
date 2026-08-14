export const totalAmount = (users) => {
    if(!users) {
        return 0
    }

    return users.reduce((acc, user) => {
    return acc + (user?.weight || 0) * 1000;
  }, 0);

};

export const weightedAmount = (totalAmount, success) => {
  return totalAmount * (success || 0);
};