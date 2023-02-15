import moment from "moment";

export const dateUtils = {
  formatDate: (date: any) => {
    return moment(date).format("HH:mm DD/MM/YYYY");
  },
};
